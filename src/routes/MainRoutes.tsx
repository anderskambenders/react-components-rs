import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CardDetail from '../components/card-detail/CardDetail';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} path={'/'} element={<MainPage />}>
      <Route path={`about/:productId`} element={<CardDetail />}></Route>
    </Route>
  )
);

export default router;
