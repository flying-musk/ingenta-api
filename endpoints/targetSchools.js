const targetSchools = {
  items: [
    {
      school_id: "1280_13",
      school_name: "京都大学 法",
      ranking: 1,
      prob: 0.42,
    },
    {
      school_id: "1440_30",
      school_name: "熊本大学 教育",
      ranking: 2,
      prob: 0.5,
    },
    {
      school_id: "1395_6",
      school_name: "高知大学 人文社会科学",
      ranking: 3,
      prob: 0.2,
    },
    {
      school_id: "1310_82",
      school_name: "神戸大学 国際人間科学",
      ranking: 4,
      prob: 0.9,
    },
    {
      school_id: "1425_16",
      school_name: "佐賀大学 経済",
      ranking: 5,
      prob: 0.75,
    },
    {
      school_id: "1105_14",
      school_name: "千葉大学 法政経",
      ranking: 6,
      prob: 0.15,
    },
    {
      school_id: "1435_16",
      school_name: "長崎大学 経済",
      ranking: 7,
      prob: 0.8,
    },
  ],
};

module.exports = (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else if (req.method === "GET") {
    res.status(200).json(targetSchools);
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
