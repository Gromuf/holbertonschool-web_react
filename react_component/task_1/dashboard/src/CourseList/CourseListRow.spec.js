import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  describe("When isHeader is true", () => {
    test('renders one th element with colSpan="2" when textSecondCell is null', () => {
      render(
        <table>
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Header text" />
          </thead>
        </table>,
      );

      const headerItem = screen.getByRole("columnheader");
      expect(headerItem).toBeDefined();
      expect(headerItem).toHaveAttribute("colSpan", "2");
      expect(headerItem.textContent).toBe("Header text");
    });

    test("renders two th elements when textSecondCell is present", () => {
      render(
        <table>
          <thead>
            <CourseListRow
              isHeader={true}
              textFirstCell="First"
              textSecondCell="Second"
            />
          </thead>
        </table>,
      );

      const headerItems = screen.getAllByRole("columnheader");
      expect(headerItems).toHaveLength(2);
      expect(headerItems[0].textContent).toBe("First");
      expect(headerItems[1].textContent).toBe("Second");
    });
  });

  describe("When isHeader is false", () => {
    test("renders two td elements within a tr element", () => {
      render(
        <table>
          <tbody>
            <CourseListRow
              isHeader={false}
              textFirstCell="Data 1"
              textSecondCell="Data 2"
            />
          </tbody>
        </table>,
      );

      const cells = screen.getAllByRole("cell");
      expect(cells).toHaveLength(2);
      expect(cells[0].textContent).toBe("Data 1");
      expect(cells[1].textContent).toBe("Data 2");
    });
  });
});
