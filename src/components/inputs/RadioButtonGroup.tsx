import * as React from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
} from '@mui/material';
import { RadioButtonType, RadioButtonGroupType } from '../../commons/types';
import RadioButton from './RadioButton';

const RadioButtonGroup = ({
  defaultValue,
  error,
  helperText,
  isRow,
  label,
  labelId,
  name,
  onChange,
  radioButtons,
  value,
}: RadioButtonGroupType): JSX.Element => (
  <FormControl error={error}>
    <FormLabel id={labelId}>{label}</FormLabel>
    <RadioGroup
      aria-labelledby={labelId}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      row={isRow || false}
      value={value}
    >
      {radioButtons.map((item: RadioButtonType) => (
        <RadioButton key={item.value} label={item.label} value={item.value} />
      ))}
    </RadioGroup>
    {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default RadioButtonGroup;
