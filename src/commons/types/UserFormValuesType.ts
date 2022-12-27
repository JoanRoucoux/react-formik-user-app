interface UserFormValuesType {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2: string | undefined;
  city: string;
  zipCode: string;
  country: string;
  hearAbout: string;
  hearAboutOther: string | undefined;
  acceptTerms: boolean;
}

export default UserFormValuesType;
