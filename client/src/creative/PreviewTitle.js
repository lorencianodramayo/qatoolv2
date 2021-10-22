
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem:{
    padding: 0
  }
}));

const options = [
  "160x600-Mui Template",
  "300x600-Mui Template",
];

export default function PreviewTitle() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
            primary={options[selectedIndex]}
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
        open={options.length===1? false:Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {options.map((option, index) => (
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
