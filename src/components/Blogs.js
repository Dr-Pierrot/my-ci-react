import React ,{useState} from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions} from "@mui/material";
import Button from "@mui/material/Button/Button";
import CreateBlog from "../form/CreateBlog";


const Blogs = () => {

    const [isPressed, setPressed] = useState(false);

    // const handleOpenCreateButton = () => {
    //     setPressed(!isPressed);
    // };
    // const handleCloseCreateButton = () => {
    //     setPressed(isPressed);
    // };

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box width={100} my={4} display="block" sx={{ width: '100%', maxWidth: 750, height:'100%',}}>
                <Box display="flex" gap={65}>
                    <Typography
                    color="primary"
                    display={"flex-start"}
                    level="title-lg"
                    variant="h4">
                        Blogs
                    </Typography>
                    <Button
                        style={{marginTop: '10px'}}
                        variant="contained"
                        color={!isPressed ? 'success' : 'info'}
                        onClick={() => {
                            setPressed(!isPressed)
                        }}
                    >
                        {!isPressed ? 'Create Blog' : 'Cancel'}
                    </Button>
                </Box>
                <Box>
                {!isPressed ? <h1>hi</h1> : <CreateBlog name={'Title'} label={'Title'}/>}
                </Box>
                <hr/>
                <br/>
                
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Context
                        </Typography>
                        <Typography variant="body2">
                            Hello every body!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            
        </Grid>
    );
};
export default Blogs;