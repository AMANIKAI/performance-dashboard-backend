const express = require ('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require ("bcrypt")

router.get('/sign-up', (req,res)=>{
    res.send("Welcome to your sign up page")
})

router.post('/sign-up', async(req,res)=>{
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save()
    res.send("User created")
})

router.post('/login', async(req, res) => {
    // Insert Login Code Here
    const {userName, password} = req.body
    const userLogin = await User.findOne({userName:userName}).exec()
    console.log(userLogin)
    await bcrypt.compare(password, userLogin.password) ? console.log("iko") : console.log('haiko')

});

router.get('/login', (req,res)=>{
    res.send("Welcome to your login page")
})

router.get('/dashboard', (req,res)=>{
    res.send("Welcome to your dashboard page")
})
module.exports= router