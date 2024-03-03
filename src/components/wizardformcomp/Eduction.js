import React from 'react'
import { TextField } from '@mui/material'
import './Eduction.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Eduction() {
  const [month, setmonth] = React.useState('');

  const handleChange = (event) => {
    setmonth(event.target.value);
    console.log(event.target.value);
  };

  const [year, setYear] = React.useState('');

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <div className='eduction-body'>
        <div className='eduction-data mx-1 mt-5'>
          <h5>My Education</h5>
        </div>
        <div className='option-eduction'>
          <input type="radio" className="btn-check" name="eduction-options" id="eduction-option1" />
          <label className="btn btn-outline-success" htmlFor="eduction-option1">Below 10th</label>
          <input type="radio" className="btn-check" name="eduction-options" id="eduction-option2" />
          <label className="btn  btn-outline-success" htmlFor="eduction-option2">10th Pass</label>
          <input type="radio" className="btn-check" name="eduction-options" id="eduction-option3" />
          <label className="btn btn-outline-success" htmlFor="eduction-option3">12th pass & Above</label>
          <input type="radio" className="btn-check" name="eduction-options" id="eduction-option4" />
          <label className="btn btn-outline-success" htmlFor="eduction-option4">Graduate</label>
          <input type="radio" className="btn-check" name="eduction-options" id="eduction-option5" />
          <label className="btn btn-outline-success" htmlFor="eduction-option5">Post Graduate  </label>
        </div>

        <TextField id="outlined-basic" label="Degree" variant="standard" margin="normal" fullWidth color="success" />
        <TextField id="outlined-basic" label="College Name" variant="standard" margin="normal" fullWidth color="success" />
        <div className='college-year mt-4 mb-4'>
          <h5>Completion Year (or expected)</h5>
        </div>
        <div className='row'>
          <div className='col-6'>
            <FormControl color="success" variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label-month">Month</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label-month"
                id="demo-simple-select-standard-month"
                value={month}
                onChange={handleChange}
                label="month"
              >
                <MenuItem value={'January'}>January</MenuItem>
                <MenuItem value={'February'}>February</MenuItem>
                <MenuItem value={'March'}>March</MenuItem>
                <MenuItem value={'April'}>April</MenuItem>
                <MenuItem value={'May'}>May</MenuItem>
                <MenuItem value={'June'}>June</MenuItem>
                <MenuItem value={'July'}>July</MenuItem>
                <MenuItem value={'August'}>August</MenuItem>
                <MenuItem value={'September'}>September</MenuItem>
                <MenuItem value={'October'}>October</MenuItem>
                <MenuItem value={'November'}>November</MenuItem>
                <MenuItem value={'December'}>December</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='col-6'>
            <FormControl color="success" variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label-year">year</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label-year"
                id="demo-simple-select-standard-year"
                value={year}
                onChange={handleChangeYear}
                label="Year"
              >
                <MenuItem value={2030}>2030</MenuItem>
                <MenuItem value={2029}>2029</MenuItem>
                <MenuItem value={2028}>2028</MenuItem>
                <MenuItem value={2027}>2027</MenuItem>
                <MenuItem value={2026}>2026</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2015}>2015</MenuItem>
                <MenuItem value={2014}>2014</MenuItem>
                <MenuItem value={2013}>2013</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
                <MenuItem value={2009}>2009</MenuItem>
                <MenuItem value={2008}>2008</MenuItem>
                <MenuItem value={2007}>2007</MenuItem>
                <MenuItem value={2006}>2006</MenuItem>
                <MenuItem value={2005}>2005</MenuItem>
                <MenuItem value={2004}>2004</MenuItem>
                <MenuItem value={2003}>2003</MenuItem>
                <MenuItem value={2002}>2002</MenuItem>
                <MenuItem value={2001}>2001</MenuItem>
                <MenuItem value={2000}>2000</MenuItem>
                <MenuItem value={1999}>1999</MenuItem>
                <MenuItem value={1998}>1998</MenuItem>
                <MenuItem value={1997}>1997</MenuItem>
                <MenuItem value={1996}>1996</MenuItem>
                <MenuItem value={1995}>1995</MenuItem>
                <MenuItem value={1994}>1994</MenuItem>
                <MenuItem value={1993}>1993</MenuItem>
                <MenuItem value={1992}>1992</MenuItem>
                <MenuItem value={1991}>1991</MenuItem>
                <MenuItem value={1990}>1990</MenuItem>
                <MenuItem value={1989}>1989</MenuItem>
                <MenuItem value={1988}>1988</MenuItem>
                <MenuItem value={1987}>1987</MenuItem>
                <MenuItem value={1986}>1986</MenuItem>


              </Select>
            </FormControl>
          </div>
        </div>

      </div>

    </>
  )
}

export default Eduction
