[
  {
    $group:
      // _id defines how to group the documents:
      //by tracker, age group, and gender.

      //count calculates how many documents (users)
      //are in each group.

      {
        _id: {
          tracker: "$tracker",
          age_group: "$age_group",
          gender: "$gender"
        },
        count: {
          $sum: 1
        }
      }
  },
  {
    $sort:
      //Sorts the grouped results in descending order,
      //showing the most common tracker-demographic
      //combinations first.

      {
        count: -1
      }
  },
  {
    $project:
      //Removes the _id object and flattens
      //the fields for easy reading or export

      {
        _id: 0,
        tracker: "$_id.tracker",
        age_group: "$_id.age_group",
        gender: "$_id.gender",
        count: 1
      }
  }
]