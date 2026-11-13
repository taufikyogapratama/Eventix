import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import LoginForm from "./LoginForm";
import signin from "./action";

// Palsukan Server Action agar tidak memanggil Supabase asli
vi.mock("./action", () => ({
  default: vi.fn(),
}));

describe("LoginForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("merender seluruh elemen form login dengan benar", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Kata Sandi")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Tampilkan kata sandi" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();

    const registerLink = screen.getByRole("link", { name: "Daftar" });
    expect(registerLink).toHaveAttribute("href", "/register");
  });

  it("dapat menampilkan dan menyembunyikan kata sandi saat ikon mata diklik", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const passwordInput = screen.getByLabelText("Kata Sandi");
    const toggleBtn = screen.getByRole("button", {
      name: "Tampilkan kata sandi",
    });

    expect(passwordInput).toHaveAttribute("type", "password");

    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(
      screen.getByRole("button", { name: "Sembunyikan kata sandi" }),
    ).toBeInTheDocument();

    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("mengirim FormData, menampilkan pesan error, dan mempertahankan isi input saat login gagal", async () => {
    const user = userEvent.setup();

    vi.mocked(signin).mockResolvedValueOnce({
      isError: true,
      email: "user@example.com",
      password: "salah1234",
    });

    render(<LoginForm />);

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.type(screen.getByLabelText("Kata Sandi"), "salah1234");
    await user.click(screen.getByRole("button", { name: "Login" }));

    // 1. Pastikan pesan error muncul
    expect(
      await screen.findByText("Kredensial login tidak valid"),
    ).toBeInTheDocument();

    // 2. Pastikan Server Action menerima FormData yang diketik pengguna
    expect(signin).toHaveBeenCalledTimes(1);
    const submittedFormData = vi.mocked(signin).mock.calls[0][1] as FormData;
    expect(submittedFormData.get("email")).toBe("user@example.com");
    expect(submittedFormData.get("password")).toBe("salah1234");

    // 3. Pastikan nilai email dan kata sandi tetap bertahan di input
    expect(screen.getByLabelText("Email")).toHaveValue("user@example.com");
    expect(screen.getByLabelText("Kata Sandi")).toHaveValue("salah1234");
  });

  it("menonaktifkan tombol dan menampilkan spinner saat proses login sedang berjalan", async () => {
    const user = userEvent.setup();

    let resolveAction!: (value: {
      isError: boolean;
      email: string;
      password: string;
    }) => void;

    vi.mocked(signin).mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveAction = resolve;
        }),
    );

    render(<LoginForm />);

    const submitButton = screen.getByRole("button", { name: "Login" });

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.type(screen.getByLabelText("Kata Sandi"), "rahasia123");
    await user.click(submitButton);

    // Saat isPending true: tombol disabled & teks "Login" digantikan spinner
    expect(submitButton).toBeDisabled();
    expect(submitButton).not.toHaveTextContent("Login");

    // Selesaikan proses login dan pastikan tombol aktif kembali
    resolveAction({ isError: false, email: "", password: "" });
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
