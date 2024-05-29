import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Divider, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import GooglePayButton from './GooglePayButton';

const products = [
    {
        id: 1,
        title: 'Living room Sofa',
        description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        price: '$450',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    // Add more products as needed
];

function Marketplace() {
    const handlePaymentAuthorized = async (paymentData) => {
        try {
            const token = paymentData.paymentMethodData.tokenizationData.token;
            const amount = 45000; // Amount in cents (for example, $450.00)

            const response = await fetch('http://localhost:3001/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, amount }),
            });

            const result = await response.json();
            if (result.success) {
                alert('Payment successful!');
            } else {
                alert('Payment failed.');
            }
        } catch (error) {
            alert('Payment failed: ' + error.message);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card sx={{ maxWidth: 'sm' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.title}
                                    borderRadius='lg'
                                />
                                <Stack mt={2} spacing={2}>
                                    <Typography variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="blue.600">
                                        {product.price}
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <GooglePayButton onPaymentAuthorized={handlePaymentAuthorized} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Marketplace;
