import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_API_KEY}`);

const session = await stripe.checkout.sessions.create({
    
    line_items,
    mode: 'payment',
    successUrl:`${window.location.origin}?session_id{CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}`,
});
}