import { InputProps } from '../../types';

const FormInput = ({
  labelText,
  inputType,
  name,
  inputId,
  inputRef,
  error,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={inputId}>{labelText}:</label>
      <input id={inputId} type={inputType} name={name} ref={inputRef} />
      <p>{error ? error : ''}</p>
    </div>
  );
};

export default FormInput;
