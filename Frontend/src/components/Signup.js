import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(
    "Password Length Should be more than 6 Characters"
  );
  const checkPasswordLength = (passwordValue) => {
    setPassword(passwordValue.target.value.replace(/\s/g, ""));

    if (password.length > 6) {
      setPasswordCheck("Password Length Meets the required Criteria");
    } else {
      setPasswordCheck("Password Length does not meet required Criteria");
    }
  };
  const postFunction = () => {
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
      .post("http://localhost:8000/api/v1/user/signup", data, config)
      .then((response) => {
        Swal.fire(`You Have been Signed-up `);
      })
      .catch((error) => {
        Swal.fire(error.response.data.message);
      });
  };
  return (
    <div
      className="container-fluid-md d-flex justify-content-center "
      style={{
        minHeight: "100vh",
        backgroundImage: `url("https://preview.redd.it/vsav0nol2x271.jpg?width=7680&format=pjpg&auto=webp&s=c938091c59d00fc20df36da87a63bd3728331911")`,
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
          border: "1px solid black",
        }}
      >
        <h1
          className="display-2 text-decoration-underline text-center mb-5"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Sign-up Form
        </h1>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-md-4 col-form-label">
            Username
          </label>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control transparent-input"
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
              className="form-control  transparent-input"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => checkPasswordLength(e)}
            />
          </div>
          <p className="text-end text-muted">{passwordCheck}</p>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-grad mt-4 mb-4 text-center"
            onClick={() => {
              if (password.length > 6) {
                postFunction();
              } else {
                Swal.fire("Password does not meet required criteria");
              }
            }}
          >
            Sign-Up
          </button>
        </div>
      </form>
    </div>
  );
}
