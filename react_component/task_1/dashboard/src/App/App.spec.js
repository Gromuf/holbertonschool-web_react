import { cleanup, render, screen } from "@testing-library/react";
import App from "./App.jsx";

afterEach(() => {
  cleanup();
});

describe("App Component", () => {
  test("renders the h1 with text School dashboard", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "School dashboard",
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders the correct text in footer paragraph", () => {
    render(<App />);
    const footerParagraph = screen.getByText(
      /copyright\s+\d{4}\s+-\s+holberton school/i,
    );
    expect(footerParagraph).toBeInTheDocument();
  });

  test("renders an image with alt text holberton logo", () => {
    render(<App />);
    const logoImage = screen.getByAltText("holberton logo");
    expect(logoImage).toBeInTheDocument();
  });

  describe("When isLoggedIn is false", () => {
    test("renders Login to access the full dashboard text", () => {
      render(<App isLoggedIn={false} />);
      expect(
        screen.getByText("Login to access the full dashboard"),
      ).toBeInTheDocument();
    });

    test("renders 2 input elements (email and password)", () => {
      const { container } = render(<App isLoggedIn={false} />);
      const emailInput = container.querySelector('input[type="email"]');
      const passwordInput = container.querySelector('input[type="password"]');
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("renders 2 label elements with text Email and Password", () => {
      render(<App isLoggedIn={false} />);
      expect(screen.getByText(/email/i)).toBeInTheDocument();
      expect(screen.getByText(/password/i)).toBeInTheDocument();
    });

    test("renders a button with the text OK", () => {
      render(<App isLoggedIn={false} />);
      const button = screen.getByRole("button", { name: /ok/i });
      expect(button).toBeInTheDocument();
    });

    test("does not render CourseList component", () => {
      render(<App isLoggedIn={false} />);
      const table = screen.queryByRole("table");
      expect(table).not.toBeInTheDocument();
    });
  });

  describe("When isLoggedIn is true", () => {
    test("does not render Login component", () => {
      render(<App isLoggedIn={true} />);
      const loginText = screen.queryByText(
        "Login to access the full dashboard",
      );
      expect(loginText).not.toBeInTheDocument();
    });

    test("renders CourseList component", () => {
      render(<App isLoggedIn={true} />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
      expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
    });
  });
  describe("Keyboard Shortcut", () => {
    test("calls logOut function and shows alert when Ctrl+H is pressed", () => {
      const logOutMock = jest.fn();
      render(<App logOut={logOutMock} />);
      fireEvent.keyDown(window, { ctrlKey: true, key: "h" });
      expect(logOutMock).toHaveBeenCalledTimes(1);
    });
    test("shows alert with message 'Logging you out' when Ctrl+H is pressed", () => {
      const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
      render(<App />);
      fireEvent.keyDown(window, { ctrlKey: true, key: "h" });
      expect(window.alert).toHaveBeenCalledWith("Logging you out");
      alertSpy.mockRestore();
    });
  });
});
