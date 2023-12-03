import { MutableRefObject } from 'react';

export default function GenderInput({
  genderRef,
}: {
  genderRef: MutableRefObject<HTMLInputElement | null>;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <legend style={{ marginRight: 10 }}>Gender: </legend>
      <label htmlFor="male">male</label>
      <input
        type="radio"
        id="male"
        defaultChecked
        value="male"
        ref={genderRef}
      />
      <label htmlFor="female">female</label>
      <input type="radio" id="female" value="female" ref={genderRef} />
    </div>
  );
}
