import React from "react";
import { withStyles } from "@material-ui/core/styles";
import EnterEmail from "./EnterEmail";
import EnterPassword from "./EnterPassword";
import Grid from "@material-ui/core/Grid";
import "../css/Login.css";
import fundooLogo from "../images/fundooLogo.png";

const styles = (theme) => ({
  container: {
    margin: "8% 33.5% 0 33.5%",
    border: "solid 1px",
    padding: "1%",
    backgroundColor: "white",
    boxShadow: "3px 3px 5px 6px lightgray",
  },
});

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    currentInput: "email",
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
      ? this.setState({ currentInput: "password" })
      : pass.trim !== "" && this.state.currentInput === "password"
      ? "abc"
      : null;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="loginDiv">
            {/* <img src={fundooLogo} alt="FUNDOO" width="100%"/> */}
          </div>
          {this.state.currentInput === "email" ? (
            <EnterEmail
              handleChange={this.handleChange}
              handleButtonClick={this.handleButtonClick}
            />
          ) : (
            <EnterPassword
              handleChange={this.handleChange}
              email={this.state.email}
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
