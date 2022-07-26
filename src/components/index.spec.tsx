import { readdirSync, statSync } from "fs";
import * as components from "./index";

describe("Components Directory Root", () => {
  it("should export all existing components", () => {
    const path: string = "./src/components";

    const dirItems: string[] = readdirSync(path);
    const existingComponents: string[] = dirItems.filter((file: string) => {
      return statSync(`${path}/${file}`).isDirectory();
    });

    const componentsList = Object.values(components);
    const exportedComponents: string[] = componentsList.map(({ name }) => name);

    expect(existingComponents).toEqual(exportedComponents);
  });
});
