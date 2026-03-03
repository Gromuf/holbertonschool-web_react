import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";
import AppContext from "../Context/context.js";

describe("Footer Component", () => {
  test("renders the Footer component without crashing", () => {
    render(<Footer />);
  });

  test("renders correct string", () => {
    render(<Footer />);
    const footerText = screen.getByText(/Copyright/i);
    expect(footerText).toBeInTheDocument();
  });

  test("verify that the 'Contact us' link is NOT displayed when the user is logged out", () => {
    const contextValue = {
      user: {
        isLoggedIn: false,
      },
    };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>,
    );
    const contactLink = screen.queryByText(/Contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  test("verify that the 'Contact us' link IS displayed when the user is logged in", () => {
    const contextValue = {
      user: {
        isLoggedIn: true,
        email: "test@test.com",
      },
    };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>,
    );
    const contactLink = screen.getByText(/Contact us/i);
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.tagName).toBe("A"); // Vérifie que c'est bien un lien
  });
});
