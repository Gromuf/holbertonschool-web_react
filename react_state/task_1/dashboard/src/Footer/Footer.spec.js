import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Footer Component", () => {
  test("renders the Footer component without crashing", () => {
    render(<Footer />);
  });
  test("renders correct string if isIndex is true", () => {
    const { getByText } = render(<Footer isIndex={true} />);
    const footerText = getByText(/Holberton School/i);
    expect(footerText).toBeInTheDocument();
  });
});
