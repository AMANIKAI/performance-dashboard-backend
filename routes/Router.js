const express = require ('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require('../models/User')

router.get('/sign-up', (req,res)=>{
    res.send("Welcome to your sign up page")
})

router.post('/sign-up', async(req,res)=>{
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save()
    console.log(newUser)
})

router.get('/login', (req,res)=>{
    res.send("Welcome to your login page")
})

router.get('/dashboard', (req,res)=>{
    res.send("Welcome to your dashboard page")
})
module.exports= router