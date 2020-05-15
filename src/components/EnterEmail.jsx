import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "../css/EnterEmail.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    paddingLeft: "5%",
  },
  signin: {
    marginTop: 0,
    paddingTop: 0,
  },
  email: {
    border: "grey 1px solid",
    width: "70%",
    maxWidth: "100%",
    margin: 0,
    height: "23px",
    padding: "0% 1% 0% 1%",
    marginTop: 0,
    borderRadius: "16px",
  },
  user: {
    margin: "0 1% 1% 0",
    padding: "0 0 1% 0",
  },
  title: {
    padding: "0 0 1% 0",
    fontSize: "100%",
    overflow: "visible",
    margin: "0 0 1% 0",
  },
});

class EmailTextField extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h3 className={classes.signin}>Sign in</h3>
        <TextField
          label="Email"
          className={classes.textField}
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={this.props.handleChange}
        />
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
            <b>Forget email?</b>
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            color="primary"
            className={classes.forgetEmail}
            gutterBottom
          >
            <b onClick={this.props.createAccount} className="createAccount">Create Account</b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            name="currentInput"
            className={classes.button}
            onClick={this.props.handleButtonClick}
          >
            NEXT
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(EmailTextField);
