import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();


const handleLogin = async () => {
  try {
    const action = await dispatch(loginThunk({username, password}));
    if (action.error) {
      alert("The username or the password is not right, please try again.");
    } else {
      navigate("/home");
    }

  } catch (e) {
    alert(e);
  }
};


 return ( 
  //  <div>
  //  <h1>Login Screen</h1>
  //  <div className="mt-2">
  //   <label>Username</label>
  //   <input className="form-control" type="text" value={username}
  //    onChange={(event) => setUsername(event.target.value)}/>
  //  </div>
  //  <div className="mt-2">
  //    <label>Password</label>
  //    <input className="form-control" type="password" value={password}
  //      onChange={(event) => setPassword(event.target.value)}/>
  //  </div>
  //  <button className="btn btn-primary mt-2" onClick={handleLogin}>
  //    Login
  //  </button>
  // </div>
  <div className="login-container">
  <h1 className="login-title">Login</h1>
  <div className="login-input-group">
    <label className="login-label">Username</label>
    <input
      className="login-input form-control"
      type="text"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  </div>
  <div className="login-input-group">
    <label className="login-label">Password</label>
    <input
      className="login-input form-control"
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </div>
  <button className="login-button btn btn-primary mt-2" onClick={handleLogin}>
    Login
  </button>
</div>

 );
}
export default LoginScreen;