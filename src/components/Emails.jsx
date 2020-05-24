import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  container: {
    margin: "7% 20% 0 20%",
    border: "solid 1px",
    padding: "2% 5%",
    backgroundColor: "white",
    boxShadow: "3px 3px 5px 6px grey",
  },
  emailList: {
    margin: 0,
    padding: "1% 0 0 1%",
    marginBottom: "3%",
    fontFamily: "'Google Sans',arial,sans-serif",
    fontSize: "140%",
  },
  emails: {
    padding: "1%",
    borderBottom: "1px solid grey",
    marginBottom: "3%",
    width: "60%",
  },
});

class EmailsList extends React.Component {
  state = {
    emails: [],
  };

  async UNSAFE_componentWillMount() {
    await this.setState({ emails : this.props.history.location.state.emails})    
  }

  login = () => {
    this.props.history.push({
      pathname: "/"
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <div className="signUpDiv" />
          <b className={classes.emailList}>
            EmailID/IDs associated with your account
          </b>
          {this.state.emails.map((val, index) => {
            return (
              <div className={classes.emails}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <AccountCircleIcon />
                  <div>
                    <i>{val}</i>
                  </div>
                </Grid>
              </div>
            );
          })}
          <Button
              variant="contained"
              color="primary"
              onClick={this.login}
            >
              LOG IN
            </Button>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EmailsList);
