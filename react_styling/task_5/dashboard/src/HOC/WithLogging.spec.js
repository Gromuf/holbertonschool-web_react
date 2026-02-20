import React from "react";
import { render, cleanup } from "@testing-library/react";
import WithLogging from "./WithLogging";

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe("WithLogging HOC", () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("renders the wrapped component correctly", () => {
    const WrappedMock = WithLogging(MockApp);
    const { getByText } = render(<WrappedMock />);
    expect(getByText("Hello from Mock App Component")).toBeInTheDocument();
  });

  it("logs to the console on mount and unmount with MockApp", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const WrappedMock = WithLogging(MockApp);

    const { unmount } = render(<WrappedMock />);
    expect(spy).toHaveBeenCalledWith("Component MockApp is mounted");
    unmount();
    expect(spy).toHaveBeenCalledWith("Component MockApp is going to unmount");
  });

  it("logs to the console on mount and unmount with a pure HTML element (default name)", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const WrappedElement = WithLogging(() => <p>Hello</p>);
    const { unmount } = render(<WrappedElement />);
    expect(spy).toHaveBeenCalledWith("Component Component is mounted");
    unmount();
    expect(spy).toHaveBeenCalledWith("Component Component is going to unmount");
  });
});
