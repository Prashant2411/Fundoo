import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import "../css/SignUp.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const styles = (theme) => ({
  container: {
    margin: "8% 20% 0 20%",
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
});

class SignUp extends React.Component {
  state = {
    showPassword: false,
  };

  showPassword = () => {
    this.state.showPassword
      ? this.setState({ showPassword: false })
      : this.setState({ showPassword: true });
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
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Email ID"
                name="email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                className={classes.textField}
                name="password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                onChange={this.props.handleChange}
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
                    <InputAdornment>
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
                    </InputAdornment>
                  ),
                }}
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                className={classes.textField}
                InputProps={{
                  startAdornment: <InputAdornment>+91-</InputAdornment>,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                name="age"
                type="number"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
