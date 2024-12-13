// const sj = require("./person");

// // console.log("Hellow World")

// console.log("Hellow World",sj)


/* PACKAGES */
// const os = require('os')

// console.log(os.freemem())

/* AN OTHER METHOD TO IMPORT*/

// gives the default if it is not present only works {for one} if {two or more} both must be present.
// import {getName} from "./person_model.mjs"

// getName()

const express = require('express')

const app = express();
const port = 8000;

app.get('/',(req,res) => {
    res.json({message: "Docker is easy"})
})

app.listen(port,() => {
    console.log('Listening to port :${port} ')
})







