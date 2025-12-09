'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Accordion from "@/components/sections/InnerPage/Accordion";


export default function Faq_Page() {

    // tab
    const [activeTab, setActiveTab] = useState("account");

    const faqItems = [
    {
        id: 1,
        question: "How can I start trading Forex?",
        answer:
        "To begin trading Forex, you need to create an account with our platform, verify your identity, and fund your trading account. Once approved, you can access the trading platform, choose your preferred currency pairs, and start placing trades. We also recommend reviewing our educational materials before trading."
    },
    {
        id: 2,
        question: "How much money do I need to start?",
        answer:
        "You can start trading with a relatively small amount, depending on the account type you choose. Our minimum deposit requirement is designed to make Forex accessible for beginners, but you should always trade with an amount you are comfortable risking."
    },
    {
        id: 3,
        question: "What is margin?",
        answer:
        "Margin is the amount of capital required to open and maintain a trading position. It acts as a security deposit and allows you to control larger positions with a smaller amount of money. Trading on margin increases both potential profits and potential losses."
    },
    {
        id: 4,
        question: "Can I lose more than I invest in Forex?",
        answer:
        "Yes, it is possible to lose more than your initial investment when trading leveraged products. However, we offer risk-management tools such as stop-loss orders to help reduce exposure. Always trade responsibly and be aware of the risks involved."
    },
    {
        id: 5,
        question: "Can I have multiple accounts?",
        answer:
        "Yes, you can open multiple trading accounts depending on your preferences or trading strategies. Many traders choose to separate different strategies or asset types into different accounts for better organization."
    },
    {
        id: 6,
        question: "What is leverage in trading?",
        answer:
        "Leverage allows you to control larger trading positions with a smaller amount of capital. For example, with 1:100 leverage, you can control a $10,000 position with just $100. While leverage can amplify profits, it also increases the risk of larger losses."
    },
    {
        id: 7,
        question: "How do I download the trading platform?",
        answer:
        "You can download our trading platform directly from your dashboard after registering. Choose the version compatible with your device—Windows, macOS, iOS, or Android. Follow the installation instructions and log in using your account credentials."
    },
    {
        id: 8,
        question: "Is my trading account secure?",
        answer:
        "Yes. We use industry-standard security measures, including encryption, secure servers, and two-factor authentication, to protect your personal information and funds. We continuously monitor our systems to ensure a safe trading environment."
    }
    ];

    const companyfaqItems = [
    {
        id: 1,
        question: "What services does your company provide?",
        answer:
        "We offer a range of financial services including Forex and CFD trading, market analysis tools, secure account management, and dedicated customer support to help traders navigate global markets."
    },
    {
        id: 2,
        question: "Where is your company located?",
        answer:
        "Our headquarters are located in a globally recognized financial hub, and we operate remotely to support clients from multiple regions. Full contact details can be found on our official website."
    },
    {
        id: 3,
        question: "How can I contact your support team?",
        answer:
        "You can reach our support team through live chat, email, or phone. Support hours vary by region, but we aim to respond to all inquiries as quickly as possible."
    },
    {
        id: 4,
        question: "Is your company regulated?",
        answer:
        "We operate in accordance with international financial standards and comply with regulatory requirements depending on the jurisdictions we serve. For full regulatory details, please visit our compliance section."
    },
    {
        id: 5,
        question: "How does your company protect client information?",
        answer:
        "We use advanced encryption, secure servers, and strict data protection procedures to ensure that all client information remains confidential and protected from unauthorized access."
    },
    {
        id: 6,
        question: "What makes your company different from other brokers?",
        answer:
        "We combine advanced technology, transparent pricing, fast execution, and personalized support to create a seamless trading experience. Our services are built to support both beginners and experienced traders."
    },
    {
        id: 7,
        question: "Do you offer educational resources?",
        answer:
        "Yes. We provide educational materials such as trading guides, webinars, tutorials, and market insights to help clients develop their skills and make informed trading decisions."
    },
    {
        id: 8,
        question: "How can I stay updated with company news?",
        answer:
        "You can stay informed through our website’s news section, email updates, and official social media channels. We regularly share announcements, platform updates, and market insights."
    }
    ];
    const forexfaqItems = [
    {
        id: 1,
        question: "What is the Forex market?",
        answer:
        "The Forex market is a global marketplace where currencies are traded. It operates 24 hours a day, five days a week, and is the largest and most liquid financial market in the world."
    },
    {
        id: 2,
        question: "What determines currency prices?",
        answer:
        "Currency prices are influenced by economic indicators, interest rates, political stability, market sentiment, and global supply and demand. Traders analyze these factors to anticipate price movements."
    },
    {
        id: 3,
        question: "What are currency pairs?",
        answer:
        "A currency pair represents the value of one currency relative to another. For example, EUR/USD shows how many U.S. dollars one euro is worth. Currency pairs are classified as major, minor, and exotic."
    },
    {
        id: 4,
        question: "What is a pip in Forex?",
        answer:
        "A pip (percentage in point) is the smallest price movement a currency pair can typically make. It helps traders measure price changes and calculate profits or losses."
    },
    {
        id: 5,
        question: "What is a lot size?",
        answer:
        "A lot size refers to the volume of a trade. Standard lots represent 100,000 units of a currency, mini lots represent 10,000 units, and micro lots represent 1,000 units. Choosing the right lot size helps manage risk."
    },
    {
        id: 6,
        question: "What is a spread in Forex trading?",
        answer:
        "The spread is the difference between the bid price and the ask price of a currency pair. It represents the cost of opening a trade. Lower spreads generally mean lower trading costs."
    },
    {
        id: 7,
        question: "What is fundamental analysis?",
        answer:
        "Fundamental analysis involves evaluating economic data, news events, and market conditions to predict currency movements. Traders look at indicators like GDP, employment data, and interest rate decisions."
    },
    {
        id: 8,
        question: "What is technical analysis?",
        answer:
        "Technical analysis focuses on price charts, patterns, and indicators to forecast future market movements. It helps traders identify trends, entry points, and potential reversals."
    }
    ];

    const tradingfaqItems = [
    {
        id: 1,
        question: "What is online trading?",
        answer:
        "Online trading involves buying and selling financial instruments through an internet-based platform. It allows you to trade assets such as currencies, stocks, indices, commodities, and crypto from your computer or mobile device."
    },
    {
        id: 2,
        question: "What trading platforms do you support?",
        answer:
        "We support advanced trading platforms designed for both beginners and experienced traders. These platforms include charting tools, indicators, fast execution, and mobile compatibility for trading on the go."
    },
    {
        id: 3,
        question: "What is the best time to trade?",
        answer:
        "The ideal time to trade depends on the asset you’re trading. For example, Forex markets are most active during overlapping sessions, while commodities and indices follow specific market hours. Higher activity often means better volatility and liquidity."
    },
    {
        id: 4,
        question: "What is a trading strategy?",
        answer:
        "A trading strategy is a set of rules or guidelines a trader follows to make decisions. Strategies can be based on technical analysis, fundamental analysis, market trends, or risk-management techniques."
    },
    {
        id: 5,
        question: "What is a stop-loss order?",
        answer:
        "A stop-loss order is a risk-management tool that automatically closes your trade when the market reaches a specific level. It helps limit potential losses and protect your account balance."
    },
    {
        id: 6,
        question: "What affects the price of an asset?",
        answer:
        "Asset prices are influenced by supply and demand, economic data, company performance, global events, and investor sentiment. Traders analyze these factors to anticipate potential price movements."
    },
    {
        id: 7,
        question: "What is risk management in trading?",
        answer:
        "Risk management involves techniques used to protect your capital, such as using stop-loss orders, choosing appropriate lot sizes, diversifying your trades, and avoiding over-leverage."
    },
    {
        id: 8,
        question: "Do I need experience to start trading?",
        answer:
        "While experience is helpful, you can start trading as a beginner by using educational resources, demo accounts, and step-by-step guidance. We recommend learning the basics before trading with real money."
    }
    ];

    const withdrawfaqItems = [
    {
        id: 1,
        question: "How do I request a withdrawal?",
        answer:
        "To request a withdrawal, log in to your account, go to the 'Withdrawal' section, choose your preferred payment method, enter the amount, and submit the request. You will receive a confirmation once it has been processed."
    },
    {
        id: 2,
        question: "How long do withdrawals take?",
        answer:
        "Withdrawal processing times depend on the selected payment method. E-wallets are typically processed within a few hours, while bank transfers and card withdrawals may take 1–5 business days depending on the bank or region."
    },
    {
        id: 3,
        question: "Are there any withdrawal fees?",
        answer:
        "Withdrawal fees vary by payment method. Some methods may be free while others may have small processing charges. You can view the full fee structure in your account’s payment section."
    },
    {
        id: 4,
        question: "Can I withdraw funds to a different account?",
        answer:
        "For security reasons, withdrawals must be made using the same payment method and account used for deposits. This ensures compliance with anti-fraud and financial regulations."
    },
    {
        id: 5,
        question: "Why was my withdrawal request declined?",
        answer:
        "A withdrawal may be declined due to incomplete verification, insufficient funds, mismatched payment details, or unmet bonus requirements. Please check your account notifications or contact support for assistance."
    },
    {
        id: 6,
        question: "Do I need to verify my account before withdrawing?",
        answer:
        "Yes. All clients must complete identity verification before withdrawing funds. This process ensures the security of your account and complies with global financial regulations."
    },
    {
        id: 7,
        question: "What currencies can I withdraw in?",
        answer:
        "Withdrawals are typically processed in the same currency used to fund your account. Available withdrawal currencies may vary depending on your region and payment provider."
    },
    {
        id: 8,
        question: "Is there a minimum withdrawal amount?",
        answer:
        "Yes, each payment method has its own minimum withdrawal limit. You can view the exact minimum amounts in the withdrawal section of your account."
    }
    ];






    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq&apos;s" breadcrumbTitleTwo="About">
                <section className="faq-style2">
                    <div className="container">

                        <div className="faq-style2__inner">
                            <div className="faq-style2__tab">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4">
                                        <div className="faq-style2__tab-btn">
                                            <ul className="tabs-button-box clearfix">
                                                <li className={`tab-btn-item ${activeTab === "account" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("account")}>
                                                    <h3>Account</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "company" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("company")}>
                                                    <h3>Company</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                
                                                <li className={`tab-btn-item ${activeTab === "forex" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("forex")}>
                                                    <h3>Forex</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "trading" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("trading")}>
                                                    <h3>Trading</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "withdrawals" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("withdrawals")}>
                                                    <h3>Withdrawals</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-8">
                                        <div className="tabs-content-box">
                                            {activeTab === "account" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="account">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "company" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="company">
                                                <Accordion items={companyfaqItems} />
                                            </div>
                                            )}


                                            {activeTab === "forex" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="forex">
                                                <Accordion items={forexfaqItems} />
                                            </div>
                                            )}

                                            {activeTab === "trading" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="trading">
                                                <Accordion items={tradingfaqItems} />
                                            </div>
                                            )}

                                            {activeTab === "withdrawals" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="withdrawals">
                                                <Accordion items={withdrawfaqItems} />
                                            </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
