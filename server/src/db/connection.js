const mongoose = require('mongoose');

const DB = 'mongodb+srv://raushan8271:root123@cluster0.ohrtz.mongodb.net/twitter?retryWrites=true&w=majority'
 
mongoose.connect(DB, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("sucessful"))
    .catch((err) => console.log(err));