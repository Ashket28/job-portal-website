import React, { useEffect, useState } from 'react'
import './Job.css';
import Header from '../Layout/Header';
import { CiSearch, CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
// import { FaEnvelopeOpenText } from "react-icons/fa";
// import { FaRocket } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";



export default function Job() {
    // const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const now = new Date();
    // const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    // const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    // const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    //convert date to string
    // const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    // const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    // const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

    // ---------------------- Fetching jobs data from json file
    useEffect(() => {
        setIsLoading(true);
        try {
            axios.get("http://localhost:4000/api/v1/job/getallJobs", {
                withCredentials: true,
            })
                .then((res) => {
                    setJobs(res.data);
                    console.log(res);
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },[]);

    // const [query, setQuery] = useState("");
    // const handleInputChange = (event) => {
    //     setQuery(event.target.value);
    //}
    //------------------------filtered by search title
    // const jobdata = JSON.stringify(jobs.jobs).toString();
    // console.log("kunal data"  + jobdata);
    // const filteredItems = jobdata.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // //-------------------------radio filtering ----------------------
    // const radioChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // }

    // //-------------------------Button based filtering ----------------------
    // const buttonBasedChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // }

    // //--------------------main Fuction ---------------------
    // const filteredData = (jobdata, selected, query) => {
    //     let filteredJobs = jobdata;
    //     if (query) {
    //         filteredJobs = filteredItems;
    //     }
    //     //category filtered
    //     if (selected) {
    //         filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType,
    //             employmentType, postingDate }) => (
    //             jobLocation.toLowerCase() === selected.toLowerCase() ||
    //             parseInt(maxPrice) <= parseInt(selected) ||
    //             salaryType.toLowerCase() === selected.toLowerCase() ||
    //             employmentType.toLowerCase() === selected.toLowerCase() ||
    //             postingDate >= selected
    //         ));
    //         console.log(filteredJobs);
    //     }
    //     return filteredJobs

    // }
    // const result = filteredData(jobdata, selectedCategory, query);

    return (
        <>
            <div className='job-body'>
                <Header></Header>

                {/* <div className='container'>
                    <div className='search-banner'>
                        <div className='search-banner-heading'>
                            <h1>Find your <span style={{ color: "rgb(4, 241, 55)" }}>new job</span> today</h1>
                            <p style={{ color: "rgb(159 159 159)" }}>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
                        </div>

                        <form>
                            <div className='row'>
                                <div className='col-6 pe-0'>
                                    <div className='job-search-bar'>
                                        <CiSearch className='job-search-bar-icon'></CiSearch>
                                        <input className='job-search-bar-input' style={{ borderRadius: '5px 0px 0px 5px' }}
                                            value={query} onChange={handleInputChange} type="text" name='title' id='title' placeholder='What position are you looking for ?' />
                                    </div>
                                </div>
                                <div className='col-4 p-0'>
                                    <div className='job-search-bar'>
                                        <CiLocationOn className='job-search-bar-icon'></CiLocationOn>
                                        <input className='job-search-bar-input' type="text" name='title' id='title' placeholder='Loction' />
                                    </div>
                                </div>
                                <div className='col-2 p-0'>
                                    <button type='submit' className='job-search-bar-btn' style={{ borderRadius: '0px 5px 5px 0px' }}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}

                <div className='container-grid' style={{ backgroundColor: '#faf9f6' }}>
                    <main className="fitered-jobs-section container">
                        {/* <div className="left-fitered">
                            <div className="left-fitered-1">
                                <div className='fitered-body p-3'>
                                    <h5>Filters</h5>
                                    <div className='filter-location mt-4'>
                                        <h6 style={{ color: "grey" }}>Location</h6>
                                        <div>
                                            <input type="radio" name='test' id='all' value="" onChange={radioChange} selected />
                                            <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                            <input type="radio" name='test' id='london' value="london" onChange={radioChange} />
                                            <label htmlFor="london" className='ms-3 mb-2'>London</label><br />
                                            <input type="radio" name='test' id='seattle' value="seattle" onChange={radioChange} />
                                            <label htmlFor="seattle" className='ms-3 mb-2'>Seattle</label><br />
                                            <input type="radio" name='test' id='madrid' value="madrid" onChange={radioChange} />
                                            <label htmlFor="madrid" className='ms-3 mb-2'>Madrid</label><br />
                                            <input type="radio" name='test' id='boston' value="boston" onChange={radioChange} />
                                            <label htmlFor="boston" className='ms-3 mb-2'>Boston</label><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position">
                                <div className="left-fitered-1">
                                    <div className='fitered-body p-3'>
                                        <div className='filter-salary'>
                                            <h6 style={{ color: "grey" }}>Salary</h6>
                                            <div className='mt-3 mb-4'>
                                                <button value="" onClick={buttonBasedChange} className='filter-salary-btn'>Hourly</button>
                                                <button value="Monthly" onClick={buttonBasedChange} className='filter-salary-btn'>Monthly</button>
                                                <button value="Yearly" onClick={buttonBasedChange} className='filter-salary-btn'>Yearly</button>
                                            </div>
                                            <div>
                                                <input type="radio" name='test2' id='all' value="" onChange={radioChange} selected />
                                                <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                                <input type="radio" name='test2' id='30' value="30" onChange={radioChange} />
                                                <label htmlFor="30" className='ms-3 mb-2'> 	&lt; 30000k </label><br />
                                                <input type="radio" name='test2' id='50' value="50" onChange={radioChange} />
                                                <label htmlFor="50" className='ms-3 mb-2'>&lt; 50000k</label><br />
                                                <input type="radio" name='test2' id='80' value="80" onChange={radioChange} />
                                                <label htmlFor="80" className='ms-3 mb-2'>&lt; 80000k</label><br />
                                                <input type="radio" name='test2' id='100' value="100" onChange={radioChange} />
                                                <label htmlFor="100" className='ms-3 mb-2'>&lt; 100000k</label><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-fitered-1">
                                    <div className='fitered-body p-3'>
                                        <div className='filter-Date-of-posting'>
                                            <h6 style={{ color: "grey" }}>Date of posting</h6>
                                            <div className='mt-3'>
                                                <input type="radio" name='test3' id='all' value="" onChange={radioChange} selected />
                                                <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                                <input type="radio" name='test3' id='24hours' value={twentyFourHoursAgoDate} onChange={radioChange} />
                                                <label htmlFor="24hours" className='ms-3 mb-2'>Last 24 hours</label><br />
                                                <input type="radio" name='test3' id='7days' value={sevenDaysAgoDate} onChange={radioChange} />
                                                <label htmlFor="7days" className='ms-3 mb-2'>Last 7 days</label><br />
                                                <input type="radio" name='test3' id='30days' value={thirtyDaysAgoDate} onChange={radioChange} />
                                                <label htmlFor="30days" className='ms-3 mb-2'>Last Month</label><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="middle-jobs">
                            {/* {isLoading ? (<p> Londing...... </p>) : result.length > 0
                                ?*/}<>
                                    <h5>{jobs.length} Jobs</h5>
                                    {jobs.jobs && jobs.jobs.map((element) => {
                                        return (
                                            <div key={element._id} className="middle-jobs-card">
                                                <Link to="/" className='jobs-card-body'>
                                                    <img className='companyLogo' src={element.companyLogo} alt="" />
                                                    <div className='company-info ms-3'>
                                                        <h6>{element.companyName}</h6>
                                                        <h5>{element.jobTitle}</h5>
                                                        <div className='company-details d-flex flex-wrap gap-2 mb-2'>
                                                            <span className='company-details-tags gap-1'><CiLocationOn /> {element.country}</span>
                                                            <span className='company-details-tags gap-1'><MdAccessTime /> {element.city}</span>
                                                            <span className='company-details-tags gap-1'><MdCurrencyRupee /> {element.salaryFrom}-{element.salaryTo}k</span>
                                                            <span className='company-details-tags gap-1'><CiCalendarDate /> {element.jobPostedOn}</span>
                                                        </div>
                                                        <p className='company-description'>{element.description}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </>
                            {/* //     : <>
                            //         <h5>{result.length} Jobs</h5>
                            //         <p>No data found!</p>
                            //     </>
                            // } */}

                        </div>


                    </main>
                </div>
            </div>
        </>
    )
}
