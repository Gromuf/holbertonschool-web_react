import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import App from "./App.jsx";
import React from "react";

describe("App Component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

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
    const footerParagraph = screen.getByText(/copyright/i);
    expect(footerParagraph).toBeInTheDocument();
  });

  test("renders an image with alt text holberton logo", () => {
    render(<App />);
    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  describe("Authentication Flow", () => {
    test("renders Login component by default (isLoggedIn is false)", () => {
      render(<App />);
      expect(
        screen.getByText(/Login to access the full dashboard/i),
      ).toBeInTheDocument();
      expect(screen.queryByRole("table")).not.toBeInTheDocument();
    });

    test("renders CourseList and hides Login after successful login", async () => {
      render(<App />);

      const emailInput = screen.getByLabelText(/Email:/i);
      const passwordInput = screen.getByLabelText(/Password:/i);
      const submitBtn = screen.getByRole("button", { name: /OK/i });

      fireEvent.change(emailInput, { target: { value: "test@holberton.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitBtn);

      mockAxios.mockResponse({
        data: [
          { id: 1, name: "ES6", credit: 60 },
          { id: 2, name: "Webpack", credit: 20 },
        ],
      });

      const table = await screen.findByRole("table");
      expect(table).toBeInTheDocument();
      expect(
        screen.queryByText(/Login to access the full dashboard/i),
      ).not.toBeInTheDocument();
    });
  });

  describe("news from the school section", () => {
    test("renders the news from the school section with correct title and content", () => {
      render(<App />);
      const newsSectionTitle = screen.getByRole("heading", {
        level: 2,
        name: /News from the School/i,
      });
      const newsContent = screen.getByText(/Holberton School News goes here/i);
      expect(newsSectionTitle).toBeInTheDocument();
      expect(newsContent).toBeInTheDocument();
    });
  });

  describe("Notifications State Management", () => {
    test("clicking on a notification item removes it and logs the correct message", async () => {
      const consoleSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      render(<App />);

      mockAxios.mockResponse({
        data: [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
        ],
      });

      const menuTitle = screen.getByText(/Your notifications/i);
      fireEvent.click(menuTitle);

      const notificationItems = await screen.findAllByRole("listitem");
      const initialCount = notificationItems.length;
      const firstNotification = notificationItems[0];

      fireEvent.click(firstNotification);

      expect(consoleSpy).toHaveBeenCalledWith(
        "Notification 1 has been marked as read",
      );

      await waitFor(() => {
        const updatedItems = screen.getAllByRole("listitem");
        expect(updatedItems.length).toBe(initialCount - 1);
      });

      expect(
        screen.queryByText(/New course available/i),
      ).not.toBeInTheDocument();

      consoleSpy.mockRestore();
    });
  });
});
