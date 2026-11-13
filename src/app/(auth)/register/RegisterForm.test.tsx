import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import RegisterForm from "./RegisterForm";
import signup from "./action";

vi.mock("./action", () => ({
  default: vi.fn(),
}));

describe("RegisterForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("merender seluruh elemen form pendaftaran dengan benar", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText("Nama Lengkap")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Kata Sandi")).toBeInTheDocument();
    expect(screen.getByLabelText("Konfirmasi Kata Sandi")).toBeInTheDocument();

    // Terdapat 2 tombol toggle password (untuk Kata Sandi & Konfirmasi Kata Sandi)
    const toggleButtons = screen.getAllByRole("button", {
      name: "Tampilkan kata sandi",
    });
    expect(toggleButtons).toHaveLength(2);

    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();

    const loginLink = screen.getByRole("link", { name: "Masuk" });
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it("menampilkan dan menyembunyikan kedua input kata sandi saat tombol mata diklik", async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    const passwordInput = screen.getByLabelText("Kata Sandi");
    const confirmPasswordInput = screen.getByLabelText("Konfirmasi Kata Sandi");
    const toggleButtons = screen.getAllByRole("button", {
      name: "Tampilkan kata sandi",
    });

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(confirmPasswordInput).toHaveAttribute("type", "password");

    // Klik salah satu tombol mata -> kedua input harus berubah menjadi text
    await user.click(toggleButtons[0]);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(confirmPasswordInput).toHaveAttribute("type", "text");
    expect(
      screen.getAllByRole("button", { name: "Sembunyikan kata sandi" }),
    ).toHaveLength(2);

    // Klik lagi -> kedua input kembali tersembunyi
    await user.click(
      screen.getAllByRole("button", { name: "Sembunyikan kata sandi" })[0],
    );
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(confirmPasswordInput).toHaveAttribute("type", "password");
  });

  it("mengirim FormData, menampilkan pesan error dinamis, dan mempertahankan isi input saat gagal", async () => {
    const user = userEvent.setup();

    vi.mocked(signup).mockResolvedValueOnce({
      isError: true,
      username: "Taufik Yoga",
      email: "taufik@example.com",
      password: "password123",
      valPassword: "berbeda123",
      message: "Konfirmasi sandi tidak sama.",
    });

    render(<RegisterForm />);

    await user.type(screen.getByLabelText("Nama Lengkap"), "Taufik Yoga");
    await user.type(screen.getByLabelText("Email"), "taufik@example.com");
    await user.type(screen.getByLabelText("Kata Sandi"), "password123");
    await user.type(
      screen.getByLabelText("Konfirmasi Kata Sandi"),
      "berbeda123",
    );
    await user.click(screen.getByRole("button", { name: "Sign up" }));

    // 1. Pastikan pesan error dari responseState.message tampil
    expect(
      await screen.findByText("Konfirmasi sandi tidak sama."),
    ).toBeInTheDocument();

    // 2. Pastikan seluruh field terkirim di FormData
    expect(signup).toHaveBeenCalledTimes(1);
    const submittedFormData = vi.mocked(signup).mock.calls[0][1] as FormData;
    expect(submittedFormData.get("username")).toBe("Taufik Yoga");
    expect(submittedFormData.get("email")).toBe("taufik@example.com");
    expect(submittedFormData.get("password")).toBe("password123");
    expect(submittedFormData.get("valPassword")).toBe("berbeda123");

    // 3. Pastikan nilai seluruh input tetap bertahan
    expect(screen.getByLabelText("Nama Lengkap")).toHaveValue("Taufik Yoga");
    expect(screen.getByLabelText("Email")).toHaveValue("taufik@example.com");
    expect(screen.getByLabelText("Kata Sandi")).toHaveValue("password123");
    expect(screen.getByLabelText("Konfirmasi Kata Sandi")).toHaveValue(
      "berbeda123",
    );
  });

  it("menonaktifkan tombol dan menampilkan spinner saat proses pendaftaran berjalan", async () => {
    const user = userEvent.setup();

    let resolveAction!: (value: {
      isError: boolean;
      username: string;
      email: string;
      password: string;
      valPassword: string;
      message: string;
    }) => void;

    vi.mocked(signup).mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveAction = resolve;
        }),
    );

    render(<RegisterForm />);

    const submitButton = screen.getByRole("button", { name: "Sign up" });

    await user.type(screen.getByLabelText("Nama Lengkap"), "Taufik Yoga");
    await user.type(screen.getByLabelText("Email"), "taufik@example.com");
    await user.type(screen.getByLabelText("Kata Sandi"), "rahasia123");
    await user.type(
      screen.getByLabelText("Konfirmasi Kata Sandi"),
      "rahasia123",
    );
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(submitButton).not.toHaveTextContent("Sign up");

    resolveAction({
      isError: false,
      username: "",
      email: "",
      password: "",
      valPassword: "",
      message: "",
    });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
