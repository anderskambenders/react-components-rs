import { useAppDispatch } from '../store/hooks';
import { formInputs } from '../components/formInputs';
import './form.css';
import { dataListSlice } from '../store/formData.slice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ReactHookFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
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
        {formInputs.map((item) => {
          return (
            <div key={`react-hook-form-${item.name}`}>
              <div>
                <label htmlFor={item.inputId}>{item.lableText}:</label>
                <input
                  id={item.inputId}
                  type={item.inputType}
                  {...register(item.name)}
                />
                <div />
              </div>
            </div>
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
              {...register('country')}
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-start input-container">
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
