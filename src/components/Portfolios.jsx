import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Portfolios = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        {/* Example Image with Fixed Dimensions */}
        <CardMedia
          component="img"
          image="https://via.placeholder.com/300" // Replace with your image URL
          alt="GitHub Project"
          sx={{ width: 300, height: 300, objectFit: 'cover', mx: 'auto', mt: 2 }}
        />
        <CardContent>
          {/* Title and Short Description */}
          <Typography gutterBottom variant="h5" component="div">
            GitHub Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A brief description of the GitHub project. Click "Learn More" to see additional details.
          </Typography>
        </CardContent>

        {/* "Learn More" Button */}
        <CardActions>
          <Button size="small" onClick={handleExpandClick}>
            {expanded ? 'Show Less' : 'Learn More'}
          </Button>
        </CardActions>

        {/* Expanded Content */}
        {expanded && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is an extended description of the project. It includes detailed information about the
              features, technologies used, and any other relevant details you wish to showcase.
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default Portfolios;
