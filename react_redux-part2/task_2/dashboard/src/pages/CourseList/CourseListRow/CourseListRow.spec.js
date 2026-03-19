import { render, screen, within, fireEvent } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

test('it should display 1 "th" element with colspan=3 when isHeader is true and textSecondCell is null', () => {
  render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={true}
          textFirstCell="Available courses"
          textSecondCell={null}
        />
      </tbody>
    </table>,
  );
  const thElement = screen.getByRole("columnheader");
  expect(thElement).toHaveAttribute("colSpan", "3");
});

test('it should display 2 "th" elements when isHeader is true and textSecondCell is not null', () => {
  render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </tbody>
    </table>,
  );
  const thElements = screen.getAllByRole("columnheader");
  expect(thElements).toHaveLength(2);
});

test('it should render 2 "td" elements and a checkbox inside a "tr" element when isHeader is false', () => {
  render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell="60"
          id="1"
        />
      </tbody>
    </table>,
  );
  const trElement = screen.getByRole("row");
  const tdElements = within(trElement).getAllByRole("cell");
  const checkbox = screen.getByRole("checkbox");
  expect(trElement).toBeInTheDocument();
  expect(tdElements).toHaveLength(2);
  expect(checkbox).toBeInTheDocument();
});

test("it should call onChangeRow with correct arguments when checkbox is clicked", () => {
  const onChangeRowMock = jest.fn();
  render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          id="1"
          onChangeRow={onChangeRowMock}
        />
      </tbody>
    </table>,
  );
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(onChangeRowMock).toHaveBeenCalledWith("1", true);
});
