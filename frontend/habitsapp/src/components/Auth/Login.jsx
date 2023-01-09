import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";

const Login = () => {
  let navigate = useNavigate();
  const { flag, setFlag } = useContext(AppContext);
  console.log(flag);
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });
  const [userDetail, setUserDetail] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1337/api/auth/local", loginData)
      .then((res) => {
        console.log(res.data);
        const { jwt, user } = res.data;
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("user", JSON.stringify(user));
        setUserDetail((userDetail) => ({ ...userDetail, ...user }));
        setFlag(true);
        navigate("/");
      })

      .catch(() => {
        alert("Error!");
      });
  };
  return (
    <div>
      <form className="form container mt-5 bg-info p-5 rounded">
        <div className="mb-3">
          <h3 className="text-light">LOGIN PAGE</h3>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => {
              setLoginData({ ...loginData, identifier: e.target.value });
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
