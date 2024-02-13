import React, {useState, useEffect} from "react";
import axios from "axios";
import Box from "@mui/system/Box";
import { Grid, Typography } from "@mui/material";
import Table from '@mui/joy/Table/Table'


const Home = () => {
    
    // data, setdata
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost/3rdprac/api/getdata');
                setData(response.data);
                console.log(response);
            } catch (error){
                console.log(error);
            }
        }
        fetchData();
    },[]);
    return (
        <>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >
                <Box height={30} width={100} my={4} display="block" gap={4}  sx={{ width: '100%', maxWidth: 500, height:'100%',}}>
                <Typography
                    textAlign="center"
                    color="primary"
                    level="title-lg"
                    noWrap={false}
                    variant="h4">
                    Home
                </Typography>
                <Table borderAxis="both" aria-label="basic table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                </Box>
            </Grid>
        
        </>
        
    
    );
};
export default Home;
