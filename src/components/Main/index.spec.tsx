import { render } from "@testing-library/react";
import Main from ".";

describe("Main Component", () => {
  it("should have a main tag", () => {
    const children: JSX.Element = <span>Main children</span>;

    const { container } = render(<Main>{children}</Main>);

    const mainElement: HTMLElement | null = container.querySelector("main");

    expect(mainElement).toBeInTheDocument();
  });
});
