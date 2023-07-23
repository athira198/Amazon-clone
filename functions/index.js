
const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51NDM6aSCMSXmdhhuluiJGUMU1Fc3lXuThUdVgb8ACOpAcemEKmjt6qE6Bjx28oakXvCI4gnSlUTkhuURyioaNe3E0075xtGqU6')
//API
//App config
const app=express();


//-Middleware
app.use(cors({origin:true}))
app.use(express.json())

//API routes
app.get('/',(request,response)=> response.status(200).send('hello world'));
app.post("/payments/create", async (request, response)=>
{
    const total=request.query.total;
    console.log('payment request recieved boom!! for this amount>>',total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
exports.api=functions.https.onRequest(app)
//http://127.0.0.1:5001/challenge-1a02f/us-central1/api