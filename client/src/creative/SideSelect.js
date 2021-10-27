import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    margin: "8px 0",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SideSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age)
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <InputLabel id="trigger-text">{props.dynamicName}</InputLabel>
        <Select
          labelId="trigger-text"
          id="trigger-id"
          defaultValue={props.value}
          onChange={handleChange}
          label={props.dynamicName}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          {
            props.options.split(",").map((data, index) => {
              return <MenuItem value={data} key={index}>{data}</MenuItem>;
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}
