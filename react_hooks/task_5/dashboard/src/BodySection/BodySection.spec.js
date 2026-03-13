import React from "react";
import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";
import "@testing-library/jest-dom";

describe("BodySection Component", () => {
  test("should render an h2 element with the title prop value", () => {
    render(
      <BodySection title="test title">
        <p>test child</p>
      </BodySection>,
    );
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("test title");
  });

  test("should render correctly its children", () => {
    render(
      <BodySection title="test title">
        <p>test child 1</p>
        <p>test child 2</p>
      </BodySection>,
    );
    expect(screen.getByText("test child 1")).toBeInTheDocument();
    expect(screen.getByText("test child 2")).toBeInTheDocument();
    expect(screen.getAllByText(/test child/i)).toHaveLength(2);
  });
});
