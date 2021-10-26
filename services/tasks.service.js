
const db = require("../Shared/mongo");

const services = {
    async findTasks(req, res){
        try {
            console.log(req.user);
            console.log("GET method is called");
            console.log(req.query);
            const data = await db.posts.find().toArray();//Coverted seperate JSONs into array
            console.log(data);
            res.send(data);
            
        } catch (error) {
            console.log("Error while reading : ", error);
            res.sendStatus(500);  
        }
    }
    
}

module.exports = services;