import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const About = () => {
    return (
      <Box style={{marginTop: "40px", padding: "15px"}}sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>Welcome!</Item>
             image here
          </Grid>
          <Grid item xs={8}>
            <Item>About</Item>
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              scelerisque neque nunc, vitae malesuada nisi lobortis id. Fusce
              quis ipsum at turpis pretium sollicitudin. Donec tristique enim ac
              nisi tempus hendrerit. Donec sollicitudin egestas leo, non
              vestibulum est tincidunt eu. Praesent bibendum at tortor quis
              pretium. Aliquam interdum ligula nisl. In ac sapien non ligula
              tincidunt lobortis et ut sapien.
            
          </Grid>
        </Grid>
      </Box>
    );
      
};

export default About;