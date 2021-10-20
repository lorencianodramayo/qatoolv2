import React, {useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "#f50057",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paragraph:{
    display: 'none'
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
        dropzoneText={' '}
        showAlerts={false}
        onChange={handleChange}
        maxFileSize={6291456}
      />
  )
}

export default Dragger;