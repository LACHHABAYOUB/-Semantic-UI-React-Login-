import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import users from "./components/users";


export const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/allusers" component={users} />
  </div>
);
