import React from 'react'
import './Experience.css';
function Experience() {
  return (
    <>
      <div className='experience-body'>
      <div className='experience-data mx-1 mt-5'>
          <h5>Year of Experience</h5>
        </div>
        <div className='option-experience'>
          <input type="radio" className="btn-check" name="experience-options" id="experience-option1" />
          <label className="btn btn-outline-success" htmlFor="experience-option1">Fresher</label>
          <input type="radio" className="btn-check" name="experience-options" id="experience-option2" />
          <label className="btn  btn-outline-success" htmlFor="experience-option2">1-6 Months</label>
          <input type="radio" className="btn-check" name="experience-options" id="experience-option3" />
          <label className="btn btn-outline-success" htmlFor="experience-option3">1-2 Years</label>
          <input type="radio" className="btn-check" name="experience-options" id="experience-option4" />
          <label className="btn btn-outline-success" htmlFor="experience-option4">2-5 Years</label>
          <input type="radio" className="btn-check" name="experience-options" id="experience-option5" />
          <label className="btn btn-outline-success" htmlFor="experience-option5">5+ Years </label>
        </div>
      </div>
    </>
  )
}

export default Experience
