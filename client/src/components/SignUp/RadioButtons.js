import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import Styles from "./Styles";

export default function RadioButtonsGroup(props) {
  const { input, value, ...rest } = props;
  const classes = Styles.RadioButtons();
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
