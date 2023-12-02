import { MutableRefObject } from 'react';

export default function GenderInput({
  ref,
}: {
  ref: MutableRefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <legend>Gender: </legend>
      <label htmlFor="male">male</label>
      <input type="radio" id="male" defaultChecked value="male" ref={ref} />
      <label htmlFor="female">female</label>
      <input type="radio" id="female" value="female" ref={ref} />
    </div>
  );
}
