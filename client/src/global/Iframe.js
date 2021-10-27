import React from 'react';
import { useParams } from 'react-router-dom';
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#f50057',
    position: "absolute"
  },
}));

const Iframe = () => {
  const classes = useStyles();
  const { id } = useParams();
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
          <iframe 
            width={1080} 
            height={1920} 
            className={classes.frame} 
            title="concept-qa" 
            src={`https://storage.googleapis.com/adlib-showcase-bucket/${id}/1080x1920-Yahoo_Social/index.html`}
          />
        </div>
      </Paper>
    </div>
    
  );
}

export default Iframe;