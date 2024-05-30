import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import ExerciseModal from './ExerciseModal';

const yogaExercises = [
    {
        id: 1,
        title: 'Downward Dog',
        description: 'A foundational yoga pose that stretches the entire body.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif',
        steps: [
            'Start on your hands and knees.',
            'Lift your hips toward the ceiling.',
            'Straighten your legs as much as possible.',
            'Press your heels toward the floor.',
        ],
    },
    {
        id: 2,
        title: 'Tree Pose',
        description: 'A balance pose that strengthens the legs and core.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3ohzdPoVy9PHLqUEI8/giphy.gif',
        steps: [
            'Stand with feet together.',
            'Place your right foot on your left inner thigh.',
            'Bring your hands together in front of your chest.',
            'Hold the pose and then switch sides.',
        ],
    },
    {
        id: 3,
        title: 'Warrior Pose',
        description: 'A powerful pose that builds strength and stability.',
        image: 'https://images.unsplash.com/photo-1540201837549-0d9a4c280e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0MYDGA5TpyueOGm0/giphy.gif',
        steps: [
            'Stand with feet wide apart.',
            'Turn your right foot out and bend your right knee.',
            'Extend your arms out to the sides.',
            'Hold the pose and then switch sides.',
        ],
    },
    {
        id: 4,
        title: 'Bridge Pose',
        description: 'A backbend that stretches the chest and spine.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0MYR6yG3PrHpVRUo/giphy.gif',
        steps: [
            'Lie on your back with knees bent.',
            'Lift your hips toward the ceiling.',
            'Clasp your hands under your back.',
            'Hold the pose and then release.',
        ],
    },
    {
        id: 5,
        title: 'Child\'s Pose',
        description: 'A resting pose that calms the mind and body.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0MYwC1ZDBCRFXiVW/giphy.gif',
        steps: [
            'Start on your hands and knees.',
            'Sit back on your heels.',
            'Stretch your arms out in front of you.',
            'Rest your forehead on the floor.',
        ],
    },
    {
        id: 6,
        title: 'Cobra Pose',
        description: 'A gentle backbend that stretches the spine and chest.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0MYCv4bD4jNZ4rG0/giphy.gif',
        steps: [
            'Lie on your stomach with hands under shoulders.',
            'Lift your chest off the floor by straightening your arms.',
            'Keep your elbows slightly bent.',
            'Hold the pose and then release.',
        ],
    },
    {
        id: 7,
        title: 'Seated Forward Bend',
        description: 'A pose that stretches the back and hamstrings.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/l0MYyIP7odYl3hBJK/giphy.gif',
        steps: [
            'Sit on the floor with legs extended.',
            'Reach forward and grab your feet.',
            'Bend forward, keeping your back straight.',
            'Hold the pose and then release.',
        ],
    },
    {
        id: 8,
        title: 'Camel Pose',
        description: 'A deep backbend that stretches the front of the body.',
        image: 'https://images.unsplash.com/photo-1540202404-53c7c961f4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
        gif: 'https://media.giphy.com/media/3o7aDdZ7d3nxlKnInu/giphy.gif',
        steps: [
            'Kneel on the floor with knees hip-width apart.',
            'Place your hands on your lower back.',
            'Lean back and reach for your heels.',
            'Hold the pose and then release.',
        ],
    },
];

function Yoga() {
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
                {yogaExercises.map(exercise => (
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

export default Yoga;
