module.exports = {
  ci: {
    collect: {
      // startServerCommand: 'pnpm dev',
      url: [
        "https://m.pet-friends.co.kr/community/1",
        "https://m.pet-friends.co.kr/main/tab/2",
      ], // 테스트할 URL
      numberOfRuns: 3, // 각 URL에 대해 테스트를 3회 수행
      settings: {
        emulatedUserAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Safari/537.36 Chrome-Lighthouse",
        formFactor: "desktop",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        screenEmulation: {
          deviceScaleFactor: 1,
          disabled: false,
          height: 1080,
          mobile: false,
          width: 1920,
        },
        skipAudits: [
          "uses-http2",
          "is-on-https",
          "no-document-write", // 채널톡에서 사용
          "color-contrast",
          "meta-viewport",
        ],
        throttling: {
          cpuSlowdownMultiplier: 1,
          downloadThroughputKbps: 0,
          requestLatencyMs: 0,
          rttMs: 40,
          throughputKbps: 10 * 1024,
          uploadThroughputKbps: 0,
        },
      },
    },
    upload: {
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
      target: "filesystem",
    },
  },
};
