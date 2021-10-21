import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const drawerWidth = 300;

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

const CreativeList = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
    const handleChange = (event) => {
      setValue(event.target.value);
    };

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
          <FormLabel component="legend">Creative Sizes</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label="120x600"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label="300x250"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label="300x600"
            />
          </RadioGroup>
        </FormControl>
      </Drawer>
    );
}

export default CreativeList;