import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem.jsx";
import "@testing-library/jest-dom";

describe("NotificationItem component", () => {
  test("li has data-notification-type 'default' when no type is provided", () => {
    render(<NotificationItem value="New course available" />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveAttribute("data-notification-type", "default");
  });

  test("li has data-notification-type is urgent when type is urgent", () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveAttribute("data-notification-type", "urgent");
  });

  test("renders correctly when 'html' prop is provided", () => {
    const htmlContent = { __html: "<u>Underlined text</u>" };
    render(<NotificationItem type="default" html={htmlContent} />);
    const item = screen.getByRole("listitem");
    expect(item).toContainHTML("<u>Underlined text</u>");
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

  test("does not crash when clicked and markAsRead is not provided", () => {
    render(<NotificationItem id={1} value="No crash test" />);
    const item = screen.getByRole("listitem");
    expect(() => fireEvent.click(item)).not.toThrow();
  });
});
