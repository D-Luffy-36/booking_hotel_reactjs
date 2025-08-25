import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      {/* header */}
      <Outlet />
      {/* footer */}
    </>
  );
};

export default AdminLayout;
