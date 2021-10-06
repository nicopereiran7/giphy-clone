// LAYOUT
import LayoutBasic from "../layouts/LayoutBasic";

// BASIC PAGES
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/upload",
        component: Upload,
        exact: true,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];

export default routes;
