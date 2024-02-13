import React from "react";
import { Grid, Typography,Box } from "@mui/material";


const About = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
        >
            <Box height={30} width={100} my={4} display="block" gap={4}  sx={{ width: '100%', maxWidth: 750, height:'100%',}}>
                <Typography
                textAlign="center"
                color="primary"
                level="title-lg"
                noWrap={false}
                variant="h4">About Us</Typography>
                <Typography
                    textAlign="center"
                    variant="h2">
                    We, are the people.<br/>
                    <Typography variant="h2" color="primary">We, are the children.</Typography>                    
                </Typography>
                <Typography
                    textAlign="center">
                    We hope to bring you a long lasting life for the after life.a
                </Typography>
            </Box>
            
        </Grid>
    );
};
export default About;