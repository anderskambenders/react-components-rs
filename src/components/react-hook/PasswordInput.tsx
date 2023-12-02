import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { FormDataKeys, IData } from '../../types';

const PasswordInput = ({
  error,
  register,
}: {
  error: string | undefined;
  register: (
    name: FormDataKeys,
    options?: RegisterOptions<IData, FormDataKeys> | undefined
  ) => UseFormRegisterReturn<FormDataKeys>;
}) => {
  return (
    <>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register(FormDataKeys.password)} />
        <p>{error ? error : ''}</p>
      </div>
      <div>
        <label htmlFor="password-repeat">Repeat password:</label>
        <input
          type="text"
          id="password-repeat"
          {...register(FormDataKeys.passwordRepeat)}
        />
        <p>{error ? error : ''}</p>
      </div>
    </>
  );
};

export default PasswordInput;
