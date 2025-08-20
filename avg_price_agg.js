[
  {
    $match:
      // Only consider patients with medical conditions
      {
        medical_conditions: {
          $ne: "None"
        }
      }
  },
  {
    $lookup:
      //Join tracker info
      {
        from: "fitness_trackers",
        localField: "tracker",
        foreignField: "model_name",
        as: "tracker_info"
      }
  },
  {
    $unwind: {
      path: "$tracker_info",
      preserveNullAndEmptyArrays: false
    }
  },
  {
    $group:
      // Group by brand and compute average price
      {
        _id: "$tracker_info.brand",
        avg_price: {
          $avg: "$tracker_info.price"
        },
        patient_count: {
          $sum: 1
        }
      }
  },
  {
    $sort: {
      avg_price: -1
    }
  }
]