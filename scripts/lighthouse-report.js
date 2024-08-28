const fs = require("fs");

// manifest.json 파일 읽기
const results = JSON.parse(
  fs.readFileSync("./lhci_reports/manifest.json", "utf8")
);

console.log("Results:", results);

const calculateRoundedAverage = (value, count) => {
  return Math.round(parseFloat(value) / count);
};

// 성능 지표 목록
const metrics = ["performance", "accessibility", "best-practices", "seo"];
const score = (res) => (res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴");

const pathAverages = Object.values(
  results.reduce((acc, report) => {
    const { url, summary } = report;

    if (!acc[url]) {
      acc[url] = {
        url,
        count: 0,
        averages: metrics.reduce((obj, metric) => {
          obj[metric] = 0;
          return obj;
        }, {}),
      };
    }

    metrics.forEach((metric) => {
      acc[url].averages[metric] += summary[metric] * 100;
    });

    acc[url].count += 1;

    return acc;
  }, {})
).map(({ url, averages, count }) => ({
  url,
  averages: metrics.reduce((obj, metric) => {
    const averageScore = calculateRoundedAverage(averages[metric], count);
    obj[metric] = `${score(averageScore)} ${averageScore}`;
    return obj;
  }, {}),
}));

console.log("Path Averages:", pathAverages);
