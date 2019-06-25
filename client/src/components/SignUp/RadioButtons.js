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

export default function RadioButtonsGroup(props) {
  const { input, value, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          Are you a customer or owner of the car
        </FormLabel>
        <RadioGroup
          aria-label="User Type"
          {...rest}
          className={classes.group}
          value={input.value}
          onChange={input.onChange}
        >
          <div className={classes.root}>
            <FormControlLabel
              value="customer"
              checked={input.checked}
              control={<Radio />}
              label="Customer"
            />
            <FormControlLabel value="owner" control={<Radio />} label="Owner" />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
