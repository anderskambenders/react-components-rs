import { useAppDispatch } from '../store/hooks';
import PasswordInput from '../components/react-hook/PasswordInput';
import { inputsArr } from '../components/inputsArr';
import './form.css';
import { dataListSlice } from '../store/formData.slice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormInput from '../components/react-hook/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validation';
import CountriesInput from '../components/react-hook/CountryInput';
import GenderInput from '../components/react-hook/GenderInput';

const ReactHookFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  const { addNewSubmit } = dataListSlice.actions;

  const onSubmit = handleSubmit((data) => {
    dispatch(addNewSubmit(data));
    navigate('/', { state: { from: 'react-hook-form' } });
  });

  return (
    <>
      <h2>React Hook Form</h2>
      <form onSubmit={onSubmit}>
        {inputsArr.map((item, ind) => {
          return (
            <FormInput
              key={ind}
              props={item}
              error={errors[item.name]?.message}
              register={register}
            ></FormInput>
          );
        })}
        <PasswordInput
          error={{
            errorPassword: errors.password?.message,
            errorPasswordRepeat: errors.passwordRepeat?.message,
          }}
          register={register}
          watchPassword={watch('password')}
        />
        <div>
          <CountriesInput error={errors.country?.message} register={register} />
        </div>
        <GenderInput register={register} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default ReactHookFormPage;
