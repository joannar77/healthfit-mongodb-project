from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
result = client['D597_optimization']['medical_optimization'].aggregate([
    {
        '$match': {
            'medical_conditions': {
                '$ne': 'None'
            }
        }
    }, {
        '$lookup': {
            'from': 'fitness_trackers_optimization', 
            'localField': 'tracker', 
            'foreignField': 'model_name', 
            'as': 'tracker_info'
        }
    }, {
        '$unwind': {
            'path': '$tracker_info', 
            'preserveNullAndEmptyArrays': False
        }
    }, {
        '$project': {
            'brand': '$tracker_info.brand', 
            'price': '$tracker_info.price'
        }
    }, {
        '$group': {
            '_id': '$brand', 
            'avg_price': {
                '$avg': '$price'
            }, 
            'patient_count': {
                '$sum': 1
            }
        }
    }, {
        '$sort': {
            'avg_price': -1
        }
    }
])