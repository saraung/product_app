import { Button, TextField } from '@mui/material'
import React from 'react'
import '../App.css';
const AddProduct = () => {
  return (
    <div>
      <h2>Add Product</h2>
      <TextField variant='outlined' label="Product Name" /><br /><br />
      <label htmlFor="">Upload Image : </label><br />
      <input type="file" /><br /><br />
      <TextField variant='outlined' label="Price" /><br /><br />
      <TextField variant='outlined' label="Category" /><br /><br />
      <Button  variant="contained">Submit</Button>


    </div>
  )
}

export default AddProduct
