import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  console.log("running");
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(signUpData);
    await axios
      .post("http://localhost:1337/api/auth/local/register", signUpData)
      .then((res) => {
        alert("you have sucessfully registerd");
        navigate("/login");
      })
      .catch(() => {
        alert("some thing is really wrong !!");
      });
  };

  return (
    <form className="container mt-5 bg-info p-5 ">
      <h3 className="text-light">SIGNUP PAGE</h3>

      <div className="mb-3 ">
        <label htmlFor="exampleInputUserName" className="form-label text-light">
          User Name
        </label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => {
            setSignUpData({ ...signUpData, username: e.target.value });
          }}
          id="exampleInputUserName"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="text-light form-label">
          Email address
        </label>
        <input
          type="email"
          onChange={(e) => {
            setSignUpData({ ...signUpData, email: e.target.value });
          }}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text text-light">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label text-light"
        >
          Password
        </label>
        <input
          onChange={(e) => {
            setSignUpData({ ...signUpData, password: e.target.value });
          }}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSignUp}
        >
          Submit
        </button>
        <Link to="/login">Already Having Account Click Here</Link>
      </div>
    </form>
  );
};

export default SignUp;
