const mongoose = require('mongoose');
const config = require('./config');

const dbUrl = config.db.url;

mongoose.set("strictQuery", false);

mongoose
.connect(dbUrl)
.then(()=>{
    console.log("Mongodb atlas is connected");
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});