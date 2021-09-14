import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { login } from "../features/userSlice";
import { useHistory } from "react-router-dom";
const sha256 = require("sha256");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        E - Vaccination
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [mobile, setmobile] = useState("");
  const [txnId, settxnId] = useState("");
  const [token, settoken] = useState("");
  const [otp, setotp] = useState("");
  const dispatch = useDispatch();

  const sendOtp = (e) => {
    e.preventDefault();

    async function gettxnId() {
      await axios
        .post(
          "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
          { mobile: mobile },
          {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
          }
        )
        .then(function (response) {
          settxnId(response.data.txnId);
          console.log(JSON.stringify(response.data.txnId));
        })
        .catch(function (error) {
          console.log("ERROR........", error);
        });
    }
    gettxnId();
  };

  const validateOtp = (e) => {
    e.preventDefault();
    const otphash = sha256(otp);
    console.log("otp hash.......", otphash);
    console.log("txn ID......", txnId);
    async function getToken() {
      await axios
        .post(
          "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
          {
            otp: otphash,
            txnId: txnId,
          },
          {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
          }
        )
        .then((response) => {
          dispatch(
            login({
              token: response.data.token,
              mobile: mobile,
            })
          );
          const token = response.data.token;
          settoken(token);
          console.log(response.data.token);
        })
        .then(history.push("/"))
        .catch(function (error) {
          console.log("error..............", error);
        });
      console.log(token);
    }
    getToken();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/e-vaccine-b2814.appspot.com/o/covid19logo.jpg?alt=media&token=dac28cb3-5679-4323-b98a-8636fa38e3e9"
          alt="CoWIN Logo"
        />
      </div>
      {txnId ? (
        <>
          {" "}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Validate OTP
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="otp"
                label="OTP"
                name="otp"
                autoComplete="otp"
                autoFocus
                value={otp}
                onChange={(e) => setotp(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={validateOtp}
              >
                Sign In
              </Button>
            </form>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Mobile Authentication
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={sendOtp}
              >
                Send OTP
              </Button>
            </form>
          </div>
        </>
      )}

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
