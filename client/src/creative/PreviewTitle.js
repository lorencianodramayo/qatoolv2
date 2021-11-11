
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Fade from '@material-ui/core/Fade';

import { setFrame, increment } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem:{
    padding: 0
  }
}));

export default function PreviewTitle() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const count = useSelector((state) => state.counter);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (Object.keys(state).length > 0) {
      setTitle(state);
      //console.log(state.data.creatives)
      dispatch(setFrame(state.data.creatives[selectedIndex]));
    }
  }, [dispatch, selectedIndex, state]);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch(setFrame(state.data.creatives[index]));
    dispatch(increment(count + 1));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {title != null ? (
        <div>
          <List component="nav" aria-label="Creative Name">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="creative-menu"
              aria-label="creative list"
              onClick={handleClickListItem}
              className={classes.listItem}
            >
              <ListItemText
                primary={title.data.creatives[selectedIndex].name}
              />
            </ListItem>
          </List>
          <Menu
            id="creative-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            keepMounted
            open={
                Object.keys(title.data.creatives).length === 1
                  ? false
                  : Boolean(anchorEl)
            }
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {(Object.keys(title.data.creatives).map((file) => 
              [
                ...title.data.creatives[file].name,
              ])
            ).map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      ) : null}
    </div>
  );
}
