import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import './app.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
