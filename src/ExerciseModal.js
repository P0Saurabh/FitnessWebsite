import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function ExerciseModal({ open, handleClose, exercise }) {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>{exercise?.title}</DialogTitle>
            <DialogContent>
                <CardMedia
                    component="img"
                    height="400"
                    image={exercise?.gif}
                    alt={exercise?.title}
                />
                <DialogContentText mt={2}>
                    {exercise?.description}
                </DialogContentText>
                {exercise?.steps && (
                    <div>
                        <Typography variant="h6" mt={2}>Steps:</Typography>
                        <ul>
                            {exercise.steps.map((step, index) => (
                                <li key={index}>
                                    <Typography>{step}</Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ExerciseModal;
