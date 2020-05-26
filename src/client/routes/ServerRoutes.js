import Feeds from "../pages/Feeds";
import Layout from "../containers/Layout/Layout";
const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Feeds,
      },
      {
        path: "/feeds/:pageno",
        component: Feeds,
      },
    ],
  },
];

export default routes;
