'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import {  faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

export default function Plan() {

    const [investmentPlanLoader, setInvestmentPlanLoader] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      // load dummy data
      setInvestmentPlanLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);



    const formatName = (name: string) => {
        return name
          .split(" ") // Split the name by spaces
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
          .join(" "); // Join the words back together
    };

    function roundUp(value:number) {
        return Math.ceil(value);
    }

    const formatCurrency = (amount:string) => {
        return parseFloat(amount).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    };


    type InvestmentPlan = {
        id: number;
        plan_name: string;
        time_rate: string;
        percentage_return: number;
        duration: number;
        duration_span: string;
        min_amount: string;
        max_amount: string;
    }
    const InvestmentPlanData: InvestmentPlan[] = [
        {
            id: 1,
            plan_name: "starter plan",
            time_rate: "daily",
            percentage_return: 5,
            duration: 7,
            duration_span: "days",
            min_amount: '100',
            max_amount: '999',
        },
        {
            id: 2,
            plan_name: "silver plan",
            time_rate: "weekly",
            percentage_return: 12,
            duration: 4,
            duration_span: "weeks",
            min_amount: '1000',
            max_amount: '4999',
        },
        {
            id: 3,
            plan_name: "gold plan",
            time_rate: "monthly",
            percentage_return: 30,
            duration: 3,
            duration_span: "months",
            min_amount: '5000',
            max_amount: '10000',
        },
    ]
  return (
    <>
    <section  className="site-section-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="text-center">
                    <p className="h1 pt-5 font-weight-700 pb-3 text-black">Trading Subscriptions</p>
                    <p className="light-text-2">### **"Achieve Your Financial Goals with Tailored Investment Plans"**  
                    Explore our range of expertly designed investment plans, crafted to suit every financial goal and risk preference. Whether you're just starting your investment journey or looking to grow your portfolio, our flexible options, competitive returns, and professional guidance ensure your success every step of the way.</p>
                  </div>
                </div>
              </div>



              {InvestmentPlanData.length > 0 ? (
                  <div className="row g-3 pt-5 mt-3">
                    {InvestmentPlanData.map((data) => (
                      <div key={data.id} className="col-xl-4  col-lg-6">
                        <div className='home-investment-plan-boxes pt-5'>
                          <div className="">
                            <div className='p-4'>
                              <div className="text-center">
                                <h1 className="site-primary-text home-investment-plan-sub-headers">{formatName(data.plan_name)}</h1>
                                <h3 className="home-investment-plan-dark-text">{formatName(data.time_rate)} {roundUp(data.percentage_return)}% for {data.duration} {formatName(data.duration_span)}</h3>
                              </div>

                              
                              
                            </div>
                            <hr />
                            <div className="p-3 mx-4">
                              <div className="row g-2 justify-content-between">
                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Min Amount</p>
                                  </div>

                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>

                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatCurrency(data.min_amount)} USD</p>
                                  </div>
                                </div>


                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Max Amount</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatCurrency(data.max_amount)} USD</p>
                                  </div>
                                </div>


                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Plan Type</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">{formatName(data.time_rate)}</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-start">
                                    <p className="home-investment-plan-dark-text font-weight-700">Capital Incl.</p>
                                  </div>
                                </div>

                                <div className="col-2">
                                  <div className="d-flex justify-content-center">
                                    <p>-</p>
                                  </div>
                                </div>

                                <div className="col-5">
                                  <div className="d-flex justify-content-end">
                                    <p className="font-weight-500">Yes</p>
                                  </div>
                                </div>



                                
                              </div>

                              <div className='pt-4 pb-2 my-5'>

                                <Link href={`'/register'}`} className="site-btn width-100 text-center">Start Trading Now</Link>
                              </div>
                            </div>


                          </div>
                        </div>

                      </div>
                    ))} 
                  </div>

                ) : (
                  <div className=' mt-4'>
                    {investmentPlanLoader ? (
                      <div className="d-flex justify-content-center py-5 my-5">
                        {/* <img src={spin} alt="" width='60px'/> */}
                      </div>  
                    ) : (
                      <div className="row justify-content-center py-5">
                        <div className="col-11 col-md-6">
                          <div className='text-center'>
                            <div className="d-inline-block border-radius-50 red-background p-3 mb-4">
                              <FontAwesomeIcon className='xl-text' icon={faTriangleExclamation}/>   
                            </div>                 
                            <h2>No Avaliable Plan </h2>
                            <p className='light-text sm-text'>There is no plan avaliable at the moment. Thanks for choosing sitename</p>
                          </div>
                        </div>
                      </div>
                    )}
      
                    
                  </div>
              )}

              <div className="d-flex justify-content-center pt-5">
                <Link href='/our-packages/' className="site-inverse-btn px-5">View All</Link>
              </div>
            </div>

          </section> 
    </>
  )
}