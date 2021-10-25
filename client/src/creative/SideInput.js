import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import FormControl from "@material-ui/core/FormControl";
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100%",
    margin: "8px 0",
  },
}));

export default function SideInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    text: "",
    options: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, options: !values.options });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="frame1Headline-text">frame1Headline</InputLabel>
          <OutlinedInput
            id="frame1Headline-text"
            type="text"
            fullWidth={true}
            value={values.text}
            onChange={handleChange("text")}
            label="frame1Headline"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.options ? <FontDownloadIcon /> : <FontDownloadOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}
