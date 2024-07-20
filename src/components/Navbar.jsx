import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"red",margin:5}} >
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Button ><Link to={"/"} style={{textDecoration :"none",color:"white",fontSize:"20px"}}>Home</Link></Button>
          <Button ><Link to={"/a"} style={{textDecoration :"none",color:"white",fontSize:"20px"}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
