import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { lightGreen } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[data,setData]=useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (res)=>{
                console.log(res.data)
                setData(res.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[])
  return (
    <div style={{margin:"4%"}}>
    {/* <h1>Products</h1> */}
    <Grid container spacing={2}>
        {data?.map((val,i)=>{
            return(
                <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345 ,backgroundColor: "#9e9996"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={val.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        "{val.category}"
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {val.price}$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Buy</Button>
                        <Button size="small">Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>
            )
        })}
    </Grid>
</div>
  )
}

export default Home
