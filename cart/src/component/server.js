const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Replace with your Stripe Secret Key

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Your Cart Total',
            },
            unit_amount: req.body.totalAmount * 100, // Convert to smallest currency unit
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
