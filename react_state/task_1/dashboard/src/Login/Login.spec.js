import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login.jsx";

test("should render one button", () => {
  render(<Login />);
  expect(screen.getByText(/ok/i));
});

test("should verify that correct elements are rendered", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const labels = screen.getAllByText(/email|password/i);
  const button = screen.getByRole("button");
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(labels).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("should focus on the 2 inputs when the related label is clicked", async () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const emailLabel = screen.getByText(/email/i);
  await userEvent.click(emailLabel);
  expect(emailInput).toHaveFocus();
  const passwordInput = screen.getByLabelText(/password/i);
  const passwordLabel = screen.getByText(/password/i);
  await userEvent.click(passwordLabel);
  expect(passwordInput).toHaveFocus();
});

describe("Login Component", () => {
  test("submit button is disabled by default", () => {
    render(<Login />);
    const submitBtn = screen.getByRole("button", { name: /OK/i });
    expect(submitBtn).toBeDisabled();
  });

  test("button becomes enabled after valid email and 8+ char password", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitBtn = screen.getByRole("button", { name: /OK/i });
    fireEvent.change(emailInput, { target: { value: "user@test.com" } });
    expect(submitBtn).toBeDisabled();
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    expect(submitBtn).toBeDisabled();
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(submitBtn).toBeEnabled();
  });
});
