import { withFormik, FormikHelpers } from 'formik';
import { UserFormConfig } from '../commons';
import { UserFormValuesType } from '../commons/types';
import UserForm from './UserForm';

const { initialValues, validationSchema } = UserFormConfig;

const EnhancedUserForm = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: (
    values: UserFormValuesType,
    { setSubmitting }: FormikHelpers<UserFormValuesType>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  validationSchema,
  displayName: 'UserForm', // helps with React DevTools
})(UserForm);

export default EnhancedUserForm;
