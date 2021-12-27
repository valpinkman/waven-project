export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["src/__tests__"],
  coverageProvider: "v8",
  clearMocks: true,
  moduleDirectories: ["node_modules"],
}
