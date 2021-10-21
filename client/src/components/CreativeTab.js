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
import board from '../board.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  stage: {
    height: "86vh",
    background: `url(${board})`,
  },
  base:{
    borderBottom: "1px solid #d5d5d5",
    color: "#f50057",
    background: "transparent"
  },
  panel:{
      padding: "1em 0"
  },
  icon:{
      marginBottom: "0 !important",
      marginRight: "0.5em"
  },
  tabs:{
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Creative Name
                    </Typography>
                    
                    <TabList onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
                        <Tab icon={<VisibilityIcon className={classes.icon} />} label="Preview" value="1" />
                        <Tab icon={<ArtTrackIcon className={classes.icon} />} label="Preview Sheet" value="2" />
                    </TabList>
                </Toolbar> 
            </AppBar>
        </div>
        <TabPanel value="1" className={classes.panel}>
            <div className={classes.stage}><Iframe /></div>
            <Affix />
        </TabPanel>
        <TabPanel value="2"><PreviewList /></TabPanel>
      </TabContext>
    </div>
  );
}