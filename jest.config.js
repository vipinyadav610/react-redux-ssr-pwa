module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/client/**/*.{js,jsx}",
    "src/client/**/**/*.{js,jsx}",
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
};
