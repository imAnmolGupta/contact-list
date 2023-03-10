const mongoose=require('mongoose');


//connect to the DB
mongoose.connect(process.env.DATABASE_URL);

//acquire the connection(to check if connection is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to DB'));

//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to DB');
})