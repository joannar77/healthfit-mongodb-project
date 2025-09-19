[
  {
    $sort:
      // Sort by tracker,age_group, and gender
      // in ascending order
      // helps MongoDB group more efficiently
      // when using an index that matches this order

      {
        tracker: 1,
        age_group: 1,
        gender: 1
      }
  },
  {
    $group:
      // Group documents by tracker, age_group, and gender
      // Count how many documents belong to each unique combination
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
    $project:
      // Reshape the output
      // Promote fields from _id to
      // top-level fields for cleaner results
      {
        _id: 0,
        tracker: "$_id.tracker",
        age_group: "$_id.age_group",
        gender: "$_id.gender",
        count: 1
      }
  },
  {
    $sort:
      // Sort the grouped results
      // by count in descending order
      // This shows the most common
      // tracker-demographic combinations first
      {
        count: -1
      }
  }
]
