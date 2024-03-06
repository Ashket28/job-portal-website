import React from 'react'
import './BasicInfo.css'
import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormContext, Controller, useForm } from 'react-hook-form';

function BasicInfo() {
  const { useFormContextControl } = useFormContext();
  const { register } = useForm();
  return (
    <>
      <div className='basicinfo-body'>
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='FirstName' render={({ field }) => (
              <TextField id="FirstName" label="First Name" variant="standard" margin="normal" fullWidth color="success" {...field}  />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='LastName' render={({ field }) => (
              <TextField id="LastName" label="Last Name" variant="standard" margin="normal" fullWidth color="success" {...field} />
            )} />
          </div>
        </div>
        <Controller control={useFormContextControl} name='Email' render={({ field }) => (
          <TextField id="Email" label="Email" variant="standard" margin="normal" fullWidth color="success" {...field} autoComplete='off' />
        )} />
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='Country' render={({ field }) => (
              <TextField id="Country" label="Country" variant="standard" margin="normal" fullWidth color="success" {...field} autoComplete='off' />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='City' render={({ field }) => (
              <TextField id="City" label="City" variant="standard" margin="normal" fullWidth color="success" {...field} />
            )} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='mobileNo' render={({ field }) => (
              <TextField id="mobileNo" label="Mobile No" variant="standard" margin="normal" fullWidth color="success" {...field} />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='pincode' render={({ field }) => (
              <TextField id="pincode" label="Pin Code" variant="standard" margin="normal" fullWidth color="success" {...field} />
            )} />
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor="DateofBirth" className="label">Date Of Birth</label>
          <Controller control={useFormContextControl} name='DateofBirth' render={({ field }) => (
            <input type="date" id="DateofBirth" ref={register} {...field} />
          )} />
        </div>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" color="success">Gender</FormLabel>
          <Controller control={useFormContextControl} name='Gender' render={({ field }) => (
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" {...field}>
              <FormControlLabel value="female" control={<Radio color="success" />} label="Female" />
              <FormControlLabel value="male" control={<Radio color="success" />} label="Male" />
              <FormControlLabel value="other" control={<Radio color="success" />} label="Other" />
            </RadioGroup>
          )} />
        </FormControl >


      </div>

    </>
  )
}

export default BasicInfo
