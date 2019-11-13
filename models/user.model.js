const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//define a varible to define user-schema.
//here we have the userSchema Object 
//created an object of Schema with this constructor.
//inside this constructor [Schema],we can define our userSchema structure. 
var userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: 'First Name can\'t be empty'
    },
    lastName: {
        type: String,
        required: 'Last Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty,should be minimum of 4-8 lowercase characters ',
        unique: true
    },
    password: {

        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password should be 4 character\'s long']

    },
    //used for the encryption and decryption of password saved inside the field password.
    saltSecret: {
        type: String
    }

});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^([a-z\d-_]{4,12})@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


//EVENTS:
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});



mongoose.model('User', userSchema);





