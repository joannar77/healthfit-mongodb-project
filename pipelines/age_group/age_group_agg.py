from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
result = client['D597_Task_2']['medical'].aggregate([
    {
        '$addFields': {
            'date_of_birth': {
                '$dateFromString': {
                    'dateString': '$date_of_birth', 
                    'format': '%m/%d/%Y'
                }
            }
        }
    }, {
        '$addFields': {
            'age': {
                '$dateDiff': {
                    'startDate': '$date_of_birth', 
                    'endDate': '$$NOW', 
                    'unit': 'year'
                }
            }
        }
    }, {
        '$addFields': {
            'age_group': {
                '$cond': [
                    {
                        '$lt': [
                            '$age', 30
                        ]
                    }, 'Under 30', {
                        '$cond': [
                            {
                                '$lt': [
                                    '$age', 60
                                ]
                            }, '30–59', '60 and over'
                        ]
                    }
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
    }
])
