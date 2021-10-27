
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Fade from '@material-ui/core/Fade';

import { getCreative } from "../actions";

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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getCreative(id));
  }, []);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
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
            primary={
              Object.keys(state).length > 0
                ? state.data.creatives[selectedIndex].name
                : null
            }
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
          Object.keys(state).length > 0
            ? Object.keys(state.data.creatives).length === 1
              ? false
              : Boolean(anchorEl)
            : false
        }
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {(Object.keys(state).length > 0
          ? Object.keys(state.data.creatives).map((file) => [
              ...state.data.creatives[file].name,
            ])
          : []
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
  );
}
