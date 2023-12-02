import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { FormDataKeys, FormHookProps, IData } from '../../types';

const FormInput = ({
  props,
  error,
  register,
}: {
  props: FormHookProps;
  error: string | undefined;
  register: (
    name: FormDataKeys,
    options?: RegisterOptions<IData, FormDataKeys> | undefined
  ) => UseFormRegisterReturn<FormDataKeys>;
}) => {
  return (
    <div>
      <label htmlFor={props.inputId}>{props.labelText}:</label>
      <input
        id={props.inputId}
        type={props.inputType}
        {...register(props.name)}
      />
      <p>{error ? error : ''}</p>
    </div>
  );
};

export default FormInput;
