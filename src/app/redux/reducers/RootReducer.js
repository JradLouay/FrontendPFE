import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import ClientReducer from "./ClientReducer";
import VariableReducer from "./VariableReducer";
import ModuleReducer from "./ModuleReducer";
import UsersReducer from "./UsersReducer";
import SchedulerReducer from "./SchedulerReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer, // bech yetna7aw
  notification: NotificationReducer, //
  ecommerce: EcommerceReducer,
  client: ClientReducer,
  variable: VariableReducer,
  module: ModuleReducer,
  users: UsersReducer,
  scheduler: SchedulerReducer
});

export default RootReducer;
