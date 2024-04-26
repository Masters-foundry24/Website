import express from 'express';
import dotenv from 'dotenv';
import stripe from 'stripe';
import cors from 'cors'; // Importando o pacote cors
import { title } from 'process';

// coloquei este agora para a porta ser dinamica
const PORT = process.env.PORT || 3000;
process.env.DOMAIN = `http://localhost:${PORT}/`;
dotenv.config();

const app=express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors()); // Adicionando o middleware cors


app.get("/", (req, res) =>{
    res.sendFile("index.html", {root: "public"});

});

app.get("/sucess", (req, res) =>{
    res.sendFile("sucess.html", {root: "public"});

});

app.get("/cancel", (req, res) =>{
    res.sendFile("cancel.html", {root: "public"});

});

let stripeGateway = stripe(process.env.stripe_api);
let DOMAIN = process.env.DOMAIN;



app.post("/strip-checkout", async (req, res) => {
   const lineItems =req.body.items.map((item) =>{
    const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, "") *100);
    console.log("item-price:", item.price);
    console.log("unitAmount:", unitAmount);
    return{
price_data:{
    currency: "usd",
    product_data: {
    name: item.title,
    images: [item.productImg]

    },
    unit_amount: unitAmount,
},
quantity: item.quantity,

    };
});
console.log("lineItems:",lineItems);

const session = await stripeGateway.checkout.sessions.create({

    payment_method_types: ["card"],
    mode: "payment",
    success_url:`${DOMAIN}/sucess.html`,
    cancel_url:`${DOMAIN}/cancel.html`,
    line_items: lineItems,

    billing_address_collection:"required"
});
//mudei section para session
res.json(session.url);

   });

  /* 
app.listen(3000, () =>{
console.log("listening on port 3000;");

});
*/
app.listen(PORT, () => {
    console.log(`listening on port ${PORT};`);
});