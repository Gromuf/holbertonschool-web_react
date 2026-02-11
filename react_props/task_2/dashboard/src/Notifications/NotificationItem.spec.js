import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem.jsx";

describe("NotificationItem component", () => {
  test("renders blue li and correct data when type is default", () => {
    render(<NotificationItem type="default" value="Test default" />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveAttribute("data-notification-type", "default");
    expect(listItem).toHaveStyle("color: blue");
    expect(listItem).toHaveTextContent("Test default");
  });
  test("renders red li and correct data when type is urgent", () => {
    render(<NotificationItem type="urgent" value="Test urgent" />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveAttribute("data-notification-type", "urgent");
    expect(listItem).toHaveStyle("color: red");
    expect(listItem).toHaveTextContent("Test urgent");
  });
  test("renders dangerouslySetInnerHTML when html prop is provided", () => {
    const htmlContent = { __html: "<u>test html</u>" };
    render(<NotificationItem type="default" html={htmlContent} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem.innerHTML).toContain("<u>test html</u>");
  });
});
