import { useEffect, useRef, useState } from 'react';
import { inputsArr } from '../components/inputsArr';
import countPasswordStrength from '../utils/countPasswordStrength';
import { validationSchema } from '../utils/validation';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { dataListSlice } from '../store/formData.slice';
import FormInput from '../components/uncontrolled-form/FormInput';
import PasswordInput from '../components/uncontrolled-form/PasswordInput';
import CountryInput from '../components/uncontrolled-form/CountryInput';
import GenderInput from '../components/uncontrolled-form/GenderInput';
import imageToBase64 from '../utils/imageToBase64';
import './form.css';

const UncontrolledCompFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addNewSubmit, setNewFormSubmitted } = dataListSlice.actions;
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    dispatch(setNewFormSubmitted(false));
  }, [dispatch]);

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

      const image64 =
        imageInputRef?.current && imageInputRef.current?.files
          ? await imageToBase64(imageInputRef.current.files[0])
          : '';
      dispatch(
        addNewSubmit({
          name,
          age,
          email,
          password,
          passwordRepeat,
          accept,
          gender,
          image: image64,
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
        <PasswordInput
          passwordRef={passwordInputRef}
          passwordRepeatRef={passwordRepeatRef}
          strength={passwordStrength}
          error={{
            errorPassword: formErrors['password'],
            errorPasswordRepeat: formErrors['passwordRepeat'],
          }}
        />
        <CountryInput countryRef={countriesRef} error={formErrors['country']} />
        <GenderInput genderRef={genderInputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default UncontrolledCompFormPage;
