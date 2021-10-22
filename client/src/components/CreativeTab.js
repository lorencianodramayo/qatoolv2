import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Affix from '../global/Affix';
import Iframe from '../global/Iframe';
import PreviewList from '../creative/PreviewList';
import PreviewTitle from '../creative/PreviewTitle';
import board from '../board.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  stage: {
    minHeight: "77vh",
    background: `url(${board})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #747163ab",
    padding: "1em"
  },
  base: {
    borderBottom: "1px solid #e7e7e7",
    color: "#f50057",
    background: "transparent",
  },
  panel: {
    padding: "1em",
  },
  icon: {
    marginBottom: "0 !important",
    marginRight: "0.5em",
  },
  tabs: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 0,
  },
  creativeName:{
    width: "fit-content",
  }
}));

export default function CreativeTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <div className={classes.root}>
          <AppBar elevation={0} position="static" className={classes.base}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                <div className={classes.creativeName}>
                  <PreviewTitle />
                </div>
              </Typography>

              <TabList
                onChange={handleChange}
                aria-label="preview options"
                className={classes.tabs}
              >
                <Tab
                  size="small"
                  icon={<VisibilityIcon className={classes.icon} />}
                  label="Preview"
                  value="1"
                />
                <Tab
                  size="small"
                  icon={<ArtTrackIcon className={classes.icon} />}
                  label="Preview Sheet"
                  value="2"
                />
              </TabList>
            </Toolbar>
          </AppBar>
        </div>
        <TabPanel value="1" className={classes.panel}>
          <div className={classes.stage}>
            <Iframe />
          </div>
          <Affix />
        </TabPanel>
        <TabPanel value="2">
          <PreviewList />
        </TabPanel>
      </TabContext>
    </div>
  );
}