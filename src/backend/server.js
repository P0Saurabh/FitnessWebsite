const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/pay', (req, res) => {
    const { token, amount } = req.body;
    console.log('Payment token:', token);
    console.log('Amount:', amount);

    // Simulate payment processing
    setTimeout(() => {
        res.json({ success: true, message: 'Product purchased successfully!' });
    }, 1000);
});

app.listen(port, () => {
    console.log(`Mock payment server running at http://localhost:${port}`);
});
