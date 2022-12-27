import { SyntheticEvent } from 'react';
import RadioButtonType from './RadioButtonType';

interface RadioButtonGroupType {
  error?: boolean;
  helperText?: string | boolean;
  isChecked?: boolean;
  label: string;
  name: string;
  onChange: (event: SyntheticEvent) => void;
}

export default RadioButtonGroupType;
