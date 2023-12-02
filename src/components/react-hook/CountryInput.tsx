import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { FormDataKeys, IData } from '../../types';
import { useAppSelector } from '../../store/hooks';

const CountriesInput = ({
  error,
  register,
}: {
  error?: string;
  register: (
    name: FormDataKeys,
    options?: RegisterOptions<IData, FormDataKeys> | undefined
  ) => UseFormRegisterReturn<FormDataKeys>;
}) => {
  const countries = useAppSelector((state) => state.countriesReducer.countries);
  return (
    <div className="flex flex-col items-start justify-start w-full form-item">
      <div className="relative flex flex-col w-full items-start input-container">
        <label htmlFor="countries">Countries:</label>
        <input
          id="countries"
          type="text"
          className="w-full"
          placeholder="Choose country..."
          {...register(FormDataKeys.country)}
          list="countries-list"
        />
        <datalist id="countries-list">
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </datalist>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CountriesInput;
