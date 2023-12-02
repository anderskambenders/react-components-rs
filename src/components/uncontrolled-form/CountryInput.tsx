import { useAppSelector } from '../../store/hooks';
import { MutableRefObject } from 'react';

const CountriesInput = ({
  ref,
  error,
}: {
  ref: MutableRefObject<HTMLInputElement | null>;
  error?: string;
}) => {
  const countries = useAppSelector((state) => state.countriesReducer.countries);
  return (
    <div>
      <div>
        <label htmlFor="countries">Countries:</label>
        <input
          id="countries"
          type="text"
          className="w-full"
          placeholder="Choose country..."
          list="countries-list"
          ref={ref}
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
