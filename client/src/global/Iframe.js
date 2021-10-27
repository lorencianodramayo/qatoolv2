import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { updateCreative, increment } from "../actions";

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
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.data);
  const frame = useSelector((state) => state.frame);
  const count = useSelector((state) => state.counter)
  const [open, setOpen] =useState(true);
  const [done, setDone] = useState(false);

  const handleLoad = (e) =>{
    setOpen(true);
    if ("dynamic" in state.data.creatives[frame]) {
      window.addEventListener(
        "message",
        (event) => {
          switch (event.data.type) {
            case "SCREENSHOT_START":
              setOpen(false);
              break;
            default: return event.data.type;
          }
        },
        false
      );
    } else {
      setDone(false)
      window.addEventListener("message", (event) => {
        switch (event.data.type) {
          case "SAVE_DYNAMIC":
            state.data.creatives[frame].dynamic = event.data.dynamic;
            dispatch(updateCreative(id, state.data.creatives)).then(() => {
              if(!done){
                dispatch(increment(count + 1));
                setDone(true);
              }
            });
            break;
          default: return event.data.type;
        }
      });
      // e.target.contentWindow.postMessage(
      //   { type: "GET_DYNAMIC" },
      //   `https://storage.googleapis.com/adlib-showcase-bucket/${id}/${decodeURIComponent(
      //     state.data.creatives[frame].name
      //   )}/index.html`
      // );
    }
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      {Object.keys(state).length > 0 ? (
        <Paper elevation={5} className={classes.paper}>
          <div className={classes.parent}>
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>

            <iframe
              key={count}
              onLoad={handleLoad}
              width={
                state.data.creatives[frame].name.split("-")[0].split("x")[0]
              }
              height={
                state.data.creatives[frame].name.split("-")[0].split("x")[1]
              }
              className={classes.frame}
              title="concept-qa"
              src={`https://storage.googleapis.com/adlib-showcase-bucket/${id}/${decodeURIComponent(
                state.data.creatives[frame].name
              )}/index.html`}
            />
          </div>
        </Paper>
      ) : null}
    </div>
  );
}

export default Iframe;