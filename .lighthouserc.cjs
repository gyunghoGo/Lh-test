module.exports = {
  ci: {
    collect: {
      // staticDistDir: "./dist", // 정적 파일 디렉토리 설정
      startServerCommand: "yarn dev", // 서버를 명시적으로 포트 3000에서 시작

      url: ["http://localhost:5173"], // 테스트할 URL
      numberOfRuns: 3, // 각 URL에 대해 테스트를 3회 수행
      settings: {
        preset: "desktop", // 데스크탑 환경 설정
        formFactor: "desktop", // 폼 팩터를 데스크탑으로 설정
        screenEmulation: {
          deviceScaleFactor: 1,
          disabled: false,
          height: 1080,
          mobile: false,
          width: 1920,
        }, // 화면 에뮬레이션 설정
        skipAudits: [
          "uses-http2",
          "is-on-https",
          "no-document-write", // 이 감사는 제외하지만, assert에서 예상하지 않도록 조정 필요
          "color-contrast",
          "meta-viewport",
        ], // 특정 감사 제외
        throttling: {
          cpuSlowdownMultiplier: 1, // CPU 속도 저하 없음
          downloadThroughputKbps: 0, // 다운로드 처리량 제한 없음
          requestLatencyMs: 0, // 요청 지연 없음
          rttMs: 40, // 왕복 시간 설정
          throughputKbps: 10 * 1024, // 처리량 설정
          uploadThroughputKbps: 0, // 업로드 처리량 제한 없음
        }, // 스로틀링 설정
      },
    },
    assert: {
      preset: "lighthouse:recommended", // 추천된 Lighthouse 설정 사용
      assertions: {
        "bf-cache": ["warn", { minScore: 0.5 }], // Back/Forward Cache 설정
        "meta-description": ["warn", { minScore: 0.5 }], // 메타 설명 기준 낮춤
        "robots-txt": ["warn", { minScore: 0.5 }], // robots.txt 기준 낮춤
        "unminified-javascript": ["warn", { maxLength: 10 }], // 미압축 JS 길이 기준 높임
        "unsized-images": ["warn", { minScore: 0.7 }], // 크기 지정되지 않은 이미지 기준 완화
        "unused-javascript": ["warn", { maxLength: 5 }], // 사용되지 않은 JS 길이 기준 완화
        "uses-text-compression": ["warn", { maxLength: 10 }], // 텍스트 압축 사용 기준 완화
        "largest-contentful-paint": ["warn", { minScore: 0.8 }], // LCP 기준 완화
        "no-document-write": "off", // 이 감사를 건너뛰도록 설정
        "meta-viewport": "off", // 이 감사를 건너뛰도록 설정
        "color-contrast": "off", // 이 감사를 건너뛰도록 설정
        "is-on-https": "off", // 이 감사를 건너뛰도록 설정
      },
    },
    upload: {
      target: "temporary-public-storage", // 임시 공개 저장소로 업로드
    },
  },
};
