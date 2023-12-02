import { MutableRefObject } from 'react';

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
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" ref={passwordRef} />
      <p>{error.errorPassword ? error.errorPassword : ''}</p>

      <label htmlFor="password-repeat">Repeat password:</label>
      <input type="text" id="password-repeat" ref={passwordRepeatRef} />
      <p>{error.errorPasswordRepeat ? error.errorPasswordRepeat : ''}</p>
      {strength ? <div>Strength: {strength} of 4</div> : <></>}
    </div>
  );
}
