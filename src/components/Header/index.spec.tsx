import { render } from "@testing-library/react";
import Header from ".";

describe("something", () => {
  it("should be able to do something", () => {
    const { getByText } = render(<Header />);

    expect(getByText("OptimusTech")).toBeInTheDocument();
  });
});
