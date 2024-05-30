import React from 'react';
import Grid from '@mui/material/Grid';
import GradientCover from './GradientCover';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        id: 1,
        title: 'Gym',
        description: 'Explore various gym exercises to build muscle and strength.',
        image: 'https://images.unsplash.com/photo-1583454110550-4acb87b3d4aa?auto=format&fit=crop&w=320',
        path: '/gym'
    },
    {
        id: 2,
        title: 'Yoga',
        description: 'Discover yoga exercises to improve flexibility and balance.',
        image: 'https://images.unsplash.com/photo-1580202428-c8bde6a5d2a4?auto=format&fit=crop&w=320',
        path: '/yoga'
    },
];

function Guide() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={50}>
                {categories.map(category => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                        <GradientCover
                            image={category.image}
                            title={category.title}
                            description={category.description}
                            onClick={() => navigate(category.path)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Guide;
