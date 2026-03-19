import mockAxios from "jest-mock-axios";
import coursesReducer, {
  fetchCourses,
  selectCourse,
  unselectCourse,
} from "../courses/coursesSlice";
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
    const mockPayload = [
      { id: 1, name: "ES6 Basics", instructor: "John Doe" },
      { id: 2, name: "Redux Toolkit", instructor: "Jane Smith" },
    ];
    const expectedState = [
      { id: 1, name: "ES6 Basics", instructor: "John Doe", isSelected: false },
      {
        id: 2,
        name: "Redux Toolkit",
        instructor: "Jane Smith",
        isSelected: false,
      },
    ];
    const action = {
      type: fetchCourses.fulfilled.type,
      payload: mockPayload,
    };
    const newState = coursesReducer(initialState, action);
    expect(newState.courses).toHaveLength(2);
    expect(newState.courses).toEqual(expectedState);
  });

  test("should handle selectCourse and unselectCourse", () => {
    const stateWithData = {
      courses: [{ id: 1, name: "React", isSelected: false }],
    };
    let newState = coursesReducer(stateWithData, selectCourse(1));
    expect(newState.courses[0].isSelected).toBe(true);
    newState = coursesReducer(newState, unselectCourse(1));
    expect(newState.courses[0].isSelected).toBe(false);
  });

  test("should reset the courses array to empty whenever the logout action is dispatched", () => {
    const stateWithData = {
      courses: [{ id: 1, name: "React 101", isSelected: false }],
    };
    const newState = coursesReducer(stateWithData, logout());

    expect(newState.courses).toHaveLength(0);
    expect(newState.courses).toEqual([]);
  });
});
