import React from 'react'
import './Home.css';
import Header from '../components/Header';
import Photo from '../img/icons/photo-svgrepo-com.svg'
import video from '../img/icons/video-movie-play-svgrepo-com.svg'
import calendar from '../img/icons/calendar-1-svgrepo-com.svg'
export default function Home() {
    return (
        <>
            <div className='container-grid Home-body'>
                <Header></Header>
                <main className="main-homepage container">
                    <div className="left-main">
                        <div className="left-main-1">
                            <div className='left-main-img'>
                                <img className="banner" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg" alt='' />
                                <img className="my-picture" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg" alt='' />
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
                                <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                        <div className="middle-main-2">
                            <div className="post-about">
                                <div>
                                    <img className="middle-pic" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
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
                            <img className="post-image" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg"alt='' />
                        </div>
                  
                    </div>

                    <div className="right-main">
                        <div className="right-main-1">
                            <div>
                                <h5 className='mb-3'>Add to your feed</h5>
                            </div>
                            <div className="arz-card">
                                <div>
                                    <img className="arz" src="https://dynamic.brandcrowd.com/asset/logo/a1795eb7-9a07-4e54-acd1-796f01f22297/logo-search-grid-1x?logoTemplateVersion=1&v=638387211055600000"alt='' />
                                </div>
                                <div className="arz-info">
                                    <h6>ANZ OILFIELD SERVICES PVT. LTD.</h6>
                                    <p>Company &#183; Oil & Energy</p>
                                    <button className="follow-button"> <i className="fa fa-plus"></i> Follow </button>
                                </div>
                            </div>
                            <div className="arz-card">
                                <div>
                                    <img className="arz" src="https://dynamic.brandcrowd.com/asset/logo/a1795eb7-9a07-4e54-acd1-796f01f22297/logo-search-grid-1x?logoTemplateVersion=1&v=638387211055600000"alt='' />
                                </div>
                                <div className="arz-info">
                                    <h6>roPay</h6>
                                    <p>Company &#183; Financial Services</p>
                                    <button className="follow-button"> <i className="fa fa-plus"></i> Follow </button>
                                </div>
                            </div>
                            <div className="arz-card">
                                <div>
                                    <img className="arz" src="https://dynamic.brandcrowd.com/asset/logo/a1795eb7-9a07-4e54-acd1-796f01f22297/logo-search-grid-1x?logoTemplateVersion=1&v=638387211055600000" alt=''/>
                                </div>
                                <div className="arz-info">
                                    <h6>ARM Labs Lagos Techstars Accelerator </h6>
                                    <p>Company &#183; Venture Capital & Private</p>
                                    <button className="follow-button"> <i className="fa fa-plus"></i> Follow </button>
                                </div>
                            </div>
                            <p className='right-main-viewrecomm' >View all recommendations  <i className="fa fa-arrow-right"></i></p>
                        </div>
                        <div className="position">
                            <div className="right-main-2">
                                <div className="link-box">
                                    <img className="link" src="https://img.freepik.com/premium-vector/simple-minimal-ambigram-logo-design-premium-vector_552255-738.jpg" alt=''/>
                                    <img className="link-2" src="https://img.freepik.com/premium-vector/simple-minimal-ambigram-logo-design-premium-vector_552255-738.jpg"alt='' />
                                </div>
                                <div className='link-box-description text-center'>
                                <p>Rebecca Candidates are ready when you are</p>
                                </div>
                                <button>Promote a job post</button>
                            </div>

                            <div className="right-main-3">
                                <div className="main-homepage-footer">
                                    <p>About</p> <p>Accessibility</p> <p>Help Center</p> <p>Privacy & Terms</p> <p>Ad choices</p> <p>Advertising</p>
                                    <p>Business Services</p> <p>Get the linkedin app</p> <p>More</p> <p>About</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </>
    )
}
