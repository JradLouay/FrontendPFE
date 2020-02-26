import React, { Component } from "react";
import InfoDiag from "./InfoDiag";
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

const UsersTableCard = () => {
  const Modules = [
    {
      
      name: "user_1",
      userName: "user1" ,
      lastUpdate: '03/02/2019',
      state: "blocked"
      
    },
    {
      name: "user_2",
      userName: "user2",
      lastUpdate: '14/02/2020',
      state: "blocked"
    },
    {
      name: "user_3",
      userName: "user3",
      lastUpdate: '14/02/2018',
      state: "blocked"
    }
  ];

  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">Users</div>
      <div className="overflow-auto">
        <Table className="m-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={1}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Username
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
            {Modules.map((m, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    {/* <img
                      className="circular-image-small"
                      src={m.imgUrl}
                      alt="user"
                    /> */}
                    <p className="m-0 ml-8">{m.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  
                  {m.userName > 999
                    ? (m.userName / 1000).toFixed(1) + "k"
                    : m.userName}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {m.lastUpdate}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={1}>
                  {m.state ? (
                    m.state === "blocked" ? (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                         blocked
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                        Unblocked 
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default UsersTableCard;
