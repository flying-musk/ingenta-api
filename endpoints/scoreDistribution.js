const scoreDistribution = {
  items: [
    {
      subject_id: "2260",
      subject_name: "数学1",
      current_score: 45,
      previous_score: 40,
      importance: 0.33,
    },
    {
      subject_id: "1110",
      subject_name: "英語",
      current_score: 55,
      previous_score: 58,
      importance: 0.65,
    },
    {
      subject_id: "3220",
      subject_name: "古文",
      current_score: 47,
      previous_score: 40,
      importance: 0.82,
    },
    {
      subject_id: "3120",
      subject_name: "現代文",
      current_score: 52,
      previous_score: 70,
      importance: 0.71,
    },
    {
      subject_id: "3320",
      subject_name: "漢文",
      current_score: 58,
      previous_score: 41,
      importance: 0.63,
    },
    {
      subject_id: "5270",
      subject_name: "日本史",
      current_score: 35,
      previous_score: 30,
      importance: 0.13,
    },
    {
      subject_id: "5370",
      subject_name: "世界史",
      current_score: 33,
      previous_score: 37,
      importance: 0.21,
    },
  ],
};

module.exports = (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else if (req.method === "GET") {
    res.status(200).json(scoreDistribution);
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
