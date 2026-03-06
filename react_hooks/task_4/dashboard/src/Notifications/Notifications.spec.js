import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";
import React from "react";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<u>test html</u>" } },
];

describe("Notifications Component", () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  test("should always render 'Your notifications' title", () => {
    const { rerender } = render(<Notifications displayDrawer={false} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();

    rerender(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  describe("When displayDrawer is false", () => {
    test("should not display the close button, the p element, or notification items", () => {
      render(
        <Notifications
          displayDrawer={false}
          notifications={listNotifications}
        />,
      );
      expect(screen.queryByLabelText(/Close/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(/Here is the list of notifications/i),
      ).not.toBeInTheDocument();
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });

  describe("When displayDrawer is true", () => {
    test("should render the close button and the p element", () => {
      render(
        <Notifications
          displayDrawer={true}
          notifications={listNotifications}
        />,
      );
      expect(screen.getByLabelText(/Close/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Here is the list of notifications/i),
      ).toBeInTheDocument();
    });

    test("should render 3 li items when notifications prop is provided", () => {
      render(
        <Notifications
          displayDrawer={true}
          notifications={listNotifications}
        />,
      );
      expect(screen.getAllByRole("listitem").length).toBe(3);
    });

    test("renders correctly when notifications list is empty", () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(
        screen.getByText(/No new notification for now/i),
      ).toBeInTheDocument();
      expect(
        screen.queryByText(/Here is the list of notifications/i),
      ).not.toBeInTheDocument();
    });
  });
});

describe("Notifications Component - Interaction Tests", () => {
  test("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />,
    );
    fireEvent.click(screen.getByText(/Your notifications/i));
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test("verify that clicking on the close button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
        notifications={listNotifications}
      />,
    );
    fireEvent.click(screen.getByLabelText(/Close/i));
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test("verify that clicking on a NotificationItem calls markNotificationAsRead", () => {
    const markNotificationAsReadSpy = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        notifications={listNotifications}
        markNotificationAsRead={markNotificationAsReadSpy}
      />,
    );
    const listItems = screen.getAllByRole("listitem");
    fireEvent.click(listItems[0]);
    expect(markNotificationAsReadSpy).toHaveBeenCalledWith(1);
  });
});
