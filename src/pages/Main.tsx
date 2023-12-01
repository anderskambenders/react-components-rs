import { useAppSelector } from '../store/hooks';

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
          <div>
            <img src={item.image} />
          </div>
          <ul>
            <li> Name: {item.name}</li>
            <li> Age: {item.age}</li>
            <li>Email: {item.email}</li>
            <li>Password: {item.password}</li>
            <li>Confirm password: {item.confirmPassword}</li>
            <li>Country: {item.country}</li>
            <li>Gender: {item.gender}</li>
            <li> Accept T&C: {item.tc} </li>
          </ul>
        </div>
      ))}
    </>
  );
};
export default Main;
