import React, {useState} from "react";
import { Box, Button, TextField, FormGroup } from "@mui/material";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import axios from "axios";


const CreateBlog = ({onPostSuccess}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Title:', title, 'Body:', body);
        const form = document.getElementById("blog");
        const submitter = document.querySelector("button[value=save]");
        const formData = new FormData(form, submitter);
        try {
            const response = await axios.post('http://localhost/3rdprac/api/insertpost/', formData);
            console.log(response.data); // assuming the response contains data
            onPostSuccess();
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return(
    <Box display="block">
        <form id="blog" method="post" action="/blogs" onSubmit={handleSubmit}>
            <FormGroup sx={{padding:2, borderRadius:2, border:'1px solid', borderColor:'primary.main' }}>
                <TextField id="title" name="title" label="Title" onInput={e=>setTitle(e.target.value)} variant="outlined" margin="normal"/>
                <TextField multiline rows={4} id="body" name="body" label="Boby" onInput={e=>setBody(e.target.value)} variant="outlined" margin="normal" />
                <Box display="flex">
                    <Button sx={{ ml: "auto"}} color="success" variant="contained" type="submit" value="save">Save</Button>
                </Box>
            </FormGroup>
        </form>
    </Box>    
    );
    
    

};

export default CreateBlog;