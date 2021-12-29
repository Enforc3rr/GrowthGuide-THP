import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitFunction = () => {
    const data = {
      username,
      password,
    };
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post("http://localhost:8000/api/v1/user/login", data, config)
      .then((response) => {
        Swal.fire(
          `You have been logged in and jwt token = ${response.data.jwt} `
        );
      })
      .catch((error) => {
        if (error.response.data.message === "user not found") {
          Swal.fire("username does not exist");
        } else {
          Swal.fire("Password is wrong");
        }
      });
  };
  return (
    <div
      className="container-fluid-md d-flex justify-content-center "
      style={{
        minHeight: "100vh",
        backgroundImage: `url("https://i.redd.it/uahr9mecv0881.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "black",
      }}
    >
      <form
        className="shadow-lg p-3 "
        style={{
          margin: "auto",
          width: "60%",
          fontFamily: "Merriweather, serif",
        }}
      >
        <h1
          className="display-2 text-decoration-underline text-center mb-5"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Login Form
        </h1>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-md-4 col-form-label">
            Username
          </label>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-md-4 col-form-label">
            Password
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p
            className="text-end blockquote"
            style={{ color: "red", fontFamily: "sans-serif" }}
          ></p>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-grad mt-4 mb-4 text-center"
            onClick={submitFunction}
          >
            Log-In
          </button>
        </div>
      </form>
    </div>
  );
}
