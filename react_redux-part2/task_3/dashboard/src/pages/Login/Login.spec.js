import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Login from "./Login";
import authReducer from "../../features/auth/authSlice"; // Adapte le chemin
import { login } from "../../features/auth/authSlice";

// Utilitaire pour créer un store de test propre à chaque test
const renderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Login Component with Redux", () => {
  test("testing signin form elements", () => {
    renderWithRedux(<Login />);

    const emailLabelElement = screen.getByLabelText(/email/i);
    const passwordLabelElement = screen.getByLabelText(/password/i);
    const buttonElement = screen.getByRole("button", { name: /ok/i });

    expect(emailLabelElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("focuses email input when label is clicked", async () => {
    renderWithRedux(<Login />);
    const emailLabel = screen.getByText("Email");
    const emailInput = screen.getByLabelText("Email");

    await userEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });

  test("submit button is disabled by default", () => {
    renderWithRedux(<Login />);
    const submitButton = screen.getByRole("button", { name: /ok/i });
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button only with valid inputs", () => {
    renderWithRedux(<Login />);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: /ok/i });

    // Invalide
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(submitButton).toBeDisabled();

    // Valide (Email correct + mdp >= 8 chars)
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(submitButton).not.toBeDisabled();
  });

  test("dispatches login action on form submission", async () => {
    // Pour ce test, on peut espionner le store ou simplement vérifier que le formulaire
    // appelle la logique attendue. Une approche simple consiste à mocker l'action :
    const store = configureStore({ reducer: { auth: authReducer } });
    const spy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /ok/i }));

    // On vérifie que dispatch a été appelé avec l'action login et les bonnes données
    expect(spy).toHaveBeenCalledWith(
      login({
        email: "test@test.com",
        password: "password123",
      }),
    );
  });
});
