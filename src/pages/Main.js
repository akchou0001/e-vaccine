import React from "react";
import "./Main.css";
import CallIcon from "@material-ui/icons/Call";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 160,
    borderRadius: 160,
    width: 170,
    zIndex: 99,
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className="main">
      <div className="main_header">
        <h1>CoWIN Is Helping Countries Worldwide To Run Vaccination Drives</h1>
        <h3>
          Launching CoWIN as an open source platform for countries to
          orchestrate successful vaccination with efficient monitoring with an
          aim of achieving universal vaccination
        </h3>
      </div>
      <div className="helpline">
        <p>
          <CallIcon />
          helpline
        </p>
        <div className="numbers">
          <p>Number</p>
          <span>91-11-23978046</span>
        </div>
        <div className="numbers">
          <p>Health Ministry</p>
          <span>1075</span>
        </div>
        <div className="numbers">
          <p>Child</p>
          <span>1098</span>
        </div>
        <div className="numbers">
          <p>Mental Health</p>
          <span>08046110007</span>
        </div>
      </div>
      <div className="how">
        <p>How To Get Your Vaccination</p>
        <div className="card-center">
          {/* 01 */}
          <Card className="card">
            <div className="card-img-top">
              <CardMedia
                className={classes.media}
                image="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/vaccination-thumb-1.jpg?alt=media&token=a45ebb27-1fb9-4400-9542-f9f25fe86d31"
                title="vaccination-thumb-1"
              />
            </div>
            <div className="card-body">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="card-title"
                >
                  Book An Appointment On CoWIN or Walk Into Any Vaccination
                  Center <br />
                  <br />
                </Typography>
              </CardContent>
              <CardActions className="card-text">
                <Button
                  size="medium"
                  color="primary"
                  href="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/User_Guide_Citizen%20registration_18%2B.pdf?alt=media&token=daec80e0-d61b-429e-be4d-c167cc308a30"
                  target="_blank"
                >
                  HOW TO BOOK YOUR APPOINTMENT ON COWIN
                </Button>
              </CardActions>
            </div>
          </Card>
          {/* 02 */}
          <Card className="card">
            <div className="card-img-top">
              <CardMedia
                className={classes.media}
                image="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/vaccination-thumb-2.jpg?alt=media&token=a84947cf-fe07-40c5-98e1-1eadfe765a46"
                title="vaccination-thumb-2"
              />
            </div>
            <div className="card-body">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="card-title"
                >
                  Get Your Vaccination Safely at the Time of Your Appointment{" "}
                  <br />
                  <br />
                </Typography>
              </CardContent>
              <CardActions className="card-text">
                <Button
                  size="medium"
                  color="primary"
                  href="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/Dos_and_Donts_for_Citizens.pdf?alt=media&token=5239122a-32d5-4e8d-8624-603ae0c926db"
                  target="_blank"
                >
                  DOS AND DONT'S FOR GETTING VACCINATED
                </Button>
              </CardActions>
            </div>
          </Card>
          {/* 03 */}
          <Card className="card">
            <div className="card-img-top">
              <CardMedia
                className={classes.media}
                image="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/vaccination-thumb-3.jpg?alt=media&token=f9d845d1-1194-451d-a24b-375db360164e"
                title="vaccination-thumb-3"
              />
            </div>
            <div className="card-body">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="card-title"
                >
                  Download Your Vaccination Certificate from CoWIN and Wait for
                  Dose #2
                </Typography>
              </CardContent>
              <CardActions className="card-text">
                <Button
                  size="medium"
                  color="primary"
                  href="https://selfregistration.cowin.gov.in/vaccination-certificate"
                  target="_blank"
                >
                  DOWNLOAD YOUR VACCINE CERTIFICATE
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Main;
