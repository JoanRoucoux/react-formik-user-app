import * as React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { CheckboxInputType } from '../../commons/types';

const CheckboxInput = ({
  error,
  helperText,
  isChecked,
  label,
  name,
  onChange,
}: CheckboxInputType): JSX.Element => (
  <FormControl error={error}>
    <FormControlLabel
      control={
        <Checkbox checked={isChecked || false} color="primary" name={name} />
      }
      label={label}
      onChange={onChange}
    />
    {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default CheckboxInput;
