const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose'); 

//interact with mongoDB:

var User  = mongoose.model('User');//User varible stores the user-schema:


//in order to configure authentication we will call the function use from passport package.
//inside this function we will pass an object of this => localStrategy class.
//inside this local stategy constructor first of all,we will pass an option.
//usernameField:'email' usernameField is equal to email.
//By defualt user credential for local strategy is our username and password.
//If there is any chnage we can specify with this option here \
//Instead of username,we have email,so that is why we have specified usernameField is equal to email.
//As a second pararmeter we have an arrow function. (username,password,done)=>{})
//It has parameters username,password and done.
//When we call for authentication for passport.
//this arrow 



passport.use(
    new localStrategy({usernameField:'email'},
(username,password,done)=>{})

);






