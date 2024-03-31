import React from 'react'
import './Home.css';
import Header from '../Layout/Header';
import Photo from '../../img/icons/photo-svgrepo-com.svg'
import video from '../../img/icons/video-movie-play-svgrepo-com.svg'
import calendar from '../../img/icons/calendar-1-svgrepo-com.svg'
export default function Home() {
    return (
        <>
            <div className='container-grid Home-body'>
                <Header></Header>
                <main className="main-homepage container">
                    <div className="left-main">
                        <div className="left-main-1">
                            <div className='left-main-img'>
                                <img className="banner" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                                <img className="my-picture" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                            </div>
                            <div className="about">
                                <h5>Rebecca Adedire</h5>
                                <p>Mental Health Tech. Attract,<br /> Motivate, Retain. Show your <br /> workforce you care</p>
                            </div>
                            <div className="analytics">
                                <h5>Analytics & tool</h5>
                                <p>43 posts impressions</p>
                            </div>
                            <div className="my-item">
                                <p>My items</p>
                            </div>
                        </div>
                        <div className="left-main-2">
                            <div className="page">
                                <img className="mildstrings" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                                <h5>Mildstrings</h5>
                                <div className="page-notification">
                                    <p>Page Notification</p>
                                    <p style={{ color: 'blue' }}>1</p>
                                </div>
                                <div className="page-notification">
                                    <p>Page Visitors</p>
                                    <p style={{ color: 'blue' }}>2</p>
                                </div>
                            </div>
                            <p>See Visitor Analytics</p>
                        </div>
                        <div className="left-main-3">
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt=''/>
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt=''/>
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <h6>Groups</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Finance Club.</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Future Trend</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar}alt='' />
                                <p className="events-p" >Project Manager Commun..</p>
                            </div>
                            <p className="same">Show More <i className="fa fa-angle-down" ></i></p>
                            <h6>Events</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar}alt='' />
                                <p className="events-p" >Sexual Health Education</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt=''/>
                                <p className="events-p" >How to Find Your Spouse Att..</p>
                            </div>
                            <p className="same">See all</p>
                            <h6>Followed Hashtags</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar}alt='' />
                                <p className="events-p" >Startup</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar}alt='' />
                                <p className="events-p" >Funding</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt=''/>
                                <p className="events-p" >Healthcare</p>
                            </div>
                            <p className="same">Show More <i className="fa fa-angle-down" ></i></p>

                            <div className="discover">
                                Discover More
                            </div>
                        </div>
                    </div>

                    <div className="middle-main">
                        <div className="middle-main-1">
                            <div className="post-1">
                                <img className="middle-pic" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"alt='' />
                                <input className="post" type="text" placeholder="Start a post" />
                            </div>
                            <div className="linked-input">
                                <div className="input">
                                    <img className="upload" src={Photo} alt=''/>
                                    <p>Photo</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={video} alt=''/>
                                    <p>Video</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={Photo}alt='' />
                                    <p>Photo</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={Photo} alt=''/>
                                    <p>Photo</p>
                                </div>
                            </div>
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"alt='' />
                                </div>
                                <div className='post-about-detailes'>
                                    <p className="name">Rebecca Adedire</p>
                                    <p className="name-about">Mental Health Tech, Attract Motivate</p>
                                    <p className="name-about">6h &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Expedita, vel fuga. Ipsam repellat quaerat itaque cum error
                                    optio sapiente dolores dolore repudiandae praesentium. Atque,
                                    saepe commodi accusantium voluptates quae magnam!</p>
                            </div>
                            <img className="post-image" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"alt='' />
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
