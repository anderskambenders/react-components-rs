import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { IData } from '../../types';
import { FormDataKeys } from '../../types';

export default function GenderInput({
  register,
}: {
  register: (
    name: FormDataKeys,
    options?: RegisterOptions<IData, FormDataKeys> | undefined
  ) => UseFormRegisterReturn<FormDataKeys>;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <legend style={{ marginRight: 10 }}>Gender: </legend>
      <label htmlFor="male">male</label>
      <input
        type="radio"
        id="male"
        defaultChecked
        {...register(FormDataKeys.gender)}
        value="male"
      />
      <label htmlFor="female">female</label>
      <input
        type="radio"
        id="female"
        {...register(FormDataKeys.gender)}
        value="female"
      />
    </div>
  );
}
