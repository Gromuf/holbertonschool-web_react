import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Notifications from "./Notifications";
import notificationsReducer, {
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

describe("Notifications component", () => {
  test("toggles visibility styles when clicking menu item and close button", () => {
    const { container } = renderWithRedux({
      notifications: {
        notifications: [{ id: 1, type: "default", html: { __html: "Test" } }],
      },
    });

    const menuButton = screen.getByText(/your notifications/i);
    const drawer = container.querySelector('div[class*="notificationItems"]');

    expect(drawer).toHaveStyle("visibility: hidden");

    fireEvent.click(menuButton);
    expect(drawer).toHaveStyle("visibility: visible");

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(drawer).toHaveStyle("visibility: hidden");
  });

  test("dispatches markNotificationAsRead when item is clicked", async () => {
    const { store } = renderWithRedux({
      notifications: {
        notifications: [
          { id: 42, type: "default", html: { __html: "Click me" } },
        ],
      },
    });
    const spy = jest.spyOn(store, "dispatch");

    fireEvent.click(screen.getByRole("listitem"));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(markNotificationAsRead(42));
    });
  });
});
