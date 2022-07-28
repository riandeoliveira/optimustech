import { render } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  it("should contain the website name", () => {
    const { getByText } = render(<Header />);

    const websiteName: HTMLElement = getByText("OptimusTech");

    expect(websiteName).toBeInTheDocument();
  });
});
