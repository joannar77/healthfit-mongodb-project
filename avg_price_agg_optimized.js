[
  {
    $match:
      //Filter patients with medical
      //conditions early
      {
        medical_conditions: {
          $ne: "None"
        }
      }
  },
  {
    $lookup:
      // Perform lookup with normalized matching if needed
      {
        from: "fitness_trackers_optimization",
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
    $project:
      // Only include necessary fields
      //(helps with memory)
      {
        brand: "$tracker_info.brand",
        price: "$tracker_info.price"
      }
  },
  {
    $group:
      // Group by brand
      {
        _id: "$brand",
        avg_price: {
          $avg: "$price"
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

  // {
  //   $match:
  // },
  // {
  //   $sort: {
  //     average_battery_life: -1
  //   }
  // }
]