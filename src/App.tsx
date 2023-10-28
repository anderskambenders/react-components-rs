import MainPage from './pages/MainPage';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
