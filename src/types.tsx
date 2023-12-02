import { UseFormRegisterReturn } from 'react-hook-form';

export interface IData {
  accept?: boolean;
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  image?: File;
  passwordRepeat: string;
  country: string;
}

export interface IFormData {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordRepeat: string;
  gender: string;
  accept: boolean;
  image: string;
  country: string;
}

export type formData = {
  dataList: IFormData[];
};

export type Register = UseFormRegisterReturn<FormDataKeys>;

export enum FormDataKeys {
  name = 'name',
  age = 'age',
  email = 'email',
  password = 'password',
  passwordRepeat = 'passwordRepeat',
  gender = 'gender',
  accept = 'accept',
  image = 'image',
  country = 'country',
}

export type FormHookProps = {
  labelText: string;
  inputType: string;
  name: FormDataKeys;
  inputId: string;
};

export type File = {
  0: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  };
  length: number;
};
