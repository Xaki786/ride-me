import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          Are you a customer or owner of the car
        </FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <div className={classes.root}>
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Customer"
            />
            <FormControlLabel value="other" control={<Radio />} label="Owner" />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
