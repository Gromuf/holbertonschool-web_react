import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Notifications from "./Notifications";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<u>test html</u>" } },
];

test("should always render 'Your notifications' title", () => {
  const { rerender } = render(<Notifications displayDrawer={false} />);
  expect(screen.getByText(/Your notifications/i)).toBeDefined();

  rerender(<Notifications displayDrawer={true} notifications={[]} />);
  expect(screen.getByText(/Your notifications/i)).toBeDefined();
});

describe("When displayDrawer is false", () => {
  test("should not display the close button, the p element, or notification items", () => {
    render(
      <Notifications displayDrawer={false} notifications={listNotifications} />,
    );

    expect(screen.queryByLabelText(/Close/i)).toBeNull();
    expect(screen.queryByText(/Here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole("listitem")).toBeNull();
  });
});

describe("When displayDrawer is true", () => {
  test("should render the close button and the p element", () => {
    render(
      <Notifications displayDrawer={true} notifications={listNotifications} />,
    );
    expect(screen.getByLabelText(/Close/i)).toBeDefined();
    expect(
      screen.getByText(/Here is the list of notifications/i),
    ).toBeDefined();
  });

  test("should render 3 li items when notifications prop is provided", () => {
    render(
      <Notifications displayDrawer={true} notifications={listNotifications} />,
    );
    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  test("should render the correct text for each notification", () => {
    render(
      <Notifications displayDrawer={true} notifications={listNotifications} />,
    );
    expect(screen.getByText(/New course available/i)).toBeDefined();
    expect(screen.getByText(/New resume available/i)).toBeDefined();
    expect(screen.getByText(/test html/i)).toBeDefined();
  });

  test("should call console.log when close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(
      <Notifications displayDrawer={true} notifications={listNotifications} />,
    );

    fireEvent.click(screen.getByLabelText(/Close/i));
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/Close button has been clicked/i),
    );
    consoleSpy.mockRestore();
  });
});

describe("When notifications prop is empty", () => {
  test("should display 'No new notification for now' when drawer is true and list is empty", () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeDefined();
    expect(screen.getByText(/Your notifications/i)).toBeDefined();
  });
});

describe("Testing markAsRead functionality", () => {
  test("should log the correct message when a notification item is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    render(
      <Notifications displayDrawer={true} notifications={listNotifications} />,
    );
    const listItems = screen.getAllByRole("listitem");
    fireEvent.click(listItems[0]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read",
    );
    fireEvent.click(listItems[1]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 2 has been marked as read",
    );
    consoleSpy.mockRestore();
  });
});
