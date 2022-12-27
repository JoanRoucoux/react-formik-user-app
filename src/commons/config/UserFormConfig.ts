import * as Yup from 'yup';
import { UserFormValuesType } from '../types';

const countries = ['Belgium', 'France', 'Spain'];

const countryCodes = [
  { label: '+32 (Belgium)', value: '+32' },
  { label: '+33 (France)', value: '+33' },
  { label: '+34 (Spain)', value: '+34' },
];

const genderRadioConfig = {
  label: 'Gender',
  labelId: 'gender',
  name: 'gender',
  radioButtons: [
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ],
};

const initialValues: UserFormValuesType = {
  gender: 'female',
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  zipCode: '',
  country: '',
  hearAbout: '',
  hearAboutOther: '',
  acceptTerms: false,
};

const hearAboutRadioConfig = {
  label: 'How did you hear about us?',
  labelId: 'hearAbout',
  name: 'hearAbout',
  radioButtons: [
    {
      label: 'Social media',
      value: 'social',
    },
    {
      label: 'Recommendation from a friend',
      value: 'friend',
    },
    {
      label: 'Heard on TV',
      value: 'tv',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ],
};

// from https://regexlib.com/Default.aspx
const patterns = {
  firstName: /^[-'a-zA-Z]+$/i,
  lastName: /^[-'a-zA-Z]+$/i,
  phoneNumber: /^[0-9]+$/,
  addressLine1: /^\d+?[A-Za-z]*\s\w*\s?\w+?\s\w{2}\w*\s*\w*$/,
  addressLine2: /^\d+?[A-Za-z]*\s\w*\s?\w+?\s\w{2}\w*\s*\w*$/,
  city: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
  zipCode: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
};

const validationSchema: Yup.SchemaOf<UserFormValuesType> = Yup.object().shape({
  gender: Yup.string().required('Gender is required'),
  firstName: Yup.string()
    .matches(patterns.firstName, 'Enter a valid First Name')
    .min(2, 'First Name should be of minimum 2 characters length')
    .max(50, 'First Name should be of maximum 50 characters length')
    .required('First Name is required'),
  lastName: Yup.string()
    .matches(patterns.lastName, 'Enter a valid Last Name')
    .min(2, 'Last Name should be of minimum 2 characters length')
    .max(50, 'Last Name should be of maximum 50 characters length')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  countryCode: Yup.string().required('Country Code is required'),
  phoneNumber: Yup.string()
    .matches(patterns.phoneNumber, 'Phone Number must be only digits')
    .min(9, 'Phone Number must be exactly 9 digits')
    .max(9, 'Phone Number must be exactly 9 digits')
    .required('Phone Number is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(50, 'Password should be of maximum 50 characters length')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match!'),
  addressLine1: Yup.string()
    .matches(patterns.addressLine1, 'Enter a valid Address Line')
    .max(50, 'Address Line should be of maximum 50 characters length')
    .required('Address Line 1 is required'),
  addressLine2: Yup.string()
    .matches(patterns.addressLine2, 'Enter a valid Address Line')
    .max(50, 'Address Line should be of maximum 50 characters length'),
  city: Yup.string()
    .matches(patterns.city, 'Enter a valid City')
    .max(50, 'City should be of maximum 50 characters length')
    .required('City is required'),
  zipCode: Yup.string()
    .matches(patterns.zipCode, 'Enter a valid Zip Code')
    .max(15, 'Zip Code should be of maximum 15 characters length')
    .required('Zip Code is required'),
  country: Yup.string().required('Country is required'),
  hearAbout: Yup.string().required('Please answser the question'),
  hearAboutOther: Yup.string().when('hearAbout', {
    is: 'other',
    then: Yup.string().required('Please answser the question'),
  }),
  acceptTerms: Yup.bool()
    .required('Accept the terms and conditions is required')
    .oneOf([true], 'Accept the terms and conditions is required'),
});

const UserFormConfig = {
  countries,
  countryCodes,
  genderRadioConfig,
  hearAboutRadioConfig,
  initialValues,
  validationSchema,
};

export default UserFormConfig;
