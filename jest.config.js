import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default createJestConfig(customJestConfig);
