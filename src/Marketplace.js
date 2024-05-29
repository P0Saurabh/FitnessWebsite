// src/Marketplace.js
import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Button, ButtonGroup, Divider, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';

const products = [
    {
        id: 1,
        title: 'Living room Sofa',
        description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        price: '$450',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    // Repeat the object above to simulate more products with different ids.
    {
        id: 2,
        title: 'Dining Table',
        description: 'A perfect dining table for your modern home, made with high-quality wood and a sleek design.',
        price: '$350',
        image: 'https://images.unsplash.com/photo-1560185127-6a2ecdd65086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 3,
        title: 'Office Chair',
        description: 'Ergonomic office chair with lumbar support and adjustable height.',
        price: '$150',
        image: 'https://images.unsplash.com/photo-1585325701927-5931c037bc13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    // ...Add more products to reach 12 items
    {
        id: 4,
        title: 'Bedroom Lamp',
        description: 'A stylish lamp for your bedside table, with adjustable brightness.',
        price: '$80',
        image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 5,
        title: 'Kitchen Island',
        description: 'A modern kitchen island with ample storage and a sleek design.',
        price: '$600',
        image: 'https://images.unsplash.com/photo-1523418399544-0dfab5e29f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 6,
        title: 'Bookshelf',
        description: 'A large bookshelf made of high-quality wood, perfect for your living room or study.',
        price: '$200',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 7,
        title: 'Coffee Table',
        description: 'A chic coffee table with a glass top and metal legs.',
        price: '$120',
        image: 'https://images.unsplash.com/photo-1580860230489-c9a1e887f224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 8,
        title: 'Wardrobe',
        description: 'A spacious wardrobe with sliding doors and a modern design.',
        price: '$500',
        image: 'https://images.unsplash.com/photo-1616627561049-bf34342d8fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 9,
        title: 'Outdoor Chair',
        description: 'A comfortable outdoor chair made with weather-resistant materials.',
        price: '$100',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 10,
        title: 'Desk Lamp',
        description: 'An adjustable desk lamp with LED lighting.',
        price: '$60',
        image: 'https://images.unsplash.com/photo-1598300050714-3d0c64167f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 11,
        title: 'Bed Frame',
        description: 'A sturdy bed frame made of solid wood.',
        price: '$300',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 12,
        title: 'Recliner',
        description: 'A comfortable recliner chair with a modern design.',
        price: '$250',
        image: 'https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
];

function Marketplace() {
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
                                <ButtonGroup spacing={2}>
                                    <Button variant='contained' color='primary'>
                                        Buy now
                                    </Button>
                                    <Button variant='outlined' color='primary'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Marketplace;
