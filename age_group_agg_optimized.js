[
  {
    $match:
      // filter documents between male
      // and female where age group is
      // already defined
      {
        gender: {
          $in: ["M", "F"]
        },
        age_group: {
          $in: [
            "Under 30",
            "30–59",
            "60 and over"
          ]
        }
      }
  },
  {
    $group:
      // group by gender and age group
      {
        _id: {
          gender: "$gender",
          age_group: "$age_group"
        },
        count: {
          $sum: 1
        }
      }
  },
  {
    $sort:
      // sort by gender and age group
      // for cleaner output
      {
        "_id.gender": 1,
        "_id.age_group": 1
      }
  }
]