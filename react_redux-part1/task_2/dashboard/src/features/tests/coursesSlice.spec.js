import mockAxios from "jest-mock-axios";
import coursesReducer, { fetchCourses } from "../courses/coursesSlice";
import { logout } from "../auth/authSlice";

describe("coursesSlice", () => {
  const initialState = {
    courses: [],
  };

  afterEach(() => {
    mockAxios.reset();
  });

  test("should return the initial state by default", () => {
    expect(coursesReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  test("should handle fetchCourses.fulfilled correctly", () => {
    const mockCourses = [
      { id: 1, name: "ES6 Basics", instructor: "John Doe" },
      { id: 2, name: "Redux Toolkit", instructor: "Jane Smith" },
    ];
    const action = {
      type: fetchCourses.fulfilled.type,
      payload: mockCourses,
    };
    const newState = coursesReducer(initialState, action);
    expect(newState.courses).toHaveLength(2);
    expect(newState.courses).toEqual(mockCourses);
  });

  test("should reset the courses array to empty whenever the logout action is dispatched", () => {
    const stateWithData = {
      courses: [{ id: 1, name: "React 101" }],
    };
    const newState = coursesReducer(stateWithData, logout());
    expect(newState.courses).toHaveLength(0);
    expect(newState.courses).toEqual([]);
  });
});
