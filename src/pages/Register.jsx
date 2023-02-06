import React from "react";
import AddAvatar from "../assets/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Wave</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddAvatar} alt="Add an avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
