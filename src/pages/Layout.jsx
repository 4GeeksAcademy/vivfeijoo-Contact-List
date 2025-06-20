import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Layout;
