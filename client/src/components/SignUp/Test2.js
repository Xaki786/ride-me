import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signUp } from "../redux/actions";
import CustomTextField from "./CustomTextField";
import RadioButtons from "./RadioButtons";
import {
  Avatar,
  Link,
  Button,
  Grid,
  CssBaseline,
  Typography,
  Container,
  makeStyles
} from "@material-ui/core";
import { LockOpenOutlined as LockOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ handleSubmit, signUp, history }) => {
  const classes = useStyles();
  console.log("history", history);
  const onSubmit = values => {
    const newUser = {
      address: values.address,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      userType: values.userType || "customer",
      name: `${values.firstName} ${values.lastName}`
    };
    signUp(newUser);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                name="firstName"
                autoComplete="fname"
                id="firstName"
                label="First Name"
                type="text"
                autoFocus={true}
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="lastName"
                autoComplete="lname"
                id="lastName"
                label="Last Name"
                type="text"
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="address"
                label="Address"
                id="address"
                autoComplete="current-address"
                type="textarea"
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
                autoComplete="current-phoneNumber"
                type="text"
                component={CustomTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={RadioButtons}
                id="userType"
                name="userType"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default compose(
  connect(
    null,
    { signUp }
  ),
  reduxForm({
    form: "signUpForm"
  })
)(SignUp);
