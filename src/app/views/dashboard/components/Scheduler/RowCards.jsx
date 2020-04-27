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
  getSchedulerList,
  deleteScheduler

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

const RowCards = (props) => {


  const {
    schedulerList,
    globalClient,
    getSchedulerList,
    deleteScheduler
  } = props;

  const [open, setOpen] = React.useState(false); // dialog
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError
  const [schedulerId, setSchedulerId] = React.useState(null);


  React.useEffect(() => {
    getSchedulerList(globalClient.id);
    return () => {

    };
  }, [globalClient]);

  // ----------------------DialogConfirmation--------

  const handleClickOpen = (id) => {
    setSchedulerId(id);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
        if (Math.random() >= 0.1) {
          setTimeout(() => {
            deleteScheduler(schedulerId, globalClient.id );
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

  return  (
    <Fragment>
          { schedulerList.map(scheduler =>(
          <Fragment key={scheduler.id}>
            <Card className="py-8 px-4 project-card">
              <Grid container alignItems="center">
                <Grid item md={2} xs={3}>
                  <span className="card__roject-name font-weight-500">
                    Name
                    </span>
                  <div className="text-muted">
                    {scheduler.schedulerName}
                  </div>
                </Grid>

                <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                    Update Date
                        </span>
                  <div className="text-muted">
                    { new Date(scheduler.date)
                          .toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </Grid>

                <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                    Update Time
                  </span>
                  <div className="text-muted">
                    {new Date(scheduler.time)
                          .toLocaleTimeString('it-IT')}
                  </div>
                </Grid>
                <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                    Status
                  </span>
                  <div className="text-muted">
                    {scheduler.status}
                  </div>
                </Grid>

                <Grid item xs={1}>
                  <div className="flex flex-end">
                    {scheduler.status === "PENDING" ? 
                    <IconButton onClick={() => { handleClickOpen(scheduler.id)}}>
                      <Icon color="default">delete</Icon>
                    </IconButton> : ""}
                    <ModuleInfoDiag title={"Scheduler Description"} desc={scheduler.description} />
                  </div>

                </Grid>
              </Grid>
            </Card>
            <div className="py-8" />
          </Fragment>)) }
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
            Do you want to delete this Update ?
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
          Update Deleted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackError} autoHideDuration={2000} onClose={handleCloseSnackError}>
        <Alert onClose={handleCloseSnackError} severity="Error">
          An Error has been occurred!
        </Alert>
      </Snackbar>
    </Fragment>
  )
};


const mapStateToProps = state => ({
  schedulerList: state.ecommerce.schedulerList,
  globalClient: state.ecommerce.globalClient,
  getSchedulerList : PropTypes.func.isRequired,
  deleteScheduler : PropTypes.func.isRequired
  // user: state.user
});
export default connect(
  mapStateToProps,
  {
    getSchedulerList,
    deleteScheduler
  }
)(RowCards);
