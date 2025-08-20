from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
result = client['D597_optimization']['medical_optimization'].aggregate([
    {
        '$match': {
            'gender': {
                '$in': [
                    'M', 'F'
                ]
            }, 
            'age_group': {
                '$in': [
                    'Under 30', '30–59', '60 and over'
                ]
            }
        }
    }, {
        '$group': {
            '_id': {
                'gender': '$gender', 
                'age_group': '$age_group'
            }, 
            'count': {
                '$sum': 1
            }
        }
    }, {
        '$sort': {
            '_id.gender': 1, 
            '_id.age_group': 1
        }
    }
])