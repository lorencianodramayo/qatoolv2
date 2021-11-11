import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {DropzoneArea} from 'material-ui-dropzone';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { saveZip } from "../actions";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);

  useEffect(()=>{
    if('data' in state){
      history.push(`/${state.data._id}`);
    }
  });

  const handleChange = (files) => {
    dispatch(saveZip(files));
  }

  const classes = useStyles();
  return (
    <div>
      <DropzoneArea
        icon={<CloudUploadIcon />}
        dropzoneClass={classes.root}
        dropzoneParagraphClass={classes.paragraph}
        acceptedFiles={[
          "zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed",
        ]}
        showPreviews={false}
        showPreviewsInDropzone={false}
        useChipsForPreview
        dropzoneText={"Drop multiple or single zip file."}
        showAlerts={false}
        onChange={handleChange}
        maxFileSize={100000000}
        filesLimit={100}
      />
    </div>
  );
}

export default Dragger;