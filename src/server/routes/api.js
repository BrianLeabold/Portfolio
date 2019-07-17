var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/user');
var Contact = require('../models/contact');
var mongoose = require('mongoose');
// var userDb = 'mongodb://Admin:consult9Brian@ds127015.mlab.com:27015/eventsdb';
var contactDb = 'mongodb://contactAdmin:9Sandiego6@ds141320.mlab.com:41320/contactdb';

mongoose.connect(contactDb, err => {
   if (err) {
        console.error('Error' + err);
        } else { console.log ('Connected to MongoDB');
        }
})
mongoose.connect(contactDb, err => {
   if (err) {
        console.error('Error' + err);
        } else { console.log ('Connected to MongoDB');
        }
})

function verifyToken(req, res, next) {
 if (!req.headers.authorization) {
    return (res.status(401).send('Unauthorized Request'));
 }
 var token = req.headers.authorization.split(' ')[1];
 if (token === 'null') {
    return (res.status(401).send('Unauthorized Request'));
 }
 var payload = jwt.verify(token, 'secretKey');
 if(!payload) {
    return (res.status(401).send('Unauthorized Request'));
 }
 req.userId = payload.subject;
 next();
}

router.get('/', (req, res) => {
   res.send('From Consult Brian API route');
});

router.post('/register', (req, res) => {
 var userData = req.body;
 var user = new User(userData);
 user.save((error, registeredUser) => {
      if(error) {
              console.log(error);
      } else {
         var payload = { subject: registeredUser.id};
         var token = jwt.sign(payload, 'secretKey');
         res.status(200).send({token});
      }
 });
});

router.post('/login', (req, res) => {
 var userData = req.body;
 User.findOne({email: userData.email}, (err, user) => {
   if (err) {
     console.log(err);
   } else {
     if (!user) {
       res.status(401).send('Invalid Email')
     } else
     if ( user.password !== userData.password) {
       res.status(401).send('Invalid Password')
     } else {
       var payload = {subject: user.id};
       var token = jwt.sign(payload, 'secretKey');
       res.status(200).send({token});
     }
   }
 });
});

router.post('/contact', (req, res) => {
var contactModel = req.body;
var contact = new Contact(contactModel);
contact.save((error, contactUser) => {
   if (error) {
   console.log(error);
   } else {
   res.status(200).send(contactUser);
   }
})
})

module.exports = router;
