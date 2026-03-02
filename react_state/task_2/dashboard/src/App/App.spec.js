import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("App Component", () => {
  test("renders the h1 with text School dashboard", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /School dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders the correct text in footer paragraph", () => {
    render(<App />);
    const footerParagraph = screen.getByText(/copyright/i);
    expect(footerParagraph).toBeInTheDocument();
  });

  test("renders an image with alt text holberton logo", () => {
    render(<App />);
    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  describe("When isLoggedIn is false", () => {
    test("renders Login component and not CourseList", () => {
      render(<App isLoggedIn={false} />);
      expect(
        screen.getByText(/Login to access the full dashboard/i),
      ).toBeInTheDocument();
      expect(screen.queryByRole("table")).not.toBeInTheDocument();
    });

    test("renders login form elements", () => {
      render(<App isLoggedIn={false} />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
    });
  });

  describe("When isLoggedIn is true", () => {
    test("renders CourseList and not Login component", () => {
      render(<App isLoggedIn={true} />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
      expect(
        screen.queryByText(/Login to access the full dashboard/i),
      ).not.toBeInTheDocument();
    });
  });

  describe("Keyboard shortcuts (Ctrl + H)", () => {
    let alertSpy;
    beforeEach(() => {
      alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test("should call the logOut function once after pressing Ctrl+H", async () => {
      const logOutMock = jest.fn();
      const user = userEvent.setup();
      render(<App isLoggedIn={true} logOut={logOutMock} />);
      await user.keyboard("{Control>}h{/Control}");
      expect(logOutMock).toHaveBeenCalledTimes(1);
    });

    test("should call the alert function with 'Logging you out'", async () => {
      const logOutMock = jest.fn();
      const user = userEvent.setup();
      render(<App isLoggedIn={true} logOut={logOutMock} />);
      await user.keyboard("{Control>}h{/Control}");
      expect(alertSpy).toHaveBeenCalledWith("Logging you out");
    });
  });
  describe("news from the school section", () => {
    test("renders the news from the school section with correct title and content", () => {
      render(<App />);
      const newsSectionTitle = screen.getByRole("heading", {
        level: 2,
        name: /News from the School/i,
      });
      const newsContent = screen.getByText(/Holberton School News goes here/i);
      expect(newsSectionTitle).toBeInTheDocument();
      expect(newsContent).toBeInTheDocument();
    });
  });
});
