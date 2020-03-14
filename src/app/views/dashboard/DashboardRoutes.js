import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = MatxLoadable({
  loader: () => import("./Analytics")
});
const ClientModule = MatxLoadable({
  loader: () => import("./ClientModule")
});
const Scheduler = MatxLoadable({
  loader: () => import("./Scheduler")
});


const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: Analytics,
    // auth: authRoles.admin
  },
  {
    path: "/dashboard/ClientModule",
    component: ClientModule
  },
  {
    path: "/dashboard/Scheduler",
    component: Scheduler
  },
];

export default dashboardRoutes;
