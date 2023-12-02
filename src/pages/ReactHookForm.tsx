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

const ReactHookFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
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
        />
        <div>
          <div>
            <label htmlFor="countries">Countries:</label>
            <input
              id="countries"
              type="text"
              placeholder="Choose country..."
              list="countries-list"
              {...register('country')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default ReactHookFormPage;
