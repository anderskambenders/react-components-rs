import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CardDetail, { loader } from '../components/card-detail/CardDetail';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} path={'/'} element={<MainPage />}>
      <Route
        path={`about/:productId`}
        element={<CardDetail />}
        loader={loader}
      ></Route>
    </Route>
  )
);

export default router;
