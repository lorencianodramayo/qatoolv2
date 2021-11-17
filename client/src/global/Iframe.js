import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { setFrame, setDynamic, increment } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  parent: {
    position: "relative",
    display: "flex",
  },
  paper: {
    width: "auto",
    height: "auto",
    margin: "8px",
    padding: "1em",
    border: "1px solid #cdcdcd",
  },
  frames: {
    border: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#f50057",
    position: "absolute",
  },
}));

const Iframe = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const frame = useSelector((state) => state.frame);
  const count = useSelector((state) => state.counter);
  const [open, setOpen] = useState(true);
  const [done, setDone] = useState(false);
  const [frameKey, setFrameKey] = useState(0)

  const handleLoad = (e) => {
    e.preventDefault();
    setOpen(true);
    // if (Object.keys(frame.data).indexOf('dynamic') > -1) {
    //   window.addEventListener(
    //     "message",
    //     (event) => {
    //       switch (event.data.type) {
    //         case "SCREENSHOT_START":
    //           setOpen(false);
    //           setDone(true);
    //           break;
    //         default: return event.data.type;
    //       }
    //     },
    //     false
    //   );
    // } else {
    //   setDone(false);
    //   window.addEventListener("message", (event) => {
    //     switch (event.data.type) {
    //       case "SAVE_DYNAMIC":
    //           console.log("updating")
    //           frame.data.dynamic = event.data.dynamic;
    //           // dispatch(updateCreative(id, frame)).then(()=> {

    //           // });
    //           if (!done) {
    //             //dispatch(setFrame(frame.data))
    //             dispatch(increment(count + 1));
    //             setDone(true);
    //           }
    //         break;
    //       default:
    //         return event.data.type;
    //     }
    //   });
    // }

    // e.target.contentWindow.postMessage(
    //   { type: "GET_DYNAMIC" },
    //   `https://storage.googleapis.com/adlib-showcase-bucket/${id}/${decodeURIComponent(
    //     state.data.creatives[frame].name
    //   )}/index.html`
    // );
    setFrameKey(count);
    if(frameKey === count){
      window.addEventListener("message", (event) => {
        switch (event.data.type) {
          case "SAVE_DYNAMIC":
            dispatch(setDynamic({ ...event.data.dynamic }));
            //dispatch(setFrame({frame}, ...event.data.dynamic ));
            // if (Object.keys(frame.data).indexOf("dynamic") > -1) {
            //   dispatch(increment(count + 1));
            //   setDone(true);
            // }
            break;
          default:
            return "hello";
        }
      });
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {Object.keys(frame).length > 0 ? (
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
              width={frame.data.name.split("-")[0].split("x")[0]}
              height={frame.data.name.split("-")[0].split("x")[1]}
              className={classes.frames}
              title="concept-qa"
              src={`https://storage.googleapis.com/adlib-showcase-bucket/${id}/${decodeURIComponent(
                frame.data.name
              )}/index.html`}
              onLoad={handleLoad}
            />
          </div>
        </Paper>
      ) : null}
    </div>
  );
};

export default Iframe;
