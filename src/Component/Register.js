import React, { useState } from "react";
import "../App.css";
import login from "../Asset/login.jpg";
const Register = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <section className="p-4">
      <div className="row container-bg">
        <div className="col col xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src={login} className="login-image" alt="login"></img>
        </div>
        <div className="col col xl-6 col-lg-6 col-md-12 col-sm-12 mt-3">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text-arear" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    name.length > 2 &&
                    signUpEmail.length > 5 &&
                    phone.length > 5 &&
                    msg.length > 0
                  ) {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                      name: name,
                      email: signUpEmail,
                      phone: phone,
                      message: msg,
                    });

                    var requestOptions = {
                      method: "POST",
                      headers: myHeaders,
                      body: raw,
                      redirect: "follow",
                    };

                    fetch(
                      "http://localhost:3000/api/v1/addForm",
                      requestOptions
                    )
                      .then((response) => response.json())
                      .then((result) => {
                        if (result.status == "success") {
                          alert("Thank you!");
                          window.location.reload();
                        }
                      })
                      .catch((error) => console.log("error", error));
                  } else alert("Please fill up the details!");
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
