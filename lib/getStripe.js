import { loadStripe } from "@stripe/stripe-js";

let stripePromiss;

const getStripe = () => {
    if (!stripePromiss) {
        stripePromiss = loadStripe('Your Public stripe key')
    }
    return stripePromiss;
}

export default getStripe;