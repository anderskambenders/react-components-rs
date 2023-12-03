import { MutableRefObject, useState } from 'react';
import passClosed from '../../assets/pass-closed.png';
import passOpened from '../../assets/pass-closed.png';

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
      <label htmlFor="password">Password:</label>
      <input type={passwordType} id="password" ref={passwordRef} />
      <button
        type="button"
        onClick={() =>
          setPasswordType(passwordType === 'password' ? 'text' : 'password')
        }
      >
        <img
          src={passwordType === 'password' ? passClosed : passOpened}
          alt="pass-type"
        />
      </button>
      <p>{error.errorPassword ? error.errorPassword : ''}</p>

      <label htmlFor="password-repeat">Repeat password:</label>
      <input type={passwordType} id="password-repeat" ref={passwordRepeatRef} />
      <p>{error.errorPasswordRepeat ? error.errorPasswordRepeat : ''}</p>
      {strength ? <div>Strength: {strength} of 4</div> : <></>}
    </div>
  );
}
