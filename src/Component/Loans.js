import React from "react";
import "../App.css";
import biz2credit from "../Asset/biz2credit.webp";
import fundera from "../Asset/fundera.webp";
import fundit from "../Asset/fundit.webp";
import fora from "../Asset/fora.webp";
import ufg from "../Asset/ufg.webp";
const Loans = () => {
  return (
    <>
      <section className="p-4 loanscreen-bg">
        <div className="m-4 p-4">
          <h1 className="loan-title">top business loans</h1>
          <h1 className="loan-month">April 2022</h1>
          <p className="loan-desc">
            Business loans are a great way to get the funding your business
            needs to thrive. Discover the top funding solutions for your
            business that offer low rates, ideal repayment terms, and fast
            approval.
          </p>
        </div>
      </section>
      <section className="filter-section">
        <div className="m-4 p-4">
          <div className="row">
            <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <h1 className="filter-heading pt-3">filter by</h1>
            </div>
            <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12 mt-2">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="filter-credit">credit score</h1>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Show All
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Excelent credit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Good Credit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fair credit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-3 col-sm-4 col-12  mt-2">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="filter-credit">Loang range</h1>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Show All
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Less than $5000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $5000-50,000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $50,000-50,0000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12  mt-2">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="filter-credit">Monthly Revenue</h1>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Show All
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Less than $10,000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $10,000-20,000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        More than 20,000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-4 section-border">
          <div className="row ">
            <div className="col">
              <img src={biz2credit} alt="image" className="company-image"></img>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center">
                <h1 className="loan-rating ">9.9</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <h1 className="loan-features">Time in business: 12+ months</h1>
                <h1 className="loan-features">$10K in monthly revenue</h1>
                <h1 className="loan-features">Minimum credit score: 580</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center"></div>
              <h1 className="loan-amount">$10,000 - $6,000,000</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-4 section-border">
          <div className="row ">
            <div className="col">
              <img src={fundera} alt="image" className="company-image"></img>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center">
                <h1 className="loan-rating ">9.0</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <h1 className="loan-features">Time in business: 6+ months</h1>
                <h1 className="loan-features">$8K in monthly revenue</h1>
                <h1 className="loan-features">Minimum credit score: none</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center"></div>
              <h1 className="loan-amount">$5,000 - $20,000,000</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-4 section-border">
          <div className="row ">
            <div className="col">
              <img src={fundit} alt="image" className="company-image"></img>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center">
                <h1 className="loan-rating ">9.7</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <h1 className="loan-features">Time in business: 12+ months</h1>
                <h1 className="loan-features">$20K in monthly revenue</h1>
                <h1 className="loan-features">Minimum credit score: 620</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center"></div>
              <h1 className="loan-amount">$20,000 - $1,000,000</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-4 section-border">
          <div className="row ">
            <div className="col">
              <img src={fora} alt="image" className="company-image"></img>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center">
                <h1 className="loan-rating ">9.2</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <h1 className="loan-features">Time in business: 12+ months</h1>
                <h1 className="loan-features">$15K in monthly revenue</h1>
                <h1 className="loan-features">Minimum credit score: 500</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center"></div>
              <h1 className="loan-amount">$5,000 - $750,000</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-4 section-border">
          <div className="row ">
            <div className="col">
              <img src={ufg} alt="image" className="company-image"></img>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center">
                <h1 className="loan-rating ">9.0</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <h1 className="loan-features">Time in business: 6+ months</h1>
                <h1 className="loan-features">$10K in monthly revenue</h1>
                <h1 className="loan-features">Minimum credit score: 600</h1>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center"></div>
              <h1 className="loan-amount">$10,000 - $5,000,000</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center align-item-center flex-column">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Loans;
