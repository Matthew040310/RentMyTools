/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// .env still broken
// require('./.env').config()


//comment out evreyth below
// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')(process.env.stripeAPIKey)

// const app = express()
// var path = require('path')
// app.set('view engine', 'ejs')

// app.use(express.static('public'));

// app.use(cors({
//     origin: 'wad2-3b994.firebaseapp.com', // Allow your frontend URL
//     methods: 'GET, POST, PUT, DELETE, OPTIONS',
//     credentials: true // Include if you need to allow cookies
// }));

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'home.html'));
// });

// app.post('/checkout', async (req, res) => {

//     const products = req.body.cartItems; // Expecting an array of product arrays

//     // Log the incoming products for debugging
//     console.log('Received products:', products);

//     // Format items according to Stripe's requirements
//     const lineItems = products.map(product => ({
//         price_data: {
//             currency: 'sgd', // or your desired currency
//             product_data: {
//                 name: product[1], // Product name
//                 // Optional: Add images or descriptions if needed
//                 images: [product[0]]// Assuming you want to include the image
//             },
//             unit_amount: Math.round(product[2] * 100), // Price in cents
//         },
//         quantity: product[5], // Quantity from your data
//     }));
//     console.log(lineItems)
//     // Create Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: `wad2-3b994.firebaseapp.com/success`,
//         cancel_url: `wad2-3b994.firebaseapp.com/cancel`
//     });

//     // Send session URL to client to handle the redirect
//     res.json({ url: session.url }); // alysa: i try comment out
//     console.log(session.url)

// });

// app.get('/success', async (req, res) => {
//     // console.log(req.query.session_id)
//     // const result = Promise.all([
//     //     stripe.checkout.sessions.retrieve(req.query.session_id), //session
//     //     stripe.checkout.sessions.listLineItems(req.query.session_id) //lineItems
//     // ])

//     // console.log(JSON.stringify(await result)) //returns alot of data, can check the product, payment intent, card expiry and everyth
//     //can grab wtv info we need to add into database

//     // res.send('Your payment was successful')
//     // res.redirect("/views/success.ejs")
//     // res.render('success.ejs')
//     res.sendFile(path.join(__dirname, 'success.html'))
// })

// app.get('/cancel', (req, res) => {
//     // res.send('Payment cancelled')
//     // res.redirect('/')
//     // res.redirect("/views/cancel.html")
//     // res.render('cancel.ejs')
//     res.sendFile(path.join(__dirname, 'cart.html'));
// })
