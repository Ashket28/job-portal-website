import React from 'react';
import './LastStep.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function LastStep() {
  const [engLevel, setengLevel] = React.useState('');

  const handleChangeengLevel = (event) => {
    setengLevel(event.target.value);
  };


  return (
    <>
      <div className="last-step-body ">
        <div className='laststep-header mt-5'>
          <h4> Language</h4>
        </div>
        <div className='laststep-description'>
          <p>Add Languages you know to increase your chances of getting hired </p>
        </div>

        <FormControl>
        <h5 className='mt-4'>What is your English level?</h5>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={engLevel}
            onChange={handleChangeengLevel}
          >
            <FormControlLabel value="No english" control={<Radio />} label="No English" />
            <span className='language-option-description '></span>
            <FormControlLabel value="Basic" control={<Radio />} label="Basic" />
            <span className='language-option-description'><p>You can understand/speck basic sentences</p></span>
            <FormControlLabel value="Intermediate" control={<Radio />} label="Intermediate" />
            <span className='language-option-description'><p>You can ave a conversation in English on some topic</p></span>
            <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
            <span className='language-option-description' ><p>You can do your entire job in English and speck fluently</p></span>

          </RadioGroup>
        </FormControl>
      </div>
    </>
  )
}

