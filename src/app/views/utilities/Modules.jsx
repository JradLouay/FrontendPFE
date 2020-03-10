import React from "react";
import { Breadcrumb } from "matx";
import ClientTableCard from "./components/modules/ClientTableCard";
import AddClientDiag from "./components/modules/AddClientDiag";
import {
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";


const Modules = () => {
  return (
    <div className="m-sm-30">
            <div className="mb-sm-30">
              <Breadcrumb
                routeSegments={[
                  { name: "Utilities", path: "/utilities" },
                  { name: "Modules" }
                ]}
              />
            </div>
            <Card elevation={6} className="px-24 py-20 h-100">
              {/* <div className="card-title">Clients</div> */}
              {/* <div className="card-subtitle mb-24">Client_1</div> */}
              <CardContent>
                <ClientTableCard />
              </CardContent>
              <CardActions>
                <AddClientDiag />
              </CardActions>
            </Card>
    </div>
  );
};

export default Modules;
