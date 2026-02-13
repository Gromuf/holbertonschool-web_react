import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import App from "./App.jsx";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

describe("App Component", () => {
  test("renders the h1 with text School dashboard", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /School dashboard/i,
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
      const loginText = screen.queryByText("Login to access the full dashboard");
      expect(loginText).not.toBeInTheDocument();
    });

    test("renders CourseList component", () => {
      render(<App isLoggedIn={true} />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
    });
  });

  describe("Keyboard Shortcuts", () => {
    test("calls logOut function once when control and h are pressed", () => {
      const logOutSpy = jest.fn();
      render(<App logOut={logOutSpy} />);
      
      const event = new KeyboardEvent("keydown", {
        ctrlKey: true,
        key: "h",
        bubbles: true,
      });
      window.dispatchEvent(event);
      
      expect(logOutSpy).toHaveBeenCalledTimes(1);
    });

    test("displays alert with 'Logging you out' when control and h are pressed", () => {
      const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
      render(<App />);
      const event = new KeyboardEvent("keydown", {
        ctrlKey: true,
        key: "h",
        bubbles: true,
      });
      window.dispatchEvent(event);
      
      expect(alertSpy).toHaveBeenCalledWith("Logging you out");
      
      alertSpy.mockRestore();
    });
  });
});
