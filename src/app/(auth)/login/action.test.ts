import { describe, it, expect, vi, beforeEach } from "vitest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import signin from "./action";

// 1. Mock seluruh modul eksternal yang dipanggil di action.ts
vi.mock("@/lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

describe("signin server action", () => {
  const mockSignInWithPassword = vi.fn();
  const initialState = { isError: false, email: "", password: "" };

  beforeEach(() => {
    vi.clearAllMocks();

    // Hubungkan createClient palsu agar mengembalikan objek auth.signInWithPassword palsu
    vi.mocked(createClient).mockResolvedValue({
      auth: {
        signInWithPassword: mockSignInWithPassword,
      },
    } as unknown as Awaited<ReturnType<typeof createClient>>);
  });

  it("mengembalikan isError: true beserta email dan password saat login gagal", async () => {
    // Arrange: Atur agar Supabase mengembalikan error
    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: "Invalid login credentials" },
    });

    const formData = new FormData();
    formData.append("email", "user@example.com");
    formData.append("password", "salah1234");

    // Act
    const result = await signin(initialState, formData);

    // Assert
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "salah1234",
    });
    expect(result).toEqual({
      isError: true,
      email: "user@example.com",
      password: "salah1234",
    });
    expect(revalidatePath).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });

  it("menjalankan revalidatePath dan redirect ke /dashboard saat login berhasil", async () => {
    // Arrange: Atur agar Supabase berhasil tanpa error
    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: { id: "user-123" }, session: { access_token: "token" } },
      error: null,
    });

    const formData = new FormData();
    formData.append("email", "user@example.com");
    formData.append("password", "rahasia123");

    // Act
    await signin(initialState, formData);

    // Assert
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "rahasia123",
    });
    expect(revalidatePath).toHaveBeenCalledWith("/", "layout");
    expect(redirect).toHaveBeenCalledWith("/dashboard");
  });
});
