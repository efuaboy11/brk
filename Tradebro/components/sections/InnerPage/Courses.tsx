'use client'
import { useState } from "react";
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";


export default function Courses() {

    // tab
    const [activeTab, setActiveTab] = useState("beginners");

  return (
    <>
        <section className="courses-offered-style1">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h4>Courses Offered</h4>
                    </div>
                    <h2>Discover the Courses We Offer</h2>
                </div>
                <div className="courses-offered-style1__inner">
                    <div className="courses-offered-style1__tab">

                        <div className="courses-offered-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "beginners" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("beginners")}>
                                    <h3>Beginners</h3>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "advanced" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("advanced")}>
                                    <h3>Advanced</h3>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">
                            {activeTab === "beginners" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="beginners">
                                <div className="courses-offered-style1-tab-content-box-item">

                                    <div className="tab-single-courses-offered-style1">
                                        <div className="row">
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-1.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/xHU5MHuUSKI?si=IYXMKSEJcouTtdRd?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Strategies for Successful Day Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>21 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-2.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/wIyZcY6kNuo?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Mastering the Basics of Forex Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p> 31Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-3.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/_YVQN6_nkfs?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Navigating Forex Trading for Beginners</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p> 2h 26 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-4.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/rJj4ZbnzEGs?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to use trading view</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>25 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-5.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                
                                                                <VideoModal src="https://www.youtube.com/embed/s5Od090D2iw?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to read and understand a forex chart</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>6 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-6.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                
                                                                <VideoModal src="https://www.youtube.com/embed/0qoGdWKEWaM?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to use Meta 5</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>19 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "advanced" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="beginners">
                                <div className="courses-offered-style1-tab-content-box-item">

                                    <div className="tab-single-courses-offered-style1">
                                        <div className="row">
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-1.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/xHU5MHuUSKI?si=IYXMKSEJcouTtdRd?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Strategies for Successful Day Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>21 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-2.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/wIyZcY6kNuo?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Mastering the Basics of Forex Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p> 31Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-3.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/_YVQN6_nkfs?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Navigating Forex Trading for Beginners</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p> 2h 26 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-4.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                <VideoModal src="https://www.youtube.com/embed/rJj4ZbnzEGs?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to use trading view</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>25 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-5.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                
                                                                <VideoModal src="https://www.youtube.com/embed/s5Od090D2iw?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to read and understand a forex chart</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>6 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-6.png" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon">
                                                                
                                                                <VideoModal src="https://www.youtube.com/embed/0qoGdWKEWaM?autoplay=1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">How to use Meta 5</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>19 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}