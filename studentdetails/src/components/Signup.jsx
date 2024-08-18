import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button } from '@mui/material';


const Signup = () => {

    const [form,setform]=useState({
        "Name":'',
        "Email":'',
        "Password":'',
        "Contact no":''
      }) 

      let showData=()=>{
        console.log(form);
       
      }

      function valueCap(e)
    {
      // console.log(e)
      setform({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <h1>Sign Up</h1>
      <TextField
        required
        id="outlined-required"
        label="Name"
        name='name'  
        value={form.name}
        onChange={valueCap}
      /><br></br>

    <TextField
        required
        id="outlined-required"
        label="Email"
        value={form.email}
        onChange={valueCap}
      /><br></br>

    <TextField
        required
        id="outlined-required"
        label="Password"
        name='password'  
        value={form.password}
        onChange={valueCap}
      /><br></br>

    <TextField
        required
        id="outlined-required"
        label="Contact"
        name='contact'  
        value={form.contact}
        onChange={valueCap}
      /><br></br>
       </div>
       <Button variant="contained" color='inherit' onClick={showData}Submit> Submit </Button>
       </Box>
    </div>
  )
}

export default Signup
