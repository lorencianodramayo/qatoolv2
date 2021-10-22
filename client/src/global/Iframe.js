import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  parent: {
    position: "relative",
    display: "flex"
  },
  paper:{
    width: "auto",
    height: "auto",
    margin: "8px",
    padding: "1em",
    border: "1px solid #cdcdcd"
  },
  frame:{
    border: 0,
    width: 300,
    height: 600
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#f50057',
    position: "absolute"
  },
}));

const Iframe = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <div className={classes.parent}>
          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <iframe className={classes.frame} title="concept-qa" src="https://storage.googleapis.com/adlib-showcase-bucket/613641c2be8a7d61122e643c/300x600-Playstation/index.html" />
        </div>
      </Paper>
    </div>
    
  );
}

export default Iframe;