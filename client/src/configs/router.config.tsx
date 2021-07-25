import CreateUser from "../containers/createUser";
import PageNotFound from "../containers/pageNotFound";
import UpdatePassword from "../containers/updatePassword";
import UserList from "../containers/userList";

const routes = [
  {
    path: "/",
    isExact: true,
    module: CreateUser,
  },
  {
    path: "/user-list",
    isExact: true,
    module: UserList,
  },
  {
    path: "/update-password",
    isExact: true,
    module: UpdatePassword,
  },
  {
    path: "*",
    isExact: true,
    module: PageNotFound,
  },
];

export default routes;
