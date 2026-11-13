import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginPage from "./page";

// Mock LoginForm agar tes halaman fokus pada struktur page.tsx saja
vi.mock("./LoginForm", () => ({
  default: () => <div data-testid="login-form" />,
}));

describe("LoginPage", () => {
  it("merender landmark main, heading utama, dan deskripsi halaman", async () => {
    // Menggunakan await agar tetap jalan meskipun LoginPage bertipe async
    render(await LoginPage());

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Masuk ke Akunmu" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Masuk untuk mengelola tiket dan/i),
    ).toBeInTheDocument();
  });

  it("merender komponen LoginForm di dalam halaman", async () => {
    render(await LoginPage());

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });
});
