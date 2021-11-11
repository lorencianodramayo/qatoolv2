import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import SideInput from '../creative/SideInput';
import SideSelect from '../creative/SideSelect';

import libi from "../libi.svg";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "0 1em",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  list: {
    margin: "2em 1em",
    padding: "1em 0",
  },
  loader: {
    height: "100vh",
    margin: "1em 0",
    display: "flex",
    justifyContent: "center",
    background: "#2f2f2fd1"
  }
}));

const DynamicElement = (props) => {
  const classes = useStyles();
  const frame = useSelector((state) => state.frame);
  const [state,setState] = useState({})

  useEffect(() => {
    setState(frame);
  }, [frame]);
  
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        {Object.keys(state).length > 0 ? (
          "dynamic" in state.data ? (
            <FormControl component="fieldset" className={classes.list}>
              <FormLabel component="legend">Dynamic Elements</FormLabel>
              {Object.keys(state.data.dynamic.defaultValues).map(
                (res, index) => {
                  return state.data.dynamic.possibleValues !== undefined ? (
                    res in state.data.dynamic.possibleValues ? (
                      <SideSelect
                        key={index}
                        dynamicName={res}
                        value={state.data.dynamic.defaultValues[res]}
                        options={state.data.dynamic.possibleValues[res]}
                      />
                    ) : (
                      <SideInput
                        key={index}
                        dynamicName={res}
                        value={state.data.dynamic.defaultValues[res]}
                      />
                    )
                  ) : (
                    <SideInput
                      key={index}
                      dynamicName={res}
                      value={state.data.dynamic.defaultValues[res]}
                    />
                  );
                }
              )}
            </FormControl>
          ) : null
        ) : (
          <div className={classes.loader}>
            <img src={libi} alt="libi-logo" style={{ width: "100px" }} />
          </div>
        )}
      </Drawer>
    );
}

export default DynamicElement;