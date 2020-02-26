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
import VariablesDiag from "./VariablesDiag";
import InfoDiag from "./InfoDiag";

const ClientTableCard = () => {
  const Modules = [
    {
      
      name: "Client_1",
      version: 1.2 ,
      lastUpdate: '03/02/2019',
      state: "deployed"
      
    },
    {
      name: "Client_2",
      version: 1.5,
      lastUpdate: '14/02/2020',
      state: "deployed"
    },
    {
      name: "Client_3",
      version: 2.0,
      lastUpdate: '14/02/2018',
      state: "deployed"
    },
    {
      name: "Client_4",
      version: 1.3,
      lastUpdate: '14/02/2017' 
      
    }
  ];

  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">Clients</div>
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
                  
                  <InfoDiag />
                  <IconButton>
                    <Icon color="error">delete</Icon>
                  </IconButton>
                  <VariablesDiag />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ClientTableCard;
