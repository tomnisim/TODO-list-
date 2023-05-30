const mongoose = require('mongoose');

module.exports = async () => {
    try {
        
        const connectionParams = {
            useNewUrlParser : true, 
            useCreateIndex : true, 
            useUnifiedTopology : true
        }
        await mongoose.connect(
            "mongodb://localhost/TODO-list-", 
            connectionParams
        );
        console.log("Connected to DB successfully")
    } catch (error) {
        console.log("Faild to Connect to DB", error)
        
    }
}