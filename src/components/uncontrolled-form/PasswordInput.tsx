import { MutableRefObject, useState } from 'react';
import passClosed from '../../assets/pass-closed.png';
import passOpened from '../../assets/pass-opened.png';

export default function InputPassword({
  passwordRef,
  passwordRepeatRef,
  strength,
  error,
}: {
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  passwordRepeatRef: MutableRefObject<HTMLInputElement | null>;
  strength: number;
  error: {
    errorPassword: string | undefined;
    errorPasswordRepeat: string | undefined;
  };
}) {
  const [passwordType, setPasswordType] = useState('password');

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <label htmlFor="password">Password:</label>
        <input type={passwordType} id="password" ref={passwordRef} />
        <button
          type="button"
          style={{ position: 'absolute', top: 25, left: 300 }}
          onClick={() =>
            setPasswordType(passwordType === 'password' ? 'text' : 'password')
          }
        >
          <img
            style={{ height: 15 }}
            src={passwordType === 'password' ? passClosed : passOpened}
            alt="pass-type"
          />
        </button>
        <p style={{ color: 'red' }}>
          {error.errorPassword ? error.errorPassword : ''}
        </p>
      </div>

      <label htmlFor="password-repeat">Repeat password:</label>
      <input type={passwordType} id="password-repeat" ref={passwordRepeatRef} />
      <p style={{ color: 'red' }}>
        {error.errorPasswordRepeat ? error.errorPasswordRepeat : ''}
      </p>
      {strength ? <div>Strength: {strength} of 4</div> : <></>}
    </div>
  );
}
