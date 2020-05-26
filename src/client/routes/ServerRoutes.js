import Feeds from "../pages/Feeds";
import Layout from "../containers/Layout/Layout";
const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "/feeds/:pageno",
        exact: true,
        component: Feeds,
      },
    ],
  },
];

export default routes;
