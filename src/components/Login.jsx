import React from "react";
import { withStyles } from "@material-ui/core/styles";
import EnterEmail from "./EnterEmail";
import EnterPassword from "./EnterPassword";
import Grid from "@material-ui/core/Grid";
import { verifyEmail, loginUser } from "../service/Login";
import "../css/Login.css";
import Styles from "../css/snackbar.module.css"

const styles = (theme) => ({
  container: {
    margin: "8% 33.5% 0 33.5%",
    border: "solid 1px",
    padding: "1%",
    backgroundColor: "white",
    boxShadow: "3px 3px 5px 6px grey",
  },
});

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    currentInput: "email",
    status : "",
    isActive: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleButtonClick = () => {
    const email = this.state.email;
    const pass = this.state.password;
    return email.trim() !== "" && this.state.currentInput === "email"
      ? this.verifyEmail()
      : pass.trim !== "" && this.state.currentInput === "password"
      ? this.login()
      : null;
  };

  verifyEmail = () => {
    verifyEmail(this.state.email).then((res) => {
      res.data
        ? this.setState({ currentInput: "password" })
        : this.snackBarMessage("Enter valid mail");
    });
  };

  login = () => {
    loginUser(this.state.email, this.state.password).then((res) => {
      this.snackBarMessage("Login Successful")
    }).catch(err => {
      this.snackBarMessage("Enter valid password");
     });
  };

  snackBarMessage = async (message) => {
    await this.setState({ status : message})
    this.openSnackBar();
    // this.setState({ status : "" })
  }

  openSnackBar = () => {
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 5000);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className="loginDiv" />
            {this.state.currentInput === "email" ? (
              <EnterEmail
                handleChange={this.handleChange}
                handleButtonClick={this.handleButtonClick}
              />
            ) : (
              <EnterPassword
                handleChange={this.handleChange}
                email={this.state.email}
                handleButtonClick={this.handleButtonClick}
              />
            )}
          </Grid>
        </div>
        <div
          className={
            this.state.isActive
              ? [Styles.snackbar, Styles.show].join(" ")
              : Styles.snackbar
          }
        >
          {this.state.status}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
