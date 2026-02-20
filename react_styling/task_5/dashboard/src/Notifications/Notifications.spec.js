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
    expect(screen.getByText(/Your notifications/i)).toBeDefined();

    rerender(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/Your notifications/i)).toBeDefined();
  });
  describe("When displayDrawer is false", () => {
    test("should not display the close button, the p element, or notification items", () => {
      render(
        <Notifications
          displayDrawer={false}
          notifications={listNotifications}
        />,
      );
      expect(screen.queryByLabelText(/Close/i)).toBeNull();
      expect(
        screen.queryByText(/Here is the list of notifications/i),
      ).toBeNull();
      expect(screen.queryByRole("listitem")).toBeNull();
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
      expect(screen.getByLabelText(/Close/i)).toBeDefined();
      expect(
        screen.getByText(/Here is the list of notifications/i),
      ).toBeDefined();
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
    test("should call console.log when close button is clicked", () => {
      const consoleSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});
      render(
        <Notifications
          displayDrawer={true}
          notifications={listNotifications}
        />,
      );
      fireEvent.click(screen.getByLabelText(/Close/i));
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringMatching(/Close button has been clicked/i),
      );
    });
  });
  describe("Performance Optimization (shouldComponentUpdate)", () => {
    let renderSpy;
    beforeEach(() => {
      renderSpy = jest.spyOn(Notifications.prototype, "render");
    });
    afterEach(() => {
      renderSpy.mockRestore();
    });
    it("does not re-render if the notifications list length is the same", () => {
      const { rerender } = render(
        <Notifications
          displayDrawer={true}
          notifications={listNotifications}
        />,
      );
      expect(renderSpy).toHaveBeenCalledTimes(1);
      const sameSizeList = [
        { id: 1, type: "default", value: "A" },
        { id: 2, type: "default", value: "B" },
        { id: 3, type: "default", value: "C" },
      ];
      rerender(
        <Notifications displayDrawer={true} notifications={sameSizeList} />,
      );
      expect(renderSpy).toHaveBeenCalledTimes(1);
    });
    it("re-renders if the notifications list length changes", () => {
      const { rerender } = render(
        <Notifications
          displayDrawer={true}
          notifications={listNotifications}
        />,
      );
      expect(renderSpy).toHaveBeenCalledTimes(1);
      const shorterList = [{ id: 1, type: "default", value: "Only one left" }];
      rerender(
        <Notifications displayDrawer={true} notifications={shorterList} />,
      );
      expect(renderSpy).toHaveBeenCalledTimes(2);
    });
  });
});
