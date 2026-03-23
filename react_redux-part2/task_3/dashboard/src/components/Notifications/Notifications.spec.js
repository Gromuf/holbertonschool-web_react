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
        notifications: [{ id: "1", type: "default", value: "Test" }],
        loading: false,
      },
    });
    const menuButton = screen.getByText(/your notifications/i);
    const drawer = container.querySelector('div[class*="notificationItems"]');
    expect(drawer.className).not.toContain("visible");
    fireEvent.click(menuButton);
    expect(drawer.className).toContain("visible");
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(drawer.className).not.toContain("visible");
  });

  test("dispatches markNotificationAsRead when item is clicked", async () => {
    const testId = "5debd764507712e7a1307303";
    const { store } = renderWithRedux({
      notifications: {
        notifications: [{ id: testId, type: "default", value: "Click me" }],
        loading: false,
      },
    });
    fireEvent.click(screen.getByText(/your notifications/i));
    const spy = jest.spyOn(store, "dispatch");
    const item = screen.getByText("Click me");
    fireEvent.click(item);
    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(markNotificationAsRead(testId));
    });
  });

  test("filters notifications correctly when clicking filter buttons", () => {
    renderWithRedux({
      notifications: {
        notifications: [
          { id: "1", type: "default", value: "Normal one" },
          { id: "2", type: "urgent", value: "Urgent one" },
        ],
        loading: false,
      },
    });
    fireEvent.click(screen.getByText(/your notifications/i));
    const urgentBtn = screen.getByRole("button", { name: /urgent/i });
    fireEvent.click(urgentBtn);
    expect(screen.getByText("Urgent one")).toBeInTheDocument();
    expect(screen.queryByText("Normal one")).not.toBeInTheDocument();
    const defaultBtn = screen.getByRole("button", { name: /default/i });
    fireEvent.click(defaultBtn);
    expect(screen.getByText("Normal one")).toBeInTheDocument();
    expect(screen.getByText("Urgent one")).toBeInTheDocument();
  });
});
