import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../services/auth-thunks";
import "./style.css"

function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [isVerified, setIsVerified] = useState(false); // New state for Verified Account checkbox
 const [email, setEmail] = useState(""); // New state for email address
 const [error, setError] = useState(null); // New state for error message
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleRegister = async () => {
    try {
      if (isVerified && !email) {
        alert("You can't register a verified account unless you enter the email address.");
        return;
      }
      
      setError(null); // Clear any previous error
        const user = await dispatch(registrationThunk({ username, password, firstName, lastName, }));
        if (user.error) {
            alert("The username is used. Please enter a new one.")
        } else {
            navigate("/reviewer/login");
        }
    } catch (e) {
        alert(e);
    }
  };

 return ( 
  //  <div>
  //  <h2>CREATE AN ACCOUNT</h2>
   
  //  <div className="mt-2">
  //   <label>Username</label>
  //   <input className="form-control" type="text" value={username}
  //    onChange={(event) => setUsername(event.target.value)}/>
  //  </div>
   
  //  <div className="mt-2">
  //   <label>First Name</label>
  //   <input className="form-control" type="text" value={firstName}
  //    onChange={(event) => setFirstName(event.target.value)}/>
  //  </div>

  //  <div className="mt-2">
  //   <label>Last Name</label>
  //   <input className="form-control" type="text" value={lastName}
  //    onChange={(event) => setLastName(event.target.value)}/>
  //  </div>

  //  <div className="mt-2">
  //    <label>Password</label>
  //    <input className="form-control" type="password" value={password}
  //      onChange={(event) => setPassword(event.target.value)}/>
  //  </div>

  //  <button className="btn btn-primary mt-2" onClick={handleRegister}>
  //    Register
  //  </button>
  // </div>

  <div className="register-container">
  <h2 className="register-title">CREATE AN ACCOUNT</h2>

  <div className="register-input-group">
    <label className="register-label">Username</label>
    <input
      className="register-input form-control"
      type="text"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  </div>

  <div className="register-input-group">
    <label className="register-label">First Name</label>
    <input
      className="register-input form-control"
      type="text"
      value={firstName}
      onChange={(event) => setFirstName(event.target.value)}
    />
  </div>

  <div className="register-input-group">
    <label className="register-label">Last Name</label>
    <input
      className="register-input form-control"
      type="text"
      value={lastName}
      onChange={(event) => setLastName(event.target.value)}
    />
  </div>

  <div className="register-input-group">
    <label className="register-label">Password</label>
    <input
      className="register-input form-control"
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </div>


  <div className="register-input-group">
    <label className="register-label">
      <input
        type="checkbox"
        checked={isVerified}
        onChange={(event) => setIsVerified(event.target.checked)}
      />
      <span className="checkbox-label-text">I want to register as a Verified user</span>
    </label>
    {isVerified && (
      <input
        className="register-input form-control"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    )}
  </div>

  <button className="register-button btn btn-primary mt-2" onClick={handleRegister}>
    Register
  </button>
</div>

 );
}

export default RegisterScreen;