import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
