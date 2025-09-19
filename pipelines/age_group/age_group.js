[
  {
    $addFields:
      // Convert date_of_birth from
      // string to date
      {
        date_of_birth: {
          $dateFromString: {
            dateString: "$date_of_birth",
            format: "%m/%d/%Y"
          }
        }
      }
  },
  {
    $addFields:
      // calculate age
      {
        age: {
          $dateDiff: {
            startDate: "$date_of_birth",
            endDate: "$$NOW",
            unit: "year"
          }
        }
      }
  },
  {
    $addFields:
      // create age group
      {
        age_group: {
          $cond: [
            {
              $lt: ["$age", 30]
            },
            "Under 30",
            {
              $cond: [
                {
                  $lt: ["$age", 60]
                },
                "30–59",
                "60 and over"
              ]
            }
          ]
        }
      }
  },
  {
    $group:
      // group by age and gender
      {
        _id: {
          gender: "$gender",
          age_group: "$age_group"
        },
        count: {
          $sum: 1
        }
      }
  }
]
