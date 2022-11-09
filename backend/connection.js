//importing mongoose package
const mongoose = require('mongoose'); //req

const dbname = 'xenonstackdatabase';
const url= `mongodb+srv://Ayushi123:rayayu123@cluster0.aa5jg.mongodb.net/${dbname}?retryWrites=true&w=majority`

//async function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports=mongoose;