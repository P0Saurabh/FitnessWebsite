import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import ExerciseModal from './ExerciseModal';

const gymExercises = [
    {
        id: 1,
        title: 'Bench Press',
        description: 'A great exercise for building chest muscles.',
        image: 'https://images.unsplash.com/photo-1579758629936-1ee885a67073?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aD8wTGBtZRabC8A/giphy.gif',
        steps: [
            'Lie flat on your back on a bench.',
            'Grip the barbell with hands slightly wider than shoulder-width apart.',
            'Lower the barbell to your chest.',
            'Push the barbell back up to the starting position.',
        ],
    },
    {
        id: 2,
        title: 'Squat',
        description: 'An essential exercise for building leg muscles.',
        image: 'https://images.unsplash.com/photo-1579758629936-1ee885a67073?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0HlU0lTE9hjzT90Y/giphy.gif',
        steps: [
            'Stand with feet shoulder-width apart.',
            'Lower your body by bending your knees and hips.',
            'Keep your back straight and chest up.',
            'Return to the starting position.',
        ],
    },
    {
        id: 3,
        title: 'Deadlift',
        description: 'A fundamental exercise for overall strength.',
        image: 'https://images.unsplash.com/photo-1551887372-0fc7d21aab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0HlQ7LRalNXb4ZnO/giphy.gif',
        steps: [
            'Stand with feet hip-width apart.',
            'Bend at the hips and knees to grip the barbell.',
            'Lift the barbell by straightening your hips and knees.',
            'Lower the barbell back to the ground with control.',
        ],
    },
    {
        id: 4,
        title: 'Bicep Curl',
        description: 'An effective exercise for building arm muscles.',
        image: 'https://images.unsplash.com/photo-1562073590-8e58a1f1a6b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o6Zt7s4FvmYZfqkAw/giphy.gif',
        steps: [
            'Stand with feet shoulder-width apart.',
            'Hold the dumbbells at your sides with palms facing forward.',
            'Curl the dumbbells up to shoulder level.',
            'Lower the dumbbells back to the starting position.',
        ],
    },
    {
        id: 5,
        title: 'Lat Pulldown',
        description: 'A key exercise for developing back muscles.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f7c4e82c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aD0KFC1Iw6XWzzy/giphy.gif',
        steps: [
            'Sit at a lat pulldown machine and grab the bar with a wide grip.',
            'Pull the bar down to your chest while keeping your back straight.',
            'Slowly return the bar to the starting position.',
        ],
    },
    {
        id: 6,
        title: 'Tricep Extension',
        description: 'An exercise that targets the tricep muscles.',
        image: 'https://images.unsplash.com/photo-1572249935279-c96d6c1972aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aCRy4yoCTKJasTm/giphy.gif',
        steps: [
            'Stand with feet shoulder-width apart.',
            'Hold a dumbbell with both hands above your head.',
            'Lower the dumbbell behind your head by bending your elbows.',
            'Raise the dumbbell back to the starting position.',
        ],
    },
    {
        id: 7,
        title: 'Leg Press',
        description: 'An exercise that focuses on the leg muscles.',
        image: 'https://images.unsplash.com/photo-1551836022-54e9f26b1154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aDdZ7d3nxlKnInu/giphy.gif',
        steps: [
            'Sit on the leg press machine with feet on the platform.',
            'Push the platform away by straightening your legs.',
            'Lower the platform back to the starting position with control.',
        ],
    },
    {
        id: 8,
        title: 'Shoulder Press',
        description: 'A great exercise for building shoulder muscles.',
        image: 'https://images.unsplash.com/photo-1551829158-5364470d6eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aD7J5uoBUz9Fgxi/giphy.gif',
        steps: [
            'Stand with feet shoulder-width apart.',
            'Hold dumbbells at shoulder height with palms facing forward.',
            'Press the dumbbells overhead until your arms are fully extended.',
            'Lower the dumbbells back to the starting position.',
        ],
    },
];

function Gym() {
    const [open, setOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleCardClick = (exercise) => {
        setSelectedExercise(exercise);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedExercise(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={4}>
                {gymExercises.map(exercise => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={exercise.id}>
                        <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleCardClick(exercise)}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={exercise.image}
                                alt={exercise.title}
                            />
                            <CardContent>
                                <Stack mt={2} spacing={2}>
                                    <Typography variant="h5" component="div">
                                        {exercise.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exercise.description}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedExercise && (
                <ExerciseModal
                    open={open}
                    handleClose={handleClose}
                    exercise={selectedExercise}
                />
            )}
        </div>
    );
}

export default Gym;
