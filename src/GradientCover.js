import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function GradientCover({ image, title, description, onClick }) {
  return (
    <Card sx={{ minHeight: '280px', width: 320, cursor: 'pointer' }} onClick={onClick}>
      <CardCover>
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h5" textColor="#fff">
          {title}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
