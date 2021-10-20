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
    fontFamily: 'Karla, sans-serif',
    fontWeight: 800,
    backgroundImage: 'linear-gradient(90deg,#e0238c,#f22076 47.43%,#f96666)',
    backgroundSize: '100%',
    '-webkit-background-clip': 'text',
    '-moz-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-text-fill-color': 'transparent',
    wordBreak: 'break-word',
    color: '#000',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(1),
    width: "5em"
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <div className={classes.paper}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography component="h1" variant="h5" className={classes.title}>
            Concept QA Tool
          </Typography>
          <br />
          <Dragger />
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.background} />
    </Grid>
  );
}