const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const config = require('../config');

const User = new Schema({
    username: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
});

//여기서 this는 DB의 저장된 내력들을 말하는건가??

//static의 this는 전체 DB를 가리키고
//따라서 User.함수 형태를 지닌다.
//create nw user document
User.statics.create = function(username, password){

    // const encrypted = crypto.createHmac('sha1', config.secret)
    //                         .update(password)
    //                         .digest('base64');


    const user = new this({
        username,
        password
    });

    return user.save();
};

User.statics.findOneByUsername = function(username){
    return this.findOne({
        username
    }).exec();
};


//method의 this는 특정 데이터를 가리킨다.
//따라서 특정데이터.함수 형태이다.
User.methods.verify = function(password){

    // const encrypted = crypto.createHmac('sha1', config.secret)
    //                         .update(password)
    //                         .digest('base64');

    return this.password === password
};

User.methods.assignAdmin = function(){
    this.admin = true;
    return this.save();
}

module.exports = mongoose.model('User', User);
