const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        let result = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true ,
             useUnifiedTopology: true,
        });
        console.log("database connected");
    } catch (error) {
        console.log(error)
         console.log('cant connect to database ');
    }

};



module.exports=connectDB