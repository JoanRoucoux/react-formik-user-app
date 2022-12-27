import * as React from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { RadioButtonType } from '../../commons/types';

const RadioButton = ({
  label,
  value,
}: RadioButtonType): JSX.Element => (
  <FormControlLabel
    value={value}
    control={<Radio />}
    label={label}
  />
);

export default RadioButton;
