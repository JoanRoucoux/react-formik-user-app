import { ChangeEvent } from 'react';
import RadioButtonType from './RadioButtonType';

interface RadioButtonGroupType {
  defaultValue?: string;
  error?: boolean;
  helperText?: string | boolean;
  isRow?: boolean;
  label: string;
  labelId: string;
  name: string;
  onChange: (event: ChangeEvent) => void;
  radioButtons: RadioButtonType[];
  value: string;
}

export default RadioButtonGroupType;
