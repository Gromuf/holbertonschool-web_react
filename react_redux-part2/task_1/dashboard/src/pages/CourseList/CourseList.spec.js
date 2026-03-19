import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CourseList from "./CourseList";
import coursesReducer from "../../features/courses/coursesSlice";

// Fonction utilitaire pour rendre le composant avec un état Redux spécifique
const renderWithRedux = (preloadedState) => {
  const store = configureStore({
    reducer: {
      courses: coursesReducer,
    },
    preloadedState,
  });
  return render(
    <Provider store={store}>
      <CourseList />
    </Provider>,
  );
};

describe("CourseList Component", () => {
  test("it should render the CourseList component with 5 rows when 3 courses are provided", () => {
    // 3 cours + 2 lignes d'en-tête = 5 lignes
    const state = {
      courses: {
        courses: [
          { id: 1, name: "ES6", credit: 60 },
          { id: 2, name: "Webpack", credit: 20 },
          { id: 3, name: "React", credit: 40 },
        ],
      },
    };

    renderWithRedux(state);

    const rowElements = screen.getAllByRole("row");
    expect(rowElements).toHaveLength(5);
  });

  test("it should render the CourseList component with 1 row when courses array is empty", () => {
    const state = {
      courses: {
        courses: [],
      },
    };

    renderWithRedux(state);

    const rowElement = screen.getAllByRole("row");
    const rowText = screen.getByText(/No course available yet/i);

    expect(rowElement).toHaveLength(1);
    expect(rowText).toBeInTheDocument();
  });
});
