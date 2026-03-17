import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Footer from "./Footer";
import authReducer from "../../features/auth/authSlice";

// Utilitaire de rendu avec Redux
const renderWithRedux = (preloadedState = {}) => {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });
  return render(
    <Provider store={store}>
      <Footer />
    </Provider>,
  );
};

test("It should render footer with copyright text", () => {
  renderWithRedux({
    auth: { isLoggedIn: false },
  });

  const footerParagraph = screen.getByText(/copyright/i);
  const currentYear = new Date().getFullYear();

  expect(footerParagraph).toHaveTextContent(
    new RegExp(`copyright ${currentYear}`, "i"),
  );
  expect(footerParagraph).toHaveTextContent(/holberton school/i);
});

test("Contact us link is not displayed when user is logged out", () => {
  renderWithRedux({
    auth: { isLoggedIn: false },
  });

  const contactLink = screen.queryByText(/contact us/i);
  expect(contactLink).not.toBeInTheDocument();
});

test("Contact us link is displayed when user is logged in", () => {
  renderWithRedux({
    auth: { isLoggedIn: true },
  });

  const contactLink = screen.getByText(/contact us/i);
  expect(contactLink).toBeInTheDocument();
});
