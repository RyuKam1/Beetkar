
export async function checkout({lineItems}){
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_API_KEY}`);

const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url:`${window.location.origin}?session_id{CHECKOUT_SESSION_ID}`,
    cancel_url: `${window.location.origin}`,
});
}