import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import './link.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Página de Links
      </Typography>
      <Typography variant="h5" component="div">
        Adicione aqui o seus Links!
      </Typography>
      <Typography variant="body2">
        Aqui você pode adicionar seus links!
      </Typography>
      <div className="search-link">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Digite aqui" variant="outlined" />
    </Box>
    </div>
    </CardContent>
    <div className="btn-add">
    <CardActions>
      <Button variant="outlined" size="small">Adicionar</Button>
    </CardActions>
    </div>
  </React.Fragment>
);

function Link () {
    return (
        <div className="container">
            <div className="btn-link">
            <Button href="/" variant="outlined" size="small">Home</Button>
            </div>
            <Box className="card-container">
            <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    )
}

export default Link;