import Main from 'pages/Main';
import ReactHookFormPage from 'pages/ReactHookForm';
import UncontrolledCompFormPage from 'pages/UncontrolledComponentForm';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Main />}></Route>
      <Route path={'react-hook-form'} element={<ReactHookFormPage />}></Route>
      <Route
        path={'uncontrolled-components-form'}
        element={<UncontrolledCompFormPage />}
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
