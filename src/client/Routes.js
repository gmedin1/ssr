import React from "react";
import HomePage from "./pages/HomePage.jsx";
import UsersListPage, { loadData } from "./pages/UsersListPage.jsx";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage,
    path: "/users",
  },
];
