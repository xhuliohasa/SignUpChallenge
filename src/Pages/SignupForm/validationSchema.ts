import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  website: Yup.string(),
});
