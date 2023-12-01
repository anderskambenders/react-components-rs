import { formInputs } from '../components/formInputs';

const UncontrolledCompFormPage = () => {
  return (
    <>
      <h2>React Hook Form</h2>
      <form>
        {formInputs.map((item) => {
          return (
            <div key={`react-hook-form-${item.name}`}>
              <div>
                <label htmlFor={item.inputId}>{item.lableText}:</label>
                <input id={item.inputId} type={item.inputType} />
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
