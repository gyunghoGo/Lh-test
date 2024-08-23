module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      // startServerCommand: "yarn dev",
      url: ["http://localhost:5173"],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "bf-cache": ["warn", { minScore: 0.5 }],
        "color-contrast": ["warn", { minScore: 0.5 }],
        "meta-description": ["warn", { minScore: 0.5 }],
        "robots-txt": ["warn", { minScore: 0.5 }],
        "unminified-javascript": ["warn", { maxLength: 10 }],
        "unsized-images": ["warn", { minScore: 0.7 }],
        "unused-javascript": ["warn", { maxLength: 5 }],
        "uses-text-compression": ["warn", { maxLength: 10 }],
        "largest-contentful-paint": ["warn", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
