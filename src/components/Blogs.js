import React ,{useState, useEffect} from "react";
import { Box, Typography, Grid, Card, CardContent, Modal, FormGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button/Button";
import CreateBlog from "../form/CreateBlog";
import axios from "axios";
import { Sheet, ModalClose } from "@mui/joy";


const Blogs = () => {

    const [isPressed, setPressed] = useState(false);
    
    
    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost/3rdprac/api/getpost');
            setData(response.data);
            // console.log(response);
        } catch (error){
            console.log(error);
        }
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const handlePostSuccess = () => {
        fetchData(); // Fetch data again to include the newly created blog post
        setPressed(false); // Close the CreateBlog component
    };

    const deleteData = async (event) => {
        var id = event.currentTarget.id;
        const formData = new FormData();
        formData.append('id', id);
        console.log(id);
        try {
            const response = await axios.post('http://localhost/3rdprac/api/deletepost', formData);
            console.log(response.data); // assuming the response contains data
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleOpen = (event) => {
        var id = event.currentTarget.id;
        for(let i=0;i<data.length;i++){
            if(id == data[i]['id']){
                setId(data[i]['id']);
                setTitle(data[i]['title']);
                setBody(data[i]['body']);
                break;
            }
            
        }
        setOpen(true)};
    const handleClose = () => setOpen(false);

    const updateData = async (event) => {
        event.preventDefault();
        var id = event.currentTarget.id;
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('body', body);
        try {
            const response = await axios.post('http://localhost/3rdprac/api/updatepost/', formData);
            console.log(response.data); // assuming the response contains data
            handleClose();
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                <Sheet
                    variant="outlined"
                    sx={{
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} onClick={handleClose}/>
                    <form id="blog" onSubmit={updateData}>
                        <FormGroup sx={{padding:2, margin:5, width:500,borderRadius:2, border:'1px solid', borderColor:'primary.main' }}>
                            
                            <TextField id="title" name="title" label="Title" variant="outlined" margin="normal" value={title} onChange={e=>setTitle(e.target.value)}/>
                            <TextField multiline rows={4} id="body" name="body" label="Boby" variant="outlined" margin="normal" value={body} onChange={e=>setBody(e.target.value)}/>
                            <Box display="flex">
                                <Button sx={{ ml: 'auto', mr: 1}} color="warning" variant="contained" type="submit" onClick={handleClose}>Cancel</Button>
                                <Button id={id} sx={{ ml: 0}} color="success" variant="contained" type="submit" onClick={updateData} value='update'>Save</Button>
                            </Box>
                        </FormGroup>
                    </form>
                    
                </Sheet>
                </Modal>

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
                    <br/>
                    <Box>
                    {!isPressed ? '' : <CreateBlog onPostSuccess={handlePostSuccess} />}
                    </Box>
                    <hr/>
                    <br/>
                    {data.map(item=>(
                    <Card sx={{ my:2, border:1, borderColor:"skyblue", background:"skyblue" }} key={item.id}> 
                    <Grid container spacing={2}>
                        <Grid item xs={8.5}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={1.2}>
                            <CardContent>
                                <Button id={item.id} sx={{background:'green', }} variant="contained" onClick={handleOpen}>Edit</Button>
                            </CardContent>
                        </Grid>
                        <Grid item xs={1}>
                            <CardContent>
                                
                                <Button id={item.id} sx={{background:'red'}} variant="contained" onClick={deleteData}>Delete</Button>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography variant="body1">
                                    {item.body}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    
                    </Card>
                        
                    ))
                    }

                    
                    
                </Box>
                
            </Grid>
        </>
        
    );
};
export default Blogs;