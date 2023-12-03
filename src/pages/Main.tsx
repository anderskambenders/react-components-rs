import { useAppSelector } from '../store/hooks';
import './main.css';

const Main = () => {
  const { dataList } = useAppSelector((state) => state.dataListReducer);

  if (dataList.length === 0) {
    return <h3>{`You haven't entered any data`}</h3>;
  }

  console.log(dataList);

  return (
    <>
      {dataList.map((item, index) => (
        <div key={index}>
          <div className="image__container">
            <img className="image" src={item.image} />
          </div>
          <ul>
            <li> Name: {item.name}</li>
            <li> Age: {item.age}</li>
            <li>Email: {item.email}</li>
            <li>Password: {item.password}</li>
            <li>Confirm password: {item.passwordRepeat}</li>
            <li>Country: {item.country}</li>
            <li>Gender: {item.gender}</li>
            <li> Accept T&C: {item.accept ? 'true' : 'false'} </li>
          </ul>
        </div>
      ))}
    </>
  );
};
export default Main;
