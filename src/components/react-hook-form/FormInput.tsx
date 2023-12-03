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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: 10 }} htmlFor={props.inputId}>
          {props.labelText}:
        </label>
        <input
          style={{ margin: 0 }}
          id={props.inputId}
          type={props.inputType}
          {...register(props.name)}
        />
      </div>

      <p style={{ color: 'red' }}>{error ? error : ''}</p>
    </div>
  );
};

export default FormInput;
