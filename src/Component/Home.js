import React from "react";
import logo from "../Asset/logo.png";
import "../App.css";
import vision from "../Asset/vision.jpg";
import delivery from "../Asset/delivery.png";
import doing from "../Asset/doing.png";
const Home = () => {
  return (
    <>
      <section className="p-4">
        <div className="row">
          <div className="col col-xl-3 col-md-12 col-sm-12 col-12 ">
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" className="logo"></img>
            </div>
          </div>
          <div className="col col-xl-9 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="banner-text mt-4">
              GLASwomen – Green Loans Africa/Asia Start-ups Women
            </h1>
            <h2 className="text-center banner-subtext">
              ‘No matter how small, no matter where’
            </h2>
            <p className="text-center banner-para">
              GLASW is dedicated to offer their expertise to women-led start-ups
              getting the necessary finances via our green loan initiatives
              programme offerred by our partnered financial institutions
              globally
            </p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="row">
          <div className=" col col-xl-6 p-4 m-4">
            <h1 className="vision-title">Our vision</h1>
            <p className="mt-3 vision-para">
              Our vision is to create a customer-centric platform for Women’s
              Sustainability start-ups in undeveloped countries in Africa and
              Asia.
            </p>
            <p className="vision-para mt-3">
              The platform should enable newly formed and first-year start-ups
              to find affordable and supportive lenders in the space of Green
              Loan opportunities.
            </p>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={vision}
                alt="vision"
                className="mt-4 vision-image"
                style={{ width: window.screen.width < 700 && "90vw" }}
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="section-bg">
          <div className="row">
            <div className=" col col-xl-6 p-4 m-4">
              <div className="d-flex justify-content-center align-item-center">
                <img
                  src={delivery}
                  alt="delivery"
                  className="delivery-image "
                  style={{ width: window.screen.width < 700 && "70vw" }}
                ></img>
              </div>
            </div>
            <div className="col col-xl-4 col-sm-12 pt-4">
              <div className="d-flex justify-content-center align-items-center flex-column mt-4">
                <h1 className="delivery-title">What are we delivering?</h1>
                <p className="mt-2 delivery-para text-center">
                  We deliver value to start-ups by encouraging, supporting, and
                  mentoring women in their business ventures. We deliver
                  valuable information, on how to start, how to grow and whom to
                  ask for a financial support
                </p>
                <p className="delivery-para text-center mt-2">
                  We deliver a unique network of likeminded business women
                  prepared to take on the challenges of change in the world of
                  sustainability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="d-flex justify-content-center align-item-center">
          <h1 className="purpose-title">How we are doing this ?</h1>
        </div>
        <div className="row">
          <div className="col col-xl-6">
            <div className="d-flex justify-content-center align-items-center">
              <img src={doing} alt="doing" className="doing-image "></img>
            </div>
          </div>
          <div className="col col-xl-6">
            <div className="d-flex justify-content-center align-item-center mt-4">
              <p className=" purpose-para text-center mt-4">
                We designed the business models for Women's start-ups in
                Sustainability We create a user-friendly platform informing and
                comparing start-up Green Loan options We provide Agile
                training/coaching to the companies
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
