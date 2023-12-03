import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">Back Home</Link>
    </>
  );
}
export default NotFoundPage;
