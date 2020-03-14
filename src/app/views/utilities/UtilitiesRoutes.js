import {MatxLoadable} from "matx";

const Clients = MatxLoadable({
  loader: () => import("./Clients")
});
const Users = MatxLoadable({
  loader: () => import("./Users")
});
const ClientModules = MatxLoadable({
  loader: () => import("./Modules")
});

const utilitiesRoutes = [
  {
    path: '/utilities/Clients',
    component: Clients
  },
  {
    path: "/utilities/Users",
    component: Users
  },
  {
    path: "/utilities/modules",
    component: ClientModules
  },
]

export default utilitiesRoutes;