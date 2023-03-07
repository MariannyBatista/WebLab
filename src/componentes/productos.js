import React from 'react'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


export default function Productos() {

    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setResult(result.products)
            })
    }, [])

    return (
        <div className='productsDiv'>
            {result.map((art, index) => {
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 12 }} sx={{ justifyContent: "center" }}>
                            <Grid item xs={2} sm={4} md={4} key={index} sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                mt: "20px",
                                padding: "10px"
                            }}>
                                <Card sx={{ maxWidth: 375 }}>
                                    <CardActionArea>
                                        <CardMedia>
                                            <img src={art.images[0]} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography>{art.title}</Typography>
                                            <Typography>{art.description}</Typography>
                                            <Typography>{art.price}</Typography>
                                        </CardContent>
                                        <Button variant="contained" color="success">
                                            Agregar
                                        </Button>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>



                );
            })}
        </div>
    )
}
