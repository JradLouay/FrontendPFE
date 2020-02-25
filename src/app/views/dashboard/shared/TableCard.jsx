import React, { Component } from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const TableCard = () => {
  const Modules = [
    {
      
      name: "earphone",
      version: 1.2,
      lastUpdate: 15,
      state: "deployed"
      
    },
    {
      name: "earphone",
      version: 1.5,
      lastUpdate: 30,
      state: "deployed"
    },
    {
      name: "iPhone x",
      version: 2.0,
      lastUpdate: 35,
      state: "deployed"
    },
    {
      name: "iPhone x",
      version: 1.3,
      lastUpdate: 0,
      
    }
  ];

  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">deployed Modules</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={1}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Version
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                LastUpdate
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                State
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Modules.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    {/* <img
                      className="circular-image-small"
                      src={product.imgUrl}
                      alt="user"
                    /> */}
                    <p className="m-0 ml-8">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  $
                  {product.version > 999
                    ? (product.version / 1000).toFixed(1) + "k"
                    : product.version}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {product.lastUpdate}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={1}>
                  {product.state ? (
                    product.state === "deployed" ? (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                         Deployed
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                        Not Deployed
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-secondary text-white px-8 py-1 ">
                      Unknown
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  {/* <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton> */}
                  <IconButton>
                    <Icon color="error">stop</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="green">play_arrow</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TableCard;
