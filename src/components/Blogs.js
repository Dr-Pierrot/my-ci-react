import React ,{useState, useEffect} from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions} from "@mui/material";
import Button from "@mui/material/Button/Button";
import CreateBlog from "../form/CreateBlog";
import axios from "axios";


const Blogs = () => {

    const [isPressed, setPressed] = useState(false);
    
    
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost/3rdprac/api/getpost');
                setData(response.data);
                console.log(response);
            } catch (error){
                console.log(error);
            }
        }
        fetchData();
    },[]);


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
                {!isPressed ? <h1></h1> : <CreateBlog />}
                </Box>
                <hr/>
                <br/>
                {data.map(item=>(
                  <Card sx={{ my:2, border:1, borderColor:"skyblue", background:"skyblue" }}> 
                  <CardContent>
                      <Typography variant="h5" component="div">
                          {item.title}
                      </Typography>
                      <Typography variant="body2">
                          {item.body}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button>
                          Read More
                      </Button>
                  </CardActions>
                </Card>
                    
                ))
                }

                
                
            </Box>
            
        </Grid>
    );
};
export default Blogs;