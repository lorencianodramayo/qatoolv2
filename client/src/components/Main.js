import React from 'react';
import Dragger from '../global/Dragger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import background from '../background.svg';
import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      fontFamily: 'Karla, sans-serif',
    }
  },
  root: {
    height: '100vh',
  },
  title: {
    color: "#29125f",
    fontFamily: "Karla, sans-serif",
    fontWeight: 800,
    fontSize: "2rem",
    marginBottom: "1em"
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "flex-end"
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    margin: theme.spacing(1),
    width: "14em",
    marginRight: "8em"
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Concept QA Tool
          </Typography>
          <br />
          <Dragger />
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.background}>
        <img src={logo} alt="logo" className={classes.logo} />
      </Grid>
    </Grid>
  );
}