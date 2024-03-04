import React from 'react'
import './BasicInfo.css'
import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from 'react-hook-form';
function BasicInfo() {
  return (
    <>
      <div className='basicinfo-body'>
        <div className='row'>
          <div className='col-6'>
            <TextField id="outlined-basic" label="First Name" variant="standard" margin="normal" fullWidth color="success" />
          </div>
          <div className='col-6'>

            <TextField id="outlined-basic" label="Last Name" variant="standard" margin="normal" fullWidth color="success" />
          </div>
        </div>
        <TextField id="outlined-basic" label="Email" variant="standard" margin="normal" fullWidth color="success" />
        <div className='row'>
          <div className='col-6'>
            <TextField id="outlined-basic" label="Country" variant="standard" margin="normal" fullWidth color="success" />
          </div>
          <div className='col-6'>
            <TextField id="outlined-basic" label="City" variant="standard" margin="normal" fullWidth color="success" />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <TextField id="outlined-basic" label="Mobile No" variant="standard" margin="normal" fullWidth color="success" />
          </div>
          <div className='col-6'>
            <TextField id="outlined-basic" label="Pin Code" variant="standard" margin="normal" fullWidth color="success" />
          </div>

        </div>
        <div className='input-container'>
          <label htmlFor="input" className="label">Date Of Birth</label>
          <input type="date" id="input" />
        </div>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" color="success">Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio color="success" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="success" />} label="Male" />
            <FormControlLabel value="other" control={<Radio color="success" />} label="Other" />
          </RadioGroup>
        </FormControl>


      </div>


    </>
  )
}

export default BasicInfo
