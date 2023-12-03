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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: 10 }} htmlFor={inputId}>
          {labelText}:
        </label>
        <input
          style={{ margin: 0 }}
          id={inputId}
          type={inputType}
          name={name}
          ref={inputRef}
        />
      </div>

      <p style={{ color: 'red' }}>{error ? error : ''}</p>
    </div>
  );
};

export default FormInput;
