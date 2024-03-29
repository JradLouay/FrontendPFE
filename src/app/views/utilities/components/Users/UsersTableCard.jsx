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
  Slide
} from "@material-ui/core";

let tableIsLoaded = false ;

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UsersTableCard = (props) => {
  const {
    usersList=[],
    getUsersList,
    deleteUser,
    setSelectedUser,
  } = props;
  
  const [open, setOpen] = React.useState(false); // dialog
  const [DeleteUserId, setDeleteUserId] = React.useState(null);
 

  // ----------------------DialogConfirmation--------

  
  const handleClickOpen = (userId) => {
    setDeleteUserId(userId);
    setOpen(true);
  };
  

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
            deleteUser(DeleteUserId);
      default:
        setOpen(false);
    } 
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
                  {
                  // user.state ? (
                    user.blocked ? (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                         Blocked
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                        Unblocked 
                      </small>
                    )
                  }
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  <IconButton onClick={()=> handleClickOpen(user.id)}>
                    <Icon color="default">delete</Icon>
                  </IconButton>
                  <InfoDiag clicked={()=> ()=> setSelectedUser(user)} />
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
