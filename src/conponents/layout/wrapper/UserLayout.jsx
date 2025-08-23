import React from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../PageWrapper";

export const UserLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default UserLayout;
