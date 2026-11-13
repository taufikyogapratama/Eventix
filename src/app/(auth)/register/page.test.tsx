import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import RegisterPage from "./page";

vi.mock("./RegisterForm", () => ({
  default: () => <div data-testid="register-form" />,
}));

describe("RegisterPage", () => {
  it("merender landmark main, heading utama, dan deskripsi halaman", async () => {
    render(await RegisterPage());

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Buat Akun Baru" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Daftar untuk mulai membeli dan/i),
    ).toBeInTheDocument();
  });

  it("merender komponen RegisterForm di dalam halaman", async () => {
    render(await RegisterPage());

    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  });
});
