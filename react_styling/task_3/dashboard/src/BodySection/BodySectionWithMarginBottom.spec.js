import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import "@testing-library/jest-dom";

describe("BodySectionWithMarginBottom Component", () => {
  test("should render a div with the class bodySectionWithMargin", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test child</p>
      </BodySectionWithMarginBottom>,
    );
    const div = container.querySelector(".mb-10");
    expect(div).toBeInTheDocument();
  });

  test("should render the BodySection component within the margin div", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test child</p>
      </BodySectionWithMarginBottom>,
    );
    const bodySectionDiv = container.querySelector(".bodySection");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /test title/i,
    });
    expect(bodySectionDiv).toBeInTheDocument();
    expect(heading).toHaveTextContent("test title");
    expect(screen.getByText("test child")).toBeInTheDocument();
  });
});
