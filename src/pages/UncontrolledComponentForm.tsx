import { useRef, useState } from 'react';
import { inputsArr } from '../components/inputsArr';
import countPasswordStrength from '../utils/countPasswordStrength';
import { validationSchema } from 'utils/validation';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { dataListSlice } from 'store/formData.slice';
import FormInput from '../components/uncontrolled-form/FormInput';

const UncontrolledCompFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addNewSubmit } = dataListSlice.actions;
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLSelectElement>(null);
  const countriesRef = useRef<HTMLInputElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const inputRefsArr = [
    nameInputRef,
    ageInputRef,
    emailInputRef,
    imageInputRef,
    acceptRef,
  ];

  const handleSubmit = async () => {
    const name = nameInputRef.current?.value;
    const age = Number(ageInputRef.current?.value);
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const passwordRepeat = passwordRepeatRef.current?.value;
    const accept = acceptRef.current?.checked;
    const gender = genderInputRef.current?.value;
    const image = imageInputRef.current?.files;
    const country = countriesRef.current?.value;
    try {
      await validationSchema.validate(
        {
          name,
          age,
          email,
          password,
          passwordRepeat,
          accept,
          gender,
          image,
          country,
        },
        { abortEarly: false }
      );
      dispatch(
        addNewSubmit({
          name,
          age,
          email,
          password,
          passwordRepeat,
          accept,
          gender,
          image,
          country,
        })
      );
      navigate('/', { state: { from: 'uncontrolled-components-form' } });
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors: Record<string, string> = {};
        error.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
        setFormErrors(errors);
      }
    } finally {
      countPasswordStrength(passwordInputRef.current?.value || '').then(
        (strength) => {
          setPasswordStrength(strength);
        }
      );
    }
  };

  return (
    <>
      <h2>Uncontrolled Components Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {inputsArr.map((item, ind) => {
          return (
            <FormInput
              key={ind}
              labelText={item.labelText}
              inputType={item.inputType}
              name={item.name}
              inputId={item.inputId}
              inputRef={inputRefsArr[ind]}
              error={formErrors[item.name]}
            />
          );
        })}
        <div>
          <div>
            <label htmlFor="countries">Countries:</label>
            <input
              id="countries"
              type="text"
              placeholder="Choose country..."
              list="countries-list"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-start input-container">
          <label htmlFor="gender">Gender:</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default UncontrolledCompFormPage;
