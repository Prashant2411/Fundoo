import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "90%",
  },
  button: {
    marginTop: "5%",
  },
  forgetEmail: {
    paddingLeft: "2%",
  },
  signin: {
    margin: 0,
    padding: 0,
  },
  email: {
    border: "grey 1px solid",
    width: "max-content",
    minWidth: "50%",
    margin: 0,
    height: "23px",
    padding: 0,
    margin: 0,
    borderRadius: "16px",
  },
  title: {
    padding: "0 0 0 0",
    fontSize: "93%",
    margin: "0 0 0 0",
  },
  iconButton: {
    padding: 0,
  },
});

class PasswordTextFields extends React.Component {
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
      <React.Fragment>
        <h3 className={classes.signin}>WELCOME</h3>
        <div className={classes.email}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
          >
            <text className={classes.title}>
              <AccountCircleIcon/> {this.props.email}
            </text>
          </Grid>
        </div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <TextField
            label="Password"
            className={classes.textField}
            name="password"
            type={this.state.showPassword ? "text" : "password"}
            variant="outlined"
            margin="normal"
            onChange={this.props.handleChange}
          />
          <InputAdornment
            position="end"
            style={{ marginTop: "-18%", marginLeft: "80%" }}
          >
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
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            color="primary"
            className={classes.forgetEmail}
            gutterBottom
          >
            <b>Forget password?</b>
          </Typography>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            name="currentInput"
            className={classes.button}
            onClick={this.props.handleButtonClick}
          >
            LOG IN
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PasswordTextFields);
