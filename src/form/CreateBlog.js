import React from "react";
import TextField from '@mui/material/TextField';
import { Box, Button } from "@mui/material";
import axios from "axios";

const CreateBlog = () => {
    const [state, setState] = useState({});
    state = {title,body};
    const submitHandler = (e) => {
        var formData = new formData();
        formData.append('title', title);
        formData.append('body', body);
        axios.post('http://localhost/3rdprac/api/insertpost', formData).then(response=>{
            console.log(response);
            console.log(error)
        })
    };

    return(
    <Box display="block">
        <form onSubmit={submitHandler}>
            <TextField fullWidth id="title" label="Title" variant="outlined" margin="normal"/>
            <TextField multiline fullWidth rows={4} id="body" label="Boby" variant="outlined" margin="normal" />
            <Box display="flex">
                <Button sx={{ ml: "auto"}} color="success" variant="contained" type="submit">Sasve</Button>
            </Box>   
        </form>
    
    </Box>    
    );
    
    

};

export default CreateBlog;