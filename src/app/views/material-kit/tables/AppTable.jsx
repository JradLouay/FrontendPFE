import React from "react";
import SimpleTable from "./SimpleTable";
import { Breadcrumb, SimpleCard } from "matx";
import PaginationTable from "./PaginationTable";

const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div  className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" }
          ]}
        />
      </div>
      <SimpleCard title="Simple Table">
        <SimpleTable />
      </SimpleCard>
      <div className="py-12" />
      <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard>
    </div>
  );
};

export default AppTable;
