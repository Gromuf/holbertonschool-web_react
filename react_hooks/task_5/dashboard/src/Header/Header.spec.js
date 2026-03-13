import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header.jsx";
import AppContext from "../Context/context.js";

describe("Header Component", () => {
  test("renders the Header component without crashing", () => {
    render(<Header />);
  });
  test("renders the logo image", () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText(/Holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });
  test("renders the title", () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/School dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("verify that the logoutSection is not rendered by default", () => {
    const { container } = render(<Header />);
    const logoutSection = container.querySelector("#logoutSection");
    expect(logoutSection).not.toBeInTheDocument();
  });

  test("verify that logoutSection is rendered when user is logged in", () => {
    const contextValue = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: () => {},
    };
    const { container } = render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>,
    );
    const logoutSection = container.querySelector("#logoutSection");
    expect(logoutSection).toBeInTheDocument();
    expect(screen.getByText("test@test.com")).toBeInTheDocument();
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  test("verify that clicking on the logout link calls the spy", () => {
    const spyLogOut = jest.fn();
    const contextValue = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: spyLogOut,
    };
    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>,
    );
    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);
    expect(spyLogOut).toHaveBeenCalledTimes(1);
  });
});
