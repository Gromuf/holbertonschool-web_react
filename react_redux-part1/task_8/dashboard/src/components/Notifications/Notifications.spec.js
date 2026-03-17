import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Notifications from "./Notifications";
import notificationsReducer, {
  showDrawer,
  hideDrawer,
  markNotificationAsRead,
} from "../../features/notifications/notificationsSlice";

const renderWithRedux = (preloadedState = {}) => {
  const store = configureStore({
    reducer: { notifications: notificationsReducer },
    preloadedState,
  });
  return {
    ...render(
      <Provider store={store}>
        <Notifications />
      </Provider>,
    ),
    store,
  };
};

describe("Notifications component with Redux", () => {
  test("dispatches showDrawer when 'Your notifications' is clicked", async () => {
    const { store } = renderWithRedux({
      notifications: { displayDrawer: false, notifications: [] },
    });
    const spy = jest.spyOn(store, "dispatch");

    fireEvent.click(screen.getByText(/your notifications/i));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(showDrawer());
    });
  });

  test("dispatches hideDrawer when close button is clicked", async () => {
    const { store } = renderWithRedux({
      notifications: {
        displayDrawer: true,
        notifications: [{ id: 1, type: "default", value: "Test" }],
      },
    });
    const spy = jest.spyOn(store, "dispatch");

    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(hideDrawer());
    });
  });

  test("dispatches markNotificationAsRead when item is clicked", async () => {
    const { store } = renderWithRedux({
      notifications: {
        displayDrawer: true,
        notifications: [{ id: 42, type: "default", value: "Click me" }],
      },
    });
    const spy = jest.spyOn(store, "dispatch");

    fireEvent.click(screen.getByRole("listitem"));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(markNotificationAsRead(42));
    });
  });
});
