from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
result = client['D597_Task_2']['medical'].aggregate([
    {
        '$group': {
            '_id': {
                'tracker': '$tracker', 
                'age_group': '$age_group', 
                'gender': '$gender'
            }, 
            'count': {
                '$sum': 1
            }
        }
    }, {
        '$sort': {
            'count': -1
        }
    }, {
        '$project': {
            '_id': 0, 
            'tracker': '$_id.tracker', 
            'age_group': '$_id.age_group', 
            'gender': '$_id.gender', 
            'count': 1
        }
    }
])