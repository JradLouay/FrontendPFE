import React, { Component } from "react";
import InfoDiag from "./InfoDiag";
import {
  Card,
  Button,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog ,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle ,
  Slide,
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [open, setOpen] = React.useState(false); // dialog
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError

  // ----------------------DialogConfirmation--------

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (Math.random() >= 0.7) {
      setTimeout(() => {
        setOpenSnackSuccess(true) ;
      }, 500);
    } else {
      setTimeout(() => {
        setOpenSnackError(true) ;
  }, 500);
    }
  
  };
  // -----------------------snack-------------------

  const handleCloseSnackSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackSuccess(false);
  };
  const handleCloseSnackError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackError(false);
  };

  return (
    <React.Fragment> 
    <Card elevation={3} className="pt-20 mb-24">
      {/* <div className="card-title px-24 mb-12">Users</div> */}
      <div className="overflow-auto">
        <Table className="product-table">
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
                  <IconButton onClick={handleClickOpen}>
                    <Icon color="error">delete</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="warning">block</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
    {/* FeedBack */}
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackSuccess} autoHideDuration={4000} onClose={handleCloseSnackSuccess}>
        <Alert onClose={handleCloseSnackSuccess} severity="success">
          User Deleted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackError} autoHideDuration={4000} onClose={handleCloseSnackError}>
        <Alert onClose={handleCloseSnackError} severity="Error">
          An Error has been occurred!
        </Alert>
      </Snackbar>
      
    </React.Fragment>
  );
};

export default UsersTableCard;
