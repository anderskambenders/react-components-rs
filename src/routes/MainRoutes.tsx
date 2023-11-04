import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Card from '../components/card/Card';
import { loader } from '../components/card/Card';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<MainPage />}>
      <Route
        path={`about/:peopleId`}
        element={<Card />}
        loader={loader}
      ></Route>
    </Route>
  )
);

export default router;
