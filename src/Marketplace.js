import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Divider, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import GooglePayButton from './GooglePayButton';

const products = [
    {
        id: 1,
        title: 'Living room Sofa',
        description: 'This sofa is perfect for modern tropical spaces, earthy toned spaces .',
        price: 450,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 2,
        title: 'Office Chair',
        description: 'Ergonomic office chair with adjustable height and lumbar support.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1579389083078-4a5b205f0903?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 3,
        title: 'Dining Table',
        description: 'A beautiful wooden dining table that seats six people comfortably.',
        price: 700,
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 4,
        title: 'Queen Bed',
        description: 'A luxurious queen bed with a memory foam mattress.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1583224475340-b8a1a1f1c227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 5,
        title: 'Bookshelf',
        description: 'A modern bookshelf with multiple compartments for storage.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 6,
        title: 'Recliner',
        description: 'A comfortable recliner with adjustable footrest.',
        price: 300,
        image: 'https://images.unsplash.com/photo-1578898885534-4378a220eca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 7,
        title: 'Coffee Table',
        description: 'A stylish coffee table made of glass and metal.',
        price: 120,
        image: 'https://images.unsplash.com/photo-1581349482254-27e4a27f56e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 8,
        title: 'TV Stand',
        description: 'A sleek TV stand with ample storage for media devices.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1602810314010-28c65a94e2d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 9,
        title: 'Bar Stool',
        description: 'A set of two bar stools with cushioned seats.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1602928188064-b80c84ecf19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 10,
        title: 'Desk Lamp',
        description: 'A modern desk lamp with adjustable brightness.',
        price: 50,
        image: 'https://images.unsplash.com/photo-1599947070462-d4889cc7a476?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 11,
        title: 'Wall Art',
        description: 'A set of three abstract wall art pieces.',
        price: 100,
        image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 12,
        title: 'Wardrobe',
        description: 'A spacious wardrobe with sliding doors.',
        price: 800,
        image: 'https://images.unsplash.com/photo-1595520295484-774c6e0322c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 13,
        title: 'Outdoor Table',
        description: 'A weather-resistant outdoor table for patio or garden.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1565538749231-4c3e4f09982f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 14,
        title: 'Accent Chair',
        description: 'A stylish accent chair for living room or bedroom.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1560448204-e62fc3813996?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 15,
        title: 'Kitchen Island',
        description: 'A multifunctional kitchen island with storage.',
        price: 900,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 16,
        title: 'Garden Bench',
        description: 'A wooden garden bench with a classic design.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
    },
];

function Marketplace() {
    const handlePaymentAuthorized = async (paymentData, product) => {
        try {
            const token = paymentData.paymentMethodData.tokenizationData.token;
            const amount = product.price * 100; // Convert to cents

            const response = await fetch('http://localhost:3001/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, amount }),
            });

            const result = await response.json();
            if (result.success) {
                alert(`Payment for ${product.title} successful!`);
            } else {
                alert('Payment failed.');
            }
        } catch (error) {
            alert('Payment failed: ' + error.message);
        }
    };

    return (
        <div style={{ padding: '10px' }}>
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
                                        ${product.price}
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <GooglePayButton product={product} onPaymentAuthorized={handlePaymentAuthorized} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Marketplace;
