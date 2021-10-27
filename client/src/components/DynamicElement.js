import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import SideInput from '../creative/SideInput';
import SideSelect from '../creative/SideSelect';

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
}));

const DynamicElement = (props) => {
  const classes = useStyles();
  const state = useSelector((state) => state.data);
  const frame = useSelector((state) => state.frame);
  
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
          "dynamic" in state.data.creatives[frame] ? (
            <FormControl component="fieldset" className={classes.list}>
              {console.log(state.data.creatives[frame])}
              <FormLabel component="legend">Dynamic Elements</FormLabel>
              {Object.keys(
                state.data.creatives[frame].dynamic.defaultValues
              ).map((data, index) => {

                return state.data.creatives[frame].dynamic.possibleValues !==
                  undefined ? (
                  data in state.data.creatives[frame].dynamic.possibleValues ? (
                    <SideSelect
                      key={index}
                      dynamicName={data}
                      value={
                        state.data.creatives[frame].dynamic.defaultValues[data]
                      }
                      options={
                        state.data.creatives[frame].dynamic.possibleValues[data]
                      }
                    />
                  ) : (
                    <SideInput
                      key={index}
                      dynamicName={data}
                      value={
                        state.data.creatives[frame].dynamic.defaultValues[data]
                      }
                    />
                  )
                ) : (
                  <SideInput
                    key={index}
                    dynamicName={data}
                    value={
                      state.data.creatives[frame].dynamic.defaultValues[data]
                    }
                  />
                );
              })}
              
            </FormControl>
          ) : null
        ) : null}
      </Drawer>
    );
}

export default DynamicElement;