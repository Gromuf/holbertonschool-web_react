import { render } from "@testing-library/react";
import Header from "./Header.jsx";

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
});
