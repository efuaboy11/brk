
import Layout from "@/components/layout/Layout";
import Account from "@/components/sections/home1/Account";
import Work from "@/components/sections/home1/Work";
import Choose from "@/components/sections/home3/Choose";
import Image from "next/image";
import Link from "next/link";

export default function Accounts_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Accounts" breadcrumbTitleTwo="Trading">
                <section className="account-style1 account-style1--style1">
                    <div className="container">
                        <div className="account-style1__top">
                            <div className="sec-title sec-title1">
                                <div className="sub-title">
                                    <h4>Account Types</h4>
                                </div>
                                <h2>Explore Our Account Options</h2>
                            </div>
                            <div className="right-box">
                                <ul>
                                    <li>
                                        <div className="img">
                                            <Image src="/assets/images/resources/account-v1-top1.jpg" alt="Image" width={60} height={60} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-call"></i>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text">
                                    <p><span>Not Sure?</span><br />Guide You to the Right Choice!</p>
                                </div>
                            </div>
                        </div>
                       <Account/>
                    </div>
                </section>
                
                <section className="account-style2 account-style2--style1">
                    <div className="account-style2--style1__bgleft"></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Account Types</h4>
                            </div>
                            <h2>Explore Our Account Options</h2>
                        </div>
                        <div className="row">
                            
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>Standard a/c</h3>
                                    <p>Ideal for traders with low spreads.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$100</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-2"><span className="path1"></span><span className="path2"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link target="_blank" href="https://portal.veloxarion.com" className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>Commission a/c</h3>
                                    <p>Access to the interbank market.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$500</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-3"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link target="_blank" href="https://portal.veloxarion.com"className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>STP Pro a/c</h3>
                                    <p>Ideal for high-net-worth individuals.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$10k</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-4"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link target="_blank" href="https://portal.veloxarion.com"className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </section>
                <Work/>
                <Choose/>
            </Layout>
        </div>
    )
}
