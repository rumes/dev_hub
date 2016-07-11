from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'restApi'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/restApi'

mongo = PyMongo(app)
# get all users 
@app.route('/users', methods=['GET'])
def getAllUsers():
  users = mongo.db.user
  output = []
  for s in users.find():
    output.append({'name' : s['name'], 'email' : s['email'], 'type':s['type']})
  return jsonify({'result' : output})
  
# get one user from user_id
@app.route('/user/<int:user_id>', methods=['GET'])
def getUser(user_id):
  userObj = mongo.db.user
  s = userObj.find_one({'_id' : user_id})
  if s:
    output = {'name' : s['name'], 'email' : s['email'], 'type':s['type']}
  else:
    output = "No such name"
  return jsonify({'result' : output})
  
# update user
@app.route('/user/<int:user_id>', methods=['PATCH'])
def updateUser(user_id):
  userObj = mongo.db.user
  s = userObj.find_one({'_id' : user_id})
  name=0
  email=0
  type = 0
  if s:
    if(request.json['name']):
        name = request.json['name']
    else:
        name = s['name']
    
    if(request.json['email']):
        email = request.json['email']
    else:
        email = s['email']
    
    if(request.json['type']):
        type = request.json['type']
    else:
        type = s['type']
        
    user_id = userobj.update_many({'_id'}, {'$set':{'name': name, 'email': email, 'type':type}})
    new_user = userobj.find_one({'_id': user_id })
    output = {'name' : new_user['name'], 'e-mail' : new_user['email'], 'type':new_user['type']}
  else:
    output = "No such name"
  
  return jsonify({'result' : output})

# add one user
@app.route('/user', methods=['POST'])
def addUser():
  userobj = mongo.db.user
  name = request.json['name']
  email = request.json['email']
  type = request.json['type']
  user_id = userobj.insert({'name': name, 'email': email, 'type':type})
  new_user = userobj.find_one({'_id': user_id })
  output = {'name' : new_user['name'], 'e-mail' : new_user['email'], 'type':new_user['type']}
  return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
