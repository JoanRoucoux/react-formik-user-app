import * as React from 'react';
import { FormikProps } from 'formik';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { UserFormConfig } from '../commons';
import { UserFormValuesType } from '../commons/types';
import { CheckboxInput, RadioButtonGroup, SelectInput } from './inputs';
import Loader from './Loader';

const { countries, genderRadioConfig, hearAboutRadioConfig, countryCodes } =
  UserFormConfig;

const UserForm = (props: FormikProps<UserFormValuesType>): JSX.Element => {
  const {
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    setFieldValue,
    touched,
    values,
  } = props;

  const {
    gender,
    firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
    password,
    confirmPassword,
    addressLine1,
    addressLine2,
    city,
    zipCode,
    country,
    hearAbout,
    hearAboutOther,
    acceptTerms,
  } = values;

  return (
    <Box
      autoComplete="off"
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
    >
      {isSubmitting ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RadioButtonGroup
                defaultValue={gender}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
                isRow
                label={genderRadioConfig.label}
                labelId={genderRadioConfig.labelId}
                name={genderRadioConfig.name}
                onChange={handleChange}
                radioButtons={genderRadioConfig.radioButtons}
                value={gender}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.firstName && Boolean(errors.firstName)}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                id="firstName"
                label="First Name"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.lastName && Boolean(errors.lastName)}
                fullWidth
                helperText={touched.lastName && errors.lastName}
                id="lastName"
                label="Last Name"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={touched.email && Boolean(errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                id="email"
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={email}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectInput
                error={touched.countryCode && Boolean(errors.countryCode)}
                helperText={touched.countryCode && errors.countryCode}
                inputLabel="Country Code"
                inputLabelId="countryCodeLabelId"
                items={countryCodes}
                name="countryCode"
                onChange={handleChange}
                selectId="countryCodeSelectId"
                selectLabel="Country Code"
                value={countryCode}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                fullWidth
                helperText={touched.phoneNumber && errors.phoneNumber}
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={phoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={touched.password && Boolean(errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                id="password"
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                required
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                fullWidth
                helperText={touched.confirmPassword && errors.confirmPassword}
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                required
                value={confirmPassword}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Address Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={touched.addressLine1 && Boolean(errors.addressLine1)}
                fullWidth
                helperText={touched.addressLine1 && errors.addressLine1}
                id="addressLine1"
                label="Address Line 1"
                name="addressLine1"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={addressLine1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={touched.addressLine2 && Boolean(errors.addressLine2)}
                fullWidth
                helperText={touched.addressLine2 && errors.addressLine2}
                id="addressLine2"
                label="Address Line 2"
                name="addressLine2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={addressLine2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.city && Boolean(errors.city)}
                fullWidth
                helperText={touched.city && errors.city}
                id="city"
                label="City"
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.zipCode && Boolean(errors.zipCode)}
                fullWidth
                helperText={touched.zipCode && errors.zipCode}
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={zipCode}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                autoHighlight
                disablePortal
                onBlur={handleBlur}
                onChange={(_e: React.SyntheticEvent, value: string | null) =>
                  setFieldValue('country', value)
                }
                options={countries}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={touched.country && Boolean(errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    id="country"
                    label="Country"
                    name="country"
                    required
                  />
                )}
                value={country}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            More info
          </Typography>
          <Grid item xs={12}>
            <RadioButtonGroup
              error={touched.hearAbout && Boolean(errors.hearAbout)}
              helperText={touched.hearAbout && errors.hearAbout}
              label={hearAboutRadioConfig.label}
              labelId={hearAboutRadioConfig.labelId}
              name={hearAboutRadioConfig.name}
              onChange={handleChange}
              radioButtons={hearAboutRadioConfig.radioButtons}
              value={hearAbout}
            />
          </Grid>
          {hearAbout === 'other' && (
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                error={touched.hearAboutOther && Boolean(errors.hearAboutOther)}
                fullWidth
                helperText={touched.hearAboutOther && errors.hearAboutOther}
                id="hearAboutOther"
                label="Please specify"
                name="hearAboutOther"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={hearAboutOther}
              />
            </Grid>
          )}
          <Divider sx={{ mt: 1 }} variant="middle" />
          <Box sx={{ mt: 1 }}>
            <CheckboxInput
              error={touched.acceptTerms && Boolean(errors.acceptTerms)}
              helperText={touched.acceptTerms && errors.acceptTerms}
              isChecked={acceptTerms}
              label="Accept terms and conditions"
              name="acceptTerms"
              onChange={handleChange}
            />
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
            <Button fullWidth onClick={handleReset} variant="outlined">
              Reset form
            </Button>
            <Button fullWidth type="submit" variant="contained">
              Sign Up
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default UserForm;
