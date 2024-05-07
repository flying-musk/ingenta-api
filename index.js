const functions = require("@google-cloud/functions-framework");
const handleTargetSchools = require("./endpoints/targetSchools");
const handleImprovementPlans = require("./endpoints/improvementPlans");
const handleScoreDistribution = require("./endpoints/scoreDistribution");

const enableCors = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
};

functions.http("target_schools", (req, res) => {
  enableCors(req, res);
  handleTargetSchools(req, res);
});

functions.http("imp_plans", (req, res) => {
  enableCors(req, res);
  handleImprovementPlans(req, res);
});

functions.http("score_dist", (req, res) => {
  enableCors(req, res);
  handleScoreDistribution(req, res);
});
