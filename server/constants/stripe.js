const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_SHzfvzrZRDSbXYgGGht1kkik'
    : 'sk_test_KykeOZu7aY6AUb5N24RNcWYe';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
