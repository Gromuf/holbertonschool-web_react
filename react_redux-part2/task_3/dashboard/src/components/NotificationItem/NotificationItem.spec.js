import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

test("it should call markAsRead with the correct id when the notification item is clicked", () => {
  const mockMarkAsRead = jest.fn();
  const props = {
    id: 42,
    type: "default",
    value: "Test notification",
    markAsRead: mockMarkAsRead,
  };
  render(<NotificationItem {...props} />);
  const liElement = screen.getByRole("listitem");
  fireEvent.click(liElement);
  expect(mockMarkAsRead).toHaveBeenCalledTimes(1);
  expect(mockMarkAsRead).toHaveBeenCalledWith(42);
});

describe("NotificationItem - React.memo behavior", () => {
  let markAsRead;
  beforeEach(() => {
    jest.clearAllMocks();
    markAsRead = jest.fn();
  });
  test("should update when props change", () => {
    const { rerender } = render(
      <NotificationItem
        id={1}
        type="urgent"
        value="New notification"
        markAsRead={markAsRead}
      />,
    );
    const firstRenderContent = screen.getByText("New notification");
    expect(firstRenderContent).toBeInTheDocument();
    rerender(
      <NotificationItem
        id={1}
        type="urgent"
        value="Updated notification"
        markAsRead={markAsRead}
      />,
    );
    const secondRenderContent = screen.getByText("Updated notification");
    expect(secondRenderContent).toBeInTheDocument();
    expect(screen.queryByText("New notification")).not.toBeInTheDocument();
  });
  test("should not re-render when props do not change", () => {
    const { rerender } = render(
      <NotificationItem
        id={1}
        type="urgent"
        value="Static notification"
        markAsRead={markAsRead}
      />,
    );
    const firstElement = screen.getByRole("listitem");
    rerender(
      <NotificationItem
        id={1}
        type="urgent"
        value="Static notification"
        markAsRead={markAsRead}
      />,
    );
    const secondElement = screen.getByRole("listitem");
    expect(secondElement.textContent).toBe(firstElement.textContent);
    expect(secondElement).toHaveAttribute("data-notification-type", "urgent");
  });
});
