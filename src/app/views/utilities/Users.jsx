import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import UsersTableCard from './components/Users/UsersTableCard';
import AddUserDiag from './components/Users/AddUserDiag';
import {
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";

const Users = () => {
  const classList = [];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Users" }
          ]}
        />
      </div>
      <Card elevation={6} className="px-24 py-20 h-100">
        <div className="card-title">Users</div>
        {/* <div className="card-subtitle mb-24">Client_1</div> */}
        <CardContent>
          <UsersTableCard />
        </CardContent>
        <CardActions>
          <AddUserDiag />
        </CardActions>
      </Card>

    </div>
  );
};

export default Users;
