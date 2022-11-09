const {model ,Schema} = require('../connection');

const myschema = new Schema({
    email: String,
    username: String,
    password: String,
    message: String,
    subject: String,
    avatar: String,
    createdAt: String,
    
});

module.exports=model('users',myschema);