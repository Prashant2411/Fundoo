import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import "../css/SignUp.css";
import regex from "../json/Regex.json";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { forgotEmail } from "../service/Login";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  container: {
    margin: "10% 20% 0 20%",
    border: "solid 1px",
    padding: "2% 5%",
    backgroundColor: "white",
    boxShadow: "3px 3px 5px 6px grey",
  },
  textField: {
    width: "100%",
    margin: "7% 0 5% 0",
  },
});

class ForgetEmail extends React.Component {
  state = {
    mobileNumber: "",
    emails: [],
    receivedEmail: false,
  };

  handleChange = async (event) =>
    await this.setState({ [event.target.name]: event.target.value });
    
  getEmailId = async () => {
    const regexMobileNumber = new RegExp("^" + regex["mobileNumber"] + "$");
    if (regexMobileNumber.test(this.state.mobileNumber)) {
      await forgotEmail(this.state.mobileNumber).then((res) => {
        this.setState({ emails: res.data });
        this.props.history.push({
          pathname: "/emails",
          state: { emails: res.data },
        });
      });
    } else {
      this.setState({ receivedEmail: true });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div className="signUpDiv" />
          <b className={classes.createAccount}>
            Enter your mobile number to know your email.
          </b>
          <Grid item xs={12} sm={6}>
            <TextField
              error={this.state.receivedEmail}
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
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="primary"
              name="currentInput"
              onClick={this.getEmailId}
            >
              KNOW YOUR EMAIL ID
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ForgetEmail));
