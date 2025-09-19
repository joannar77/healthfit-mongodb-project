from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
result = client['D597_Task_2']['medical'].aggregate([
    {
        '$match': {
            'medical_conditions': {
                '$ne': 'None'
            }
        }
    }, {
        '$lookup': {
            'from': 'fitness_trackers', 
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
        '$group': {
            '_id': '$tracker_info.brand', 
            'avg_price': {
                '$avg': '$tracker_info.price'
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
