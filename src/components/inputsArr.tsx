import { FormDataKeys } from '../types';

export const inputsArr = [
  {
    labelText: 'Name',
    inputType: 'text',
    name: FormDataKeys.name,
    inputId: 'name',
  },
  {
    labelText: 'Age',
    inputType: 'number',
    name: FormDataKeys.age,
    inputId: 'age',
  },
  {
    labelText: 'Email',
    inputType: 'text',
    name: FormDataKeys.email,
    inputId: 'email',
  },
  {
    labelText: 'Upload image',
    inputType: 'file',
    name: FormDataKeys.image,
    inputId: 'image',
  },
  {
    labelText: 'Accept T&C',
    inputType: 'checkbox',
    name: FormDataKeys.accept,
    inputId: 'tc',
  },
];
