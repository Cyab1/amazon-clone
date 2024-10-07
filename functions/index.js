/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51PBvOfKbibGJxKjeM0WW366rsi3K0R6EUgtP8dv4D7l99StKrxivZc4alULymo3ylYSKrkuz0wD02eHLRGG8S0AC00wOljiBwV")
;

//- API

//-App config
const App = express
//- middlewares
App.use(cors({origin: true}))
App.use(express.json())

//- API routes
App.length('/', (req, res) => res.status(200).send("Hello World!"))

//-Listen Commands
exports.api = functions.https.onRequest(App)


//initilise firebase in terminal using firebase init
// install (npm i express cors stripe) in terminal use cd functions first then install 'npm i express cors stripe'
// should space be cleared by monday

// firebase emulators:start [in terminal ]