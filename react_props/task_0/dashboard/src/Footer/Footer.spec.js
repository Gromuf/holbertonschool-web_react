import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Footer Component", () => {
  test("renders the Footer component without crashing", () => {
    render(<Footer />);
  });
});
