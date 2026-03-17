import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Header from "./Header";
import authReducer, { logout } from "../../features/auth/authSlice";

const renderWithRedux = (preloadedState = {}) => {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });
  return {
    ...render(
      <Provider store={store}>
        <Header />
      </Provider>,
    ),
    store,
  };
};

describe("Header Component", () => {
  test("logoutSection is rendered when user is logged in", () => {
    renderWithRedux({
      auth: { isLoggedIn: true, user: { email: "test@test.com" } },
    });
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  test("clicking logout link dispatches the logout action", async () => {
    const { store } = renderWithRedux({
      auth: { isLoggedIn: true, user: { email: "test@test.com" } },
    });
    const spy = jest.spyOn(store, "dispatch");

    fireEvent.click(screen.getByText(/logout/i));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(logout());
    });
  });
});
