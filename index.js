const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')("sk_test_51PBvOfKbibGJxKjeM0WW366rsi3K0R6EUgtP8dv4D7l99StKrxivZc4alULymo3ylYSKrkuz0wD02eHLRGG8S0AC00wOljiBwV")

// -API

// - APP Config
const app = express()

//-  middlewares
app.use(cors({origin: true}))
app.use(express.json())
// -API Routes
app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    console.log("Payment request received ", total)
})

const paymentIntent = await stripe.paymentIntents.create({amount: total, currency: "usd"})

//if okay created
res.status(201).send({clientSecret: paymentIntent.client_secret})

// - Listen Commands
exports.api = functions.https.onRequest(app)

