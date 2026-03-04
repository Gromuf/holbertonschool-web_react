import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem.jsx";
import "@testing-library/jest-dom";

describe("NotificationItem component", () => {
  test("li has data-notification-type is default when type is default", () => {
    render(<NotificationItem type="default" value="New course available" />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveAttribute("data-notification-type", "default");
  });

  test("li has data-notification-type is urgent when type is urgent", () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveAttribute("data-notification-type", "urgent");
  });

  test("calls markAsRead prop with the right ID when clicked", () => {
    const markAsReadMock = jest.fn();
    const id = 7;
    render(
      <NotificationItem
        id={id}
        type="default"
        value="test"
        markAsRead={markAsReadMock}
      />,
    );
    const item = screen.getByRole("listitem");
    fireEvent.click(item);
    expect(markAsReadMock).toHaveBeenCalledTimes(1);
    expect(markAsReadMock).toHaveBeenCalledWith(id);
  });
});
