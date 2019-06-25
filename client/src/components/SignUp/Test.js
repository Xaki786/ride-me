import React from "react";
import { connect } from "react-redux";
import { signUp } from "../redux/actions";
const Test = ({ signUp }) => {
  signUp({
    email: "owner1@gmail.com",
    password: "123",
    name: "Muhammad Zakria Jan",
    address: "House No E-29, HIT Taxila Cantt",
    userType: "customer",
    phoneNumber: "03139987417",
    licenseNumber: "123456"
  });
  return <div>Hello from Test</div>;
};

export default connect(
  null,
  { signUp }
)(Test);
