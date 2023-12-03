import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/uncontrolled-components-form">
          Uncontrolled components form
        </NavLink>
        <NavLink to="/react-hook-form">React Hook Form</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
