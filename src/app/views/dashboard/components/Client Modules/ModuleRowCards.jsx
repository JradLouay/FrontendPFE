import React, { Component, Fragment } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Button,
  Dialog ,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle ,
  Slide,
  Snackbar
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getClientModulesList,
  deleteClientModule
  
} from "app/redux/actions/EcommerceActions";
import MuiAlert from '@material-ui/lab/Alert';
import  ModuleInfoDiag  from "../shared/ModuleInfoDiag";

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ModuleRowCards = (props) => {
  

  const {
      globalClient,
      clientModules,
      getClientModulesList,
      deleteClientModule

  }=props;

  const [open, setOpen] = React.useState(false); // dialog
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError
  const [moduleId, setModuleId] = React.useState(null);


  React.useEffect(() => {
    getClientModulesList(globalClient.id);
    return () => {
    
    };
  }, [globalClient]);
  // ----------------------DialogConfirmation--------

  const handleClickOpen = (id) => {
    setModuleId(id);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
        if (Math.random() >= 0.1) {
          setTimeout(() => {
            deleteClientModule(moduleId, globalClient.id );
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

 return   (
   <Fragment> 
        {clientModules.map(mod =>(
            <Fragment key={mod.id}>
            <Card className="py-8 px-4 project-card">
              <Grid container alignItems="center">
                <Grid item md={4} xs={5}>
                    <span className="card__roject-name font-weight-500">
                      Module 
                    </span>
                    <div className="text-muted">
                      {mod.moduleName}
                    </div>
                </Grid>

                <Grid item md={3} xs={4}>
                    <span className="card__roject-name font-weight-500">
                            Version 
                        </span>
                        <div className="text-muted">
                          {mod.version}
                        </div>
                  </Grid>

                <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                      Last Update 
                  </span>
                  <div className="text-muted">
                    {mod.lastUpdate}
                  </div>
                </Grid>
                        
                <Grid item xs={2}>
                  <div className="flex flex-end">
                        <IconButton onClick={()=>handleClickOpen(mod.id)}>
                          <Icon color="default">delete</Icon>
                        </IconButton>
                        <ModuleInfoDiag title={"Module Description"} desc={mod.description} />
                  </div>
                  
                </Grid>
              </Grid>
            </Card>
            <div className="py-8" />
          </Fragment>
      ))}
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
            Do you want to delete this Module ?
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
      <Snackbar open={openSnackSuccess} autoHideDuration={2000} onClose={handleCloseSnackSuccess}>
        <Alert onClose={handleCloseSnackSuccess} severity="success">
          Module Deleted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackError} autoHideDuration={2000} onClose={handleCloseSnackError}>
        <Alert onClose={handleCloseSnackError} severity="Error">
          An Error has been occurred!
        </Alert>
      </Snackbar>
    </Fragment>
  );  
  

  
  
  
};


const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
  clientModules : state.ecommerce.clientModules,
  getClientModulesList : PropTypes.func.isRequired,
  deleteClientModule : PropTypes.func.isRequired,
  modulesList: state.ecommerce.modulesList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getClientModulesList,
    deleteClientModule
    }
)(ModuleRowCards);
