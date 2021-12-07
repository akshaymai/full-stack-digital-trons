

# Import data
npm run data:import
or
throught postman :
# end point: localhost:5000/create/slot(for create)
# body 
{
    "slot_time":"5pm",
    "slot_date":"07-12-12"
}
# response
{
    "slot_time": "5pm",
    "slot_date": "07-12-12",
    "isBooked": false,
    "_id": "61af99b3d3b0fbb527599ea0",
    "createdAt": "2021-12-07T17:28:19.288Z",
    "updatedAt": "2021-12-07T17:28:19.288Z",
    "__v": 0
}

# Destroy data(if requried)
npm run data:destroy

# Run backend first
1.cd Backend
2.npm install
3.npm start



# Run frontend 
1.npm install
2.npm start


# Technologies
FrontEnd: html,css,Javascript,ReactJS,Redux
DataBase:MongoDb
ORM: Mongoose
Backend: NodeJS,ExpressJS
