import React from "react";
import {
  getModulesList,
  deleteModule,
  setSelectedModule,
  deleteClient
} from "app/redux/actions/EcommerceActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog ,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle ,
  Slide,
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import InfoDiag from "./InfoDiag";

let tableIsLoaded = false ;

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ModuleTableCard = (props) => {
  const {
    // productList = [],
    modulesList=[],
    getModulesList,
    deleteModule,
    setSelectedModule,
    deleteClient,
  } = props;
  
  const [open, setOpen] = React.useState(false); // dialog
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError
  const [deleteModuleId, setDeleteModuleId] = React.useState(null);

  // ----------------------DialogConfirmation--------

  const handleClickOpen = (moduleId) => {
    setDeleteModuleId(moduleId);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
        if (Math.random() >= 0.2) {
          setTimeout(() => {
            deleteModule(deleteModuleId);
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
    getModulesList();
    // console.log(modulesList);
    
    tableIsLoaded = true;
  }
  return (
    <React.Fragment>
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">Modules</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={1}>
                Module Name
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Version
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                LastUpdate
              </TableCell>
              {/* <TableCell className="px-0" colSpan={1}>
                State
              </TableCell> */}
              <TableCell className="px-0" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modulesList.map((m) => (
              <TableRow key={m.id} >
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    <p className="m-0 ml-8">{m.moduleName}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {m.version}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {m.lastUpdate}
                </TableCell>

                <TableCell className="px-0" colSpan={1}>
                  
                  
                  <InfoDiag clicked={()=> ()=> setSelectedModule(m)} />
                  <IconButton onClick={()=> handleClickOpen(m.id)}>
                    <Icon color="default">delete</Icon>
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
        <DialogTitle id="alert-dialog-slide-title">{"Delete Module"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete this module ?
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
          Module Deleted successfully!
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
  // getProductList : PropTypes.func.isRequired,
  getModulesList : PropTypes.func.isRequired,
  deleteModule : PropTypes.func.isRequired,
  setSelectedModule : PropTypes.func.isRequired,
  deleteClient : PropTypes.func.isRequired,
  modulesList : state.ecommerce.modulesList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList,
    deleteModule,
    setSelectedModule,
    deleteClient }
)(ModuleTableCard);
