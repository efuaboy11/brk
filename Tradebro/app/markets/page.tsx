import Marquee from "@/components/elements/Marquee";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Markets_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Markets" breadcrumbTitleTwo="Markets">
                <section className="market-style1">
                    <div className="container">
                        <div className="sec-title withtext text-center">
                            <div className="sub-title">
                                <h4>Markets</h4>
                            </div>
                            <h2>Wide Range of Markets</h2>
                            <div className="text">
                                <p>
                                    Discover the most competitive prices in the market, updated <br />regularly for your
                                    advantage.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/market-v1-1.JPG" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets1-trade-forex">Trade Forex</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-currency-exchange"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span>
                                                </span>
                                            </div>
                                            <p>Forex trading, also known as foreign exchange trading, involves buying...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets1-trade-forex">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>01.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/market-v1-2.JPG" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets2-stock-market">Stock Indices</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-pie-chart"><span className="path1"></span><span
                                                        className="path2"></span>
                                                </span>
                                            </div>
                                            <p>Stock indices represent the performance of major financial markets...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets2-stock-market">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>02.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/market-v1-3.JPG" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets3-commodities-market">Commodities Market</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-gold"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span>
                                                </span>
                                            </div>
                                            <p>
                                                Commodities are the foundation of global trade, representing essential goods...
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets3-commodities-market">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>03.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/instruments-v1-4.jpg" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets4-crypto-market">Crypto Market</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-gold"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span>
                                                </span>
                                            </div>
                                            <p>
                                                Our Bitcoin Spreads let you trade the price of Bitcoin...
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets4-crypto-market">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>04.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/market-v1-4.JPG" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets5-futures-market">Marijuna</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-currency-exchange"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span>
                                                </span>
                                            </div>
                                            <p>Marijuana s the world's most commonly cultivated, trafficked...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets5-futures-market">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>05.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-market-style1">
                                    <div className="img-box img-box3">
                                        <Image src="/assets/images/resources/market-v1-5.JPG" alt="Image" width={200} height={200} priority />
                                    </div>
                                    <div className="content-box">
                                        <div className="shape"
                                            style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link href="/markets6-options-market">Crude Oil</Link>
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <div className="icon">
                                                <span className="icon-pie-chart"><span className="path1"></span><span
                                                        className="path2"></span>
                                                </span>
                                            </div>
                                            <p>Crude oil has long been regarded as one of the most valuable commodities...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="/markets6-options-market">
                                                <span className="txt">Read More</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="count-box">
                                            <h2>06.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="slogan-style2 slogan-style2--style2">
                    <div className="container">
                        <div className="slogan-style2__content text-center">
                            <div className="slogan-style2__bg"
                                style={{ backgroundImage: "url(/assets/images/backgrounds/slogan-v2-bg-1.png)" }}>
                            </div>
                            <div className="slogan-style2__big-title">
                                <Marquee speed={30} direction="left" pauseOnHover className="slogan-style2-scrolling-text">
                                    <ul className="list marquee_mode-rightToLeft">
                                        <li className="item">Tradebro</li>
                                    </ul>
                                </Marquee>
                            </div>
                            <div className="title-box">
                                <h2>All-In-One Trading Solution</h2>
                                <p>
                                    Discover the most competitive prices in the market, updated <br />regularly for your
                                    advantage.
                                </p>
                            </div>
                            <div className="btn-box">
                                <Link className="btn-one" href="/accounts">
                                    <span className="txt">Start Trading</span>
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
