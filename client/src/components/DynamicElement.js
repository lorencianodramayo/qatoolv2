import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
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
        <FormControl component="fieldset" className={classes.list}>
          <FormLabel component="legend">Dynamic Elements</FormLabel>
          <SideInput/>
          <SideSelect />
        </FormControl>
      </Drawer>
    );
}

export default DynamicElement;