import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";


export default function History_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our History" breadcrumbTitleTwo="About">
                <section className="history-style1">
                    <div className="container">
                        <i className="border-line1"></i>
                        <ul className="history-style1__inner">


                            <li className="single-history-style1">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img1.JPG" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2000</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>Early Stage</h6>
                                        <h3><Link href="#">The Establishment</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>In its early days, our company was founded with a clear vision: to make trading accessible, transparent, and reliable.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            
                            
                            <li className="single-history-style1 instyle2">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/chart.JPG" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2004</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>First Award</h6>
                                        <h3><Link href="#">Transparent Fx Broker</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Our commitment to transparency, integrity, and client-focused service was recognized early on when we received our first industry award.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            

                            <li className="single-history-style1">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img3.JPG" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2010</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>New Headquarter</h6>
                                        <h3><Link href="#">Moved headquarters to USA</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>As our company grew, we established a new headquarters in the USA to strengthen our global presence and better serve our international clients. This strategic move allowed us to expand our operations, enhance regulatory compliance, and provide faster, more reliable support to traders worldwide, marking a significant milestone in our journey toward becoming a leading global brokerage.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            

                            <li className="single-history-style1 instyle2">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img2.JPG" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2012</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>Milestone</h6>
                                        <h3><Link href="#">1m Traders Trusted Us</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Reaching one million registered traders was a landmark achievement that reflects the trust and confidence our clients place in us. This milestone highlights our dedication to providing reliable trading platforms, transparent conditions, and exceptional support, reinforcing our reputation as a broker committed to helping traders succeed worldwide.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
