import React from "react";
import InfoDiag from "./InfoDiag";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getUsersList,
  deleteUser,
  setSelectedUser
} from "app/redux/actions/UsersActions";
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

let tableIsLoaded = false ;

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UsersTableCard = (props) => {
  const {
    usersList=[],
    getUsersList,
    deleteUser,
    setSelectedUser,
  } = props;
  
  const [open, setOpen] = React.useState(false); // dialog
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError
  const [DeleteUserId, setDeleteUserId] = React.useState(null);

  // ----------------------DialogConfirmation--------

  
  const handleClickOpen = (userId) => {
    setDeleteUserId(userId);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
        if (Math.random() >= 0.2) {
          setTimeout(() => {
            deleteUser(DeleteUserId);
            setOpenSnackSuccess(true) ;

          }, 50);
        } else {
          setTimeout(() => {
            setOpenSnackError(true) ;
      }, 50);
        }
    
      default:
        setOpen(false);
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
  
  if (!tableIsLoaded) {
    console.log("working fine for Users ");
    
    getUsersList();
    tableIsLoaded = true;
    console.log(usersList);
    
  }

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
                Email
              </TableCell>
              {/* <TableCell className="px-0" colSpan={1}>
                LastUpdate
              </TableCell> */}
              <TableCell className="px-0" colSpan={1}>
                State
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    <img
                      className="circular-image-small"
                      src={user.picture}
                      alt="user"
                    />
                    <p className="m-0 ml-8">{user.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  
                  {user.email}
                </TableCell>
                

                <TableCell className="px-0" align="left" colSpan={1}>
                  {user.state ? (
                    user.state === "blocked" ? (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                         Blocked
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                        Unblocked 
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-secondary text-white px-8 py-1 ">
                      Blocked
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  {/* <InfoDiag />
                  <IconButton onClick={handleClickOpen}>
                    <Icon color="error">delete</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="warning">block</Icon>
                  </IconButton> */}
                  <IconButton onClick={()=> handleClickOpen(user.id)}>
                    <Icon color="default">delete</Icon>
                  </IconButton>
                  <InfoDiag clicked={()=> ()=> setSelectedUser(user)} />
                  {/* <ModuleInfoDiag title={"Module Description"} desc={m.description} /> */}
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
        <DialogTitle id="alert-dialog-slide-title">{"Delete Module"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(true)} color="primary">
            Yes
          </Button>
          <Button onClick={()=>handleClose(false)} color="primary">
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
const mapStateToProps = state => ({
  getUsersList : PropTypes.func.isRequired,
  deleteUser : PropTypes.func.isRequired,
  setSelectedUser : PropTypes.func.isRequired,
  usersList : state.users.usersList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getUsersList,
    deleteUser,
    setSelectedUser
  }
)(UsersTableCard);
