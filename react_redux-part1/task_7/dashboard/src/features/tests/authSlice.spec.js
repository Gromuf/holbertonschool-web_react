import authReducer, { login, logout } from "../auth/authSlice";

describe("authSlice", () => {
  const initialState = {
    user: {
      email: "",
      password: "",
    },
    isLoggedIn: false,
  };

  test("should return the initial state by default", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should update the state correctly when login is dispatched", () => {
    const payload = { email: "test@example.com", password: "password123" };
    const newState = authReducer(initialState, login(payload));
    expect(newState.user.email).toBe(payload.email);
    expect(newState.user.password).toBe(payload.password);
    expect(newState.isLoggedIn).toBe(true);
  });

  test("should reset the state correctly when logout is dispatched", () => {
    const loggedInState = {
      user: {
        email: "test@example.com",
        password: "password123",
      },
      isLoggedIn: true,
    };
    const newState = authReducer(loggedInState, logout());
    expect(newState.user.email).toBe("");
    expect(newState.user.password).toBe("");
    expect(newState.isLoggedIn).toBe(false);
  });
});
