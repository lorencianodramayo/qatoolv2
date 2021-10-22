import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "#d1d1d1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    borderWidth: "2px"
  },
  paragraph:{
    fontSize: "1em",
    marginBottom: 0,
    color: "#999999"
  }
}));

const Dragger = () => {
  let history = useHistory();

  const handleChange = (files) => {
    console.log(files);
    if(files.length > 0){history.push("/hello");}
  }

  const classes = useStyles();
  return (
      <DropzoneArea 
        icon={<CloudUploadIcon />}
        dropzoneClass={classes.root}
        dropzoneParagraphClass={classes.paragraph}
        acceptedFiles={['zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed']}
        showPreviews={false}
        showPreviewsInDropzone={false}
        useChipsForPreview
        dropzoneText={'Drop multiple or single zip file.'}
        showAlerts={false}
        onChange={handleChange}
        maxFileSize={6291456}
      />
  )
}

export default Dragger;