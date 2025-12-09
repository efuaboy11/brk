'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Statement() {

    // tab
    const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
        <section className="statement-style1">
            <div className="container">
                <div className="statement-style1__inner">
                    <div className="statement-style1__tab">

                        <div className="statement-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "mission" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("mission")}>
                                    <h3>Mission Statement</h3>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "vision" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("vision")}>
                                    <h3>Vision Statement</h3>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "value" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("value")}>
                                    <h3>Our Value</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">

                            {activeTab === "mission" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="mission">
                                <div className="statement-style1-tab-content-box-item">

                                    <div className="single-statement-style1">
                                        <div className="single-statement-style1__pattern"
                                            style={{ backgroundImage: "url(/assets/images/pattern/statement-v1-pattern.jpg)" }}>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h6>Statements</h6>
                                                        <h2>Our Mission</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>To empower traders worldwide with transparent, secure, and efficient access to global financial markets.</p>
                                                    </div>
                                                    <ul className="list-item">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Support traders with education and expert guidance</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>officiis debitis aut rerum.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Foster trust through security, transparency, and integrity</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__img">
                                                    <Image src="/assets/images/resources/mission.JPG" alt="Image" width={470} height={345} priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}
                            
                            {activeTab === "vision" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="vision">
                                <div className="statement-style1-tab-content-box-item">
                                    <div className="single-statement-style1">
                                        <div className="single-statement-style1__pattern"
                                            style={{ backgroundImage: "url(/assets/images/pattern/statement-v1-pattern.jpg)" }}>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h6>Statements</h6>
                                                        <h2>Vision Statement</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>To be the leading global brokerage that empowers every trader to achieve financial growth with confidence and ease.</p>
                                                    </div>
                                                    <ul className="list-item">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Expand access to global financial markets</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Innovate with advanced trading technology</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Inspire traders through education and insights</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__img">
                                                    <Image src="/assets/images/resources/vision.JPG" alt="Image" width={470} height={345} priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "value" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="value">
                                <div className="statement-style1-tab-content-box-item">
                                    <div className="single-statement-style1">
                                        <div className="single-statement-style1__pattern"
                                            style={{ backgroundImage: "url(/assets/images/pattern/statement-v1-pattern.jpg)" }}>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h6>Statements</h6>
                                                        <h2>Our Value</h2>
                                                    </div>
                                                    
                                                    <ul className="list-item">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Integrity: Operate with honesty, transparency, and fairness in all we do</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Innovation: Continuously enhance technology, tools, and trading solution.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-3"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <div className="text1">
                                                                <p>Client Success: Prioritize trader growth, support, and satisfaction.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-statement-style1__img">
                                                    <Image src="/assets/images/resources/values.JPG" alt="Image" width={470} height={345} priority />
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