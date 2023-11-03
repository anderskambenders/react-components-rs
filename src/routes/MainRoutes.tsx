import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
// import Card from '../components/card/Card';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />}></Route>
    </Routes>
  );
};

export default MainRoutes;
