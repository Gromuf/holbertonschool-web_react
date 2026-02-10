import { render } from "@testing-library/react";
import Login from "./Login.jsx";

describe("Login Component", () => {
  test("renders the Login component without crashing", () => {
    render(<Login />);
  });
  test("renders 2 labels, 2 inputs and 1 button", () => {
    const { getByLabelText, getByRole, container } = render(<Login />);
    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Password:");
    const inputs = container.querySelectorAll("input");
    const button = getByRole("button");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });
  test("focus the input element when the label is clicked", () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Password:");
    emailInput.focus();
    expect(emailInput).toHaveFocus();
    passwordInput.focus();
    expect(passwordInput).toHaveFocus();
  });
});
