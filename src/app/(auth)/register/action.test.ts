import { describe, it, expect, vi, beforeEach } from "vitest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import signup from "./action";

vi.mock("@/lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

describe("signup server action", () => {
  const mockSignUp = vi.fn();
  const initialState = {
    isError: false,
    username: "",
    email: "",
    password: "",
    valPassword: "",
    message: "",
  };

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(createClient).mockResolvedValue({
      auth: {
        signUp: mockSignUp,
      },
    } as unknown as Awaited<ReturnType<typeof createClient>>);
  });

  it("mengembalikan error tanpa memanggil Supabase jika password dan konfirmasi sandi tidak sama", async () => {
    const formData = new FormData();
    formData.append("username", "Taufik Yoga");
    formData.append("email", "taufik@example.com");
    formData.append("password", "rahasia123");
    formData.append("valPassword", "tidaksama123");

    const result = await signup(initialState, formData);

    expect(mockSignUp).not.toHaveBeenCalled();
    expect(result).toEqual({
      isError: true,
      username: "Taufik Yoga",
      email: "taufik@example.com",
      password: "rahasia123",
      valPassword: "tidaksama123",
      message: "Konfirmasi sandi tidak sama.",
    });
    expect(revalidatePath).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });

  it("mengembalikan pesan error saat Supabase signUp gagal", async () => {
    mockSignUp.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: "User already registered" },
    });

    const formData = new FormData();
    formData.append("username", "Taufik Yoga");
    formData.append("email", "taufik@example.com");
    formData.append("password", "rahasia123");
    formData.append("valPassword", "rahasia123");

    const result = await signup(initialState, formData);

    expect(mockSignUp).toHaveBeenCalledWith({
      email: "taufik@example.com",
      password: "rahasia123",
      options: {
        data: {
          username: "Taufik Yoga",
        },
      },
    });
    expect(result).toEqual({
      isError: true,
      username: "Taufik Yoga",
      email: "taufik@example.com",
      password: "rahasia123",
      valPassword: "rahasia123",
      message: "Kredensial register tidak valid atau email sudah terdaftar",
    });
    expect(revalidatePath).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });

  it("menjalankan revalidatePath dan redirect ke /dashboard saat pendaftaran berhasil", async () => {
    mockSignUp.mockResolvedValueOnce({
      data: { user: { id: "user-123" }, session: { access_token: "token" } },
      error: null,
    });

    const formData = new FormData();
    formData.append("username", "Taufik Yoga");
    formData.append("email", "taufik@example.com");
    formData.append("password", "rahasia123");
    formData.append("valPassword", "rahasia123");

    await signup(initialState, formData);

    expect(mockSignUp).toHaveBeenCalledWith({
      email: "taufik@example.com",
      password: "rahasia123",
      options: {
        data: {
          username: "Taufik Yoga",
        },
      },
    });
    expect(revalidatePath).toHaveBeenCalledWith("/", "layout");
    expect(redirect).toHaveBeenCalledWith("/dashboard");
  });
});
