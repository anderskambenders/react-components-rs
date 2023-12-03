import { object, string, number, boolean, ref, mixed } from 'yup';
import { store } from '../store/store';

const countriesList = store.getState().countriesReducer.countries;

export const validationSchema = object({
  name: string()
    .required('This is a required field')
    .strict(true)
    .matches(/^[A-ZА-ЯЁ]/, 'The first letter must be uppercase'),

  age: number()
    .required('This is a required field')
    .typeError('Age must be number')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('This is a required field'),

  email: string()
    .required('This is a required field')
    .email('Email is not valid'),
  password: string()
    .required('This is a required field')
    .matches(/^(?=.*[a-zа-я])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-ZА-Я])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(
      /^(?=.*[!@#%&$^*()?><|+=])/,
      'Must contain at least one special character'
    ),
  passwordRepeat: string()
    .required('This is a required field')
    .oneOf([ref('password')], 'Passwords must match'),
  gender: string().required(),
  accept: boolean().oneOf([true], 'You must accept T&C'),
  image: mixed<FileList>()
    .required('Field is mandatory')
    .test('fileRequired', 'Image required', (file) => !!file)
    .test('fileSize', 'Only image up to 2MB are permitted.', (fileList) => {
      if (fileList?.length !== 1) {
        return false;
      }
      const file = fileList[0];
      return !file || file.size <= 2_000_000;
    })
    .test('fileType', 'The image must be in png or jpeg format', (fileList) => {
      if (fileList?.length !== 1) {
        return false;
      }
      const file = fileList[0];

      const allowedTypes = ['image/jpeg', 'image/png'];

      return allowedTypes.includes(file.type);
    }),
  country: string()
    .required('This is a required field')
    .test('includes in list', "Country doesn't exist", (value) => {
      return countriesList
        .map((el) => el.toLowerCase())
        .includes(value.toLowerCase());
    }),
});

export const passwordValidation = object({
  password: string()
    .required('This is a required field')
    .matches(/^(?=.*[a-zа-я])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-ZА-Я])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(
      /^(?=.*[!@#%&$^*()?><|+=])/,
      'Must contain at least one special character'
    ),
});
