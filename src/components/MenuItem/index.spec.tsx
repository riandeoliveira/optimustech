import { render } from "@testing-library/react";
import MenuItem from ".";

describe("MenuItem Component", () => {
  it("should have a link element", () => {
    const { container, debug } = render(
      <MenuItem title="Title" path="/path" />
    );

    const linkElement: HTMLElement | null = container.querySelector("a");

    expect(linkElement).toBeInTheDocument();
  });
});
