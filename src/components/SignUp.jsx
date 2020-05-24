import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import "../css/SignUp.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import regex from "../json/Regex.json";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/ErrorOutlineSharp";
import { isEmailAvailable, registerUser } from "../service/SignUp";

const styles = (theme) => ({
  container: {
    margin: "4% 20% 0 20%",
    border: "solid 1px",
    padding: "2% 5%",
    backgroundColor: "white",
    boxShadow: "3px 3px 5px 6px grey",
  },
  createAccount: {
    margin: 0,
    padding: "1% 0 0 0.5%",
    fontFamily: "'Google Sans',arial,sans-serif",
    fontSize: "140%",
  },
  textField: {
    width: "100%",
  },
  doneIcon: {
    color: "green",
  },
  notDoneIcon: {
    color: "red",
  },
});

class SignUp extends React.Component {
  state = {
    showPassword: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    mobileNumber: "",
    age: "",
    errorField: [],
    emailValid: "",
  };

  showPassword = () => {
    this.state.showPassword
      ? this.setState({ showPassword: false })
      : this.setState({ showPassword: true });
  };

  handleChange = async (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkEmailAvailablitiy = async (event) => {
    const e = event.target;
    const emailRegex = new RegExp("^" + regex.email + "$");
    if (emailRegex.test(e.value)) {
      await isEmailAvailable(e.value).then((res) => {
        console.log("<----------> " + res.data);
        res.data
          ? this.setState({ emailValid: "YES", email: e.value })
          : this.setState({
              emailValid: "NO",
              email: e.value,
              status: "Account already exist",
            });
      });
    }
  };

  signup = () => {
    registerUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.mobileNumber,
      this.state.age
    ).then(res => {
    }).catch(err => {
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.signup}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div className="signUpDiv" />
          <b className={classes.createAccount}>Create your Fundoo Account</b>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                type="text"
                className={classes.textField}
                name="firstName"
                margin="normal"
                inputProps={{
                  pattern: regex.firstName,
                  title: "Alphabets Only",
                }}
                required
                onChange={this.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={this.state.lastNameE}
                label="Last Name"
                type="text"
                name="lastName"
                className={classes.textField}
                InputProps={{
                  inputProps: {
                    pattern: regex.lastName,
                    title: "Alphabets Only",
                  },
                }}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                error={this.state.emailE}
                label="Email ID"
                name="email"
                className={classes.textField}
                margin="normal"
                inputProps={{
                  pattern: regex.email,
                  title: "Enter email in format example@example.com",
                }}
                InputProps={{
                  endAdornment: (
                    <React.Fragment>
                      {this.state.emailValid === "YES" ? (
                        <DoneIcon className={classes.doneIcon} />
                      ) : this.state.emailValid === "NO" ? (
                        <ClearIcon className={classes.notDoneIcon} />
                      ) : null}
                    </React.Fragment>
                  ),
                }}
                variant="outlined"
                onChange={this.checkEmailAvailablitiy}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                className={classes.textField}
                name="password"
                type={this.state.showPassword ? "text" : "password"}
                InputProps={{
                  inputProps: {
                    pattern: regex.password,
                    title:
                      "Must Contain 1 capital and small letter, 1 digit and 1 special character and length between 6 to 15 ",
                  },
                }}
                variant="outlined"
                margin="normal"
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                className={classes.textField}
                name="cPassword"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      className={classes.iconButton}
                      onClick={this.showPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  ),
                  inputProps: {
                    pattern: this.state.password,
                    title: "Passwords does not match",
                  },
                }}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number"
                name="mobileNumber"
                onChange={this.handleChange}
                className={classes.textField}
                InputProps={{
                  startAdornment: <InputAdornment>+91-</InputAdornment>,
                }}
                inputProps={{
                  pattern: regex.mobileNumber,
                  title: "Enter valid phone number",
                }}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={this.state.ageE}
                label="Age"
                name="age"
                type="number"
                className={classes.textField}
                InputProps={{
                  inputProps: {
                    max: 150,
                    min: 1,
                  },
                }}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                required
              />
            </Grid>
          </Grid>
          {this.state.emailValid === "YES" ? (
            <Button
              variant="contained"
              color="primary"
              name="currentInput"
              type="submit"
              className={classes.button}
            >
              SIGN IN
            </Button>
          ) : null}
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
