var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require('passport-local');
const nodemailer = require("nodemailer");
require('dotenv').config();



passport.use(new localStrategy(userModel.authenticate()));

//allroutes are shown below

router.get("/",(req,res)=>{
  res.render("index");
});
router.get("/index",(req,res)=>{
  res.render("index");
});
router.get("/store",(req,res)=>{
  res.render("store");
});
router.get("/contact",(req,res)=>{
  res.render("contact");
});
router.get("/about",(req,res)=>{
  res.render("about");
});
router.get("/signup",(req,res)=>{
  res.render("signup");
});
router.get("/store/iphone14",(req,res)=>{
  res.render("iphone14");
});
router.get("/store/iphone14/buy",(req,res)=>{
  res.render("buy");
});
router.get("/store/iphone14/buy/thankyou",(req,res)=>{
  res.render("thankyou");
});



//below is the code for contact page when the user will go to the contact page then the below code will run







var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create a model from the schema
var Contact = mongoose.model('Contact', contactSchema);
var contactTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kartikeya_be22cs112@srmcem.ac.in',
    pass: 'srmcemcs2022'
  }
});

router.post('/contact', function(req, res) {
  // Create a new document from the form data
  var newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  // Save the document to the database
  newContact.save()
    .then(() => {
      // Update the mailOptions to include the user's name and email
      var mailOptions = {
        from: 'kartikeya_be22cs112@srmcem.ac.in',
        to: 'kartikruhela672@gmail.com',
        subject: `New user ${req.body.name} has submitted the contact form`,
        text: `Dear Ayush sir, a user named ${req.body.name} with email ${req.body.email} has submitted the contact form with the message:${req.body.message}.`
      };

      // Send the email
      contactTransporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.redirect('/store'); // Redirect to a success page
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving contact to database');
    });
});


router.post('/store/iphone14/buy', async function(req, res) {
  const { fullname, address, pincode, email, phone, quantity, payment, transaction_id } = req.body;
  // res.redirect('/thankyou');
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kartikeya_be22cs112@srmcem.ac.in',
      pass: 'srmcemcs2022'
    },
   
  });

  // Email content
  let mailOptions = {
    from: 'kartikeya_be22cs112@srmcem.ac.in',
    to: 'kartikruhela672@gmail.com', // list of receivers
    subject: 'New Order', // Subject line
    text: `Dear Ayush sir user has placed an order for iphone 14, details are as follows:
          Full Name: ${fullname}
           Address: ${address}
           Pin Code: ${pincode}
           Email: ${email}
           Phone Number: ${phone}
           Quantity: ${quantity}
           Payment Method: ${payment}
           Transaction ID: ${transaction_id}`, // plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.error(err);
      res.status(500).send('Error while sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/store/iphone14/buy/thankyou');
    }
  });
});

//iske niche ke code ki wjh se admin ke pass bande ki sari information jayegi

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kartikeya_be22cs112@srmcem.ac.in',
//     pass: 'srmcemcs2022'
//   }
// });

// router.post('/contact', function(req, res) {
//   // Create a new document from the form data
//   var newContact = new Contact({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message
//   });

//   // Save the document to the database
//   newContact.save()
//     .then(() => {
//       console.log('Contact saved successfully. Attempting to send email...'); // Add this line
//       var mailOptions = {
//         from: 'kartikeya_be22cs112@srmcem.ac.in',
//         to: 'kartikruhela672@gmail.com',
//         subject: 'New user has submitted the contact form',
//         text: `Dear Ayush sir , an user has submitted the contact form his details are : email - ${req.body.email}, name - ${req.body.name}, message - ${req.body.message}`
//       };
        
//       console.log('Attempting to send email...'); 

//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });

//       res.redirect('/store'); // Redirect to a success page
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Error saving contact to database');
//     });
// });

// abhi iske upr ka code comment kiya haiu jo ki admin ko databhejta hai ki koi banda contact page pe aaya hai

router.get("/", function(req, res, next) {
  res.render("index");
});

//below code me jab banda profile pe jayega tb isLoggedIn chalu hojaega jo ki check krega ki user loggedin hai ya ni , 
// agar loggedin hai to next hojao otherwise "/" page pr chale jao
router.get('/store',isLoggedIn, function(req, res, next) {
  res.render('store');
});

//BELOW LINE ME PASSPORT.AUTHENCTICATE PEHLE HI ROK LETA HAI AUR AGAR USER USERNAME PASSWORD SHI ENTER KRTA HAI TO VO PROFILE PE JATA HAI OTHRWISE "/" PR
router.post("/login", passport.authenticate("local", {
  successRedirect: "/store",
  failureRedirect: "/signup",
}));


// the below code : agar koi banda logout route pe jayega to use logout krdijiye  and logout krne ke bad use "/" pr lejao
router.get("/logout",(req,res,next)=>{
  req.logout(function(err){
    if(err) return next(err);
    else res.redirect("/signup");
  });
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  else res.redirect("/signup");
}

// Create a transporter object
// var transporter = nodemailer.createTransport({
//   service: 'gmail', // replace with your email provider
//   auth: {
//     user: 'kartikruhela67@gmail.com', // replace with your email
//     pass: 'Ruhela672@' // replace with your password
//   }
// });

// router.post("/register", (req, res) => {
//   var userdata = new userModel({
//     username: req.body.username,
//     name: req.body.name,
//     age: req.body.age,
//     email: req.body.email,
//     categories: req.body.categories.split(","), // Split categories if they are comma-separated
//     description: req.body.description
//   });

//   userModel.register(userdata, req.body.password, function (err, registeredUser) {
//     if (err) {
//       console.error(err);
//       res.redirect("/"); // Redirect to the index page if registration fails
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         // Send an email
//         var mailOptions = {
//           from: 'kartikruhela672@gmail.com', // sender
//           to: 'kartikeya_be22cs112@srmcem.ac.in', // receiver, replace with your mobile email
//           subject: 'New user registration',
//           text: `User ${req.body.username} has registered.`
//         };

//         transporter.sendMail(mailOptions, function(error, info){
//           if (error) {
//             console.log(error);
//           } else {
//             console.log('Email sent: ' + info.response);
//           }
//         });

//         res.redirect("/profile"); // Redirect to the profile page on successful registration
//       });
//     }
//   });
// });


router.post("/register",(req,res)=>{
  var userdata = new userModel({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
  });
  // Create a transporter object
  var transporter = nodemailer.createTransport({
    service: 'gmail', // replace with your email provider
    auth: {
      user:  "kartikeya_be22cs112@srmcem.ac.in",// replace with your email
      pass: "srmcemcs2022"// replace with your password
    }
  });

  // Send an email
  var mailOptions = {
    from: "kartikeya_be22cs112@srmcem.ac.in", // sender
    to: "kartikruhela672@gmail.com", // receiver, replace with the user's email
    subject: 'New user registration',
    text: `User ${req.body.username} has registered.`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


//   userModel.register(userdata,req.body.password)// this line and the line below are creating the account of the user 
//     .then(function(registerduser){
//       passport.authenticate("local")(req,res,function(){
//         res.redirect("/profile");//is line aur iske just upr wali line ki wjh se vo logged in hoye aur profile page pe redirect hogya
//       })
//     })
// })

// userModel.register(userdata, req.body.password, function (err, registeredUser) {
//   if (err) {
//     // Handle registration error
//     console.error(err);
//     // You can add error handling here
//     res.redirect("/"); // You can modify this to handle registration errors.
//   } else {
//     passport.authenticate("local")(req, res, function () {
//       res.redirect("/profile");
//     });
//   }
// });
// });

  userModel.register(userdata, req.body.password, function (err, registeredUser) {
    if (err) {
      console.error(err);
      res.redirect("/signup"); // Redirect to the index page if registration fails
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/store"); // Redirect to the profile page on successful registration
      });
    }
  });
});

module.exports = router;
