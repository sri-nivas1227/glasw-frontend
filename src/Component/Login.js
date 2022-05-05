import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import setCookie from "../cookies/setCookie";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [signUpPass, setSignUpPass] = useState("");
  const [signUpConfirmPass, setSignUpConfirmPass] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <section className="p-4">
        <div className="row d-flex justify-content-around align-item-center pl-2">
          <div className="col col-xl-6 sign-page p-4">
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
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setSignUpEmail(e.target.value)}
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setSignUpPass(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setSignUpConfirmPass(e.target.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button
                  className="btn btn-primary sign-up"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      name.length > 2 &&
                      phone.length > 5 &&
                      signUpPass.length > 3 &&
                      signUpConfirmPass.length > 3 &&
                      signUpEmail.length > 5
                    ) {
                      if (signUpPass == signUpConfirmPass) {
                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({
                          name: name,
                          email: signUpEmail,
                          phone: phone,
                          password: signUpConfirmPass,
                        });

                        var requestOptions = {
                          method: "POST",
                          headers: myHeaders,
                          body: raw,
                          redirect: "follow",
                        };

                        fetch(
                          "http://localhost:3000/api/v1/signup",
                          requestOptions
                        )
                          .then((response) => response.json())
                          .then((result) => {
                            if (result.status == "success") {
                              setCookie("token", result.data.token, 7);
                              window.location = "/";
                            } else alert(result.message);
                          })
                          .catch((error) => console.log("error", error));
                      } else alert("Passwords do not match!");
                    } else alert("Please fill up all the details!");
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="col col-xl-6 login-page p-3">
            <form>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setLoginPass(e.target.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button
                  className="btn btn-primary sign-up"
                  onClick={(e) => {
                    e.preventDefault();
                    if (loginEmail.length > 5 && loginPass.length > 3) {
                      var myHeaders = new Headers();
                      myHeaders.append("Content-Type", "application/json");

                      var raw = JSON.stringify({
                        email: loginEmail,
                        password: loginPass,
                      });

                      var requestOptions = {
                        method: "POST",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow",
                      };

                      fetch(
                        "http://localhost:3000/api/v1/signin",
                        requestOptions
                      )
                        .then((response) => response.json())
                        .then((result) => {
                          if (result.status == "success") {
                            setCookie("token", result.token, 7);
                            window.location = "/";
                          } else alert(result.message);
                        })
                        .catch((error) => console.log("error", error));
                    }
                  }}
                >
                  Login
                </button>
              </div>
              {/* <a href="#" className="text-center forgot-link">
                Forgout Password ?
              </a> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
