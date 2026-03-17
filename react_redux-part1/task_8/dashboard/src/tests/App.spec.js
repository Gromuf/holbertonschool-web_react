import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import rootReducer from "../store/rootReducer"; // Assure-toi que le chemin est correct

const renderWithRedux = (preloadedState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return {
    ...render(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
    store,
  };
};

describe("App Component Tests", () => {
  test("drawer toggles correctly via Redux actions", async () => {
    // On initialise avec une notification pour que le titre apparaisse
    renderWithRedux({
      notifications: {
        displayDrawer: false,
        notifications: [{ id: 1, type: "default", value: "New course" }],
      },
    });

    const menuTitle = screen.getByText(/your notifications/i);
    fireEvent.click(menuTitle);

    // On attend que le tiroir s'ouvre et affiche le texte
    await waitFor(() => {
      expect(
        screen.getByText(/here is the list of notifications/i),
      ).toBeInTheDocument();
    });
  });

  test("logging in dispatches action and changes UI", async () => {
    renderWithRedux();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "pwd123" },
    });

    const loginButton = screen.getByRole("button", { name: /ok/i });
    fireEvent.click(loginButton);

    // CRUCIAL: Attendre que l'UI bascule vers CourseList
    await waitFor(
      () => {
        expect(screen.getByText(/course list/i)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
