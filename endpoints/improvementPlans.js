const improvementPlans = {
  cur_prob: 0.42,
  items: [
    {
      plan_id: "A",
      plan_prob: 0.61,
      items: [
        {
          subject_id: "3320",
          subject_name: "漢文",
          current_score: 58,
          target_score: 63,
        },
        {
          subject_id: "2260",
          subject_name: "数学1",
          current_score: 50,
          target_score: 70,
        },
        {
          subject_id: "3220",
          subject_name: "古文",
          current_score: 47,
          target_score: 50,
        },
      ],
    },
    {
      plan_id: "B",
      plan_prob: 0.78,
      items: [
        {
          subject_id: "2260",
          subject_name: "数学1",
          current_score: 45,
          target_score: 60,
        },
        {
          subject_id: "1110",
          subject_name: "英語",
          current_score: 55,
          target_score: 72,
        },
      ],
    },
    {
      plan_id: "C",
      plan_prob: 0.53,
      items: [
        {
          subject_id: "3120",
          subject_name: "現代文",
          current_score: 52,
          target_score: 70,
        },
      ],
    },
  ],
};

module.exports = (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else if (req.method === "GET") {
    res.status(200).json(improvementPlans);
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
