import { render, screen, fireEvent } from "@testing-library/react"; // Ajout de fireEvent
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CourseList from "./CourseList";
import coursesReducer from "../../features/courses/coursesSlice";

const renderWithRedux = (preloadedState) => {
  const store = configureStore({
    reducer: {
      courses: coursesReducer,
    },
    preloadedState,
  });
  return {
    ...render(
      <Provider store={store}>
        <CourseList />
      </Provider>,
    ),
    store,
  };
};

describe("CourseList Component", () => {
  const initialState = {
    courses: {
      courses: [
        { id: 1, name: "ES6", credit: 60, isSelected: false },
        { id: 2, name: "Webpack", credit: 20, isSelected: false },
        { id: 3, name: "React", credit: 40, isSelected: false },
      ],
    },
  };

  test("it should render the CourseList component with 5 rows when 3 courses are provided", () => {
    renderWithRedux(initialState);
    const rowElements = screen.getAllByRole("row");
    expect(rowElements).toHaveLength(5);
  });

  test("it should render 3 checkboxes for the courses", () => {
    renderWithRedux(initialState);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);
  });

  test("it should dispatch selectCourse when a checkbox is clicked", () => {
    const { store } = renderWithRedux(initialState);
    const checkboxes = screen.getAllByRole("checkbox");
    const firstCheckbox = checkboxes[0];
    expect(firstCheckbox.checked).toBe(false);
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(true);
    expect(store.getState().courses.courses[0].isSelected).toBe(true);
  });

  test("it should render the CourseList component with 1 row when courses array is empty", () => {
    const state = {
      courses: {
        courses: [],
      },
    };
    renderWithRedux(state);
    const rowElements = screen.getAllByRole("row");
    const rowText = screen.getByText(/No course available yet/i);
    expect(rowElements).toHaveLength(1);
    expect(rowText).toBeInTheDocument();
  });
});
