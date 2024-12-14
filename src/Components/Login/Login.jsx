import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import { assets } from "../../Assets/assets";

const Login = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate(); // Initialize the hook

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (currState === "Signup") {
      const existingUser = users.find((user) => user.email === formData.email);
      if (existingUser) {
        alert("User already exists! Please login.");
      } else {
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! Please log in.");
        setCurrState("Login");
      }
    } else if (currState === "Login") {
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login Success")
        setShowlogin(false)
        navigate("/"); // Navigate to the home page
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="login-popup">
      <form
        className="login-popup-container"
        onSubmit={handleFormSubmit}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Signup" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">
          {currState === "Signup" ? "Create account" : "Login " }
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Signup")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
