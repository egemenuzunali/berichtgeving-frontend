import React from "react";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Footer from "../components/Footer";
import gemeenteAmsterdamLogo from "../assets/gemeenteAmsterdam.png";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: "6rem",
    height: "100%"
  },
  appBarStyle: {
    boxShadow: "none"
  },
  qrLogo: {
    backgroundImage: `url(${gemeenteAmsterdamLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "55px auto",
    display: "inline-block",
    height: "50px",
    width: "55px"
  }
}));

const PageLayOut = ({ children, location: { pathname } }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar elevation={0}>
          <Link to="/" className="no-decoration">
            <div className={classes.gemeenteAmsterdamLogo} />
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" className={classes.mainContainer}>
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(PageLayOut);
