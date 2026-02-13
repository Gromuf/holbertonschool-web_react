import { expect, test, jest } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import Notifications from "./Notifications";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<u>test html</u>" } },
];

test("should render title", () => {
  render(<Notifications notifications={listNotifications} />);
  expect(screen.getByText(/Here is the list of notifications/i)).toBeDefined();
});

test("should render button", () => {
  render(<Notifications notifications={listNotifications} />);
  expect(screen.getByLabelText(/Close/i)).toBeDefined();
});

test("should render 3 li items", () => {
  render(<Notifications notifications={listNotifications} />);
  expect(screen.getAllByRole("listitem").length).toBe(3);
});

test("should render the correct text for each notification", () => {
  render(<Notifications notifications={listNotifications} />);
  expect(screen.getByText(/New course available/i)).toBeDefined();
  expect(screen.getByText(/New resume available/i)).toBeDefined();
  expect(screen.getByText(/test html/i)).toBeDefined();
});

test("should call console.log when button is clicked", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  render(<Notifications notifications={listNotifications} />);
  fireEvent.click(screen.getByLabelText(/Close/i));
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringMatching(/Close button has been clicked/i),
  );
  consoleSpy.mockRestore();
});
