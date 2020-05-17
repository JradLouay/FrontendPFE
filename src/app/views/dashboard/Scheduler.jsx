import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setOpenSnackSuccess,
  setOpenSnackError
} from "app/redux/actions/SchedulerActions";
// import Highlight from "react-highlight";
import RowCards from './components/Scheduler/RowCards';
import ScheduleDialog from './components/Scheduler/ScheduleDialog';
import {
  // Icon,
  // Button,
  // CircularProgress,
  // IconButton,
  // Fab,
  Card,
  CardActions,
  CardContent,
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Scheduler  = (props) => {

  const {
    globalClient,
    operation,
    openSnackSuccess,
    openSnackError,  
    setOpenSnackSuccess,
    setOpenSnackError,
  } = props;

  const handleCloseSnackSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackSuccess(false); // ijiw mel actions 
  };
  const handleCloseSnackError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackError(false);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: globalClient.clientName ? globalClient.clientName : "undefined" }
          ]}
        />
      </div>
      <Card elevation={6} xs={3} className="px-24 py-20 h-100">
        <div className="card-title">Scheduler </div>
        <div className="card-subtitle mb-24">{globalClient.clientName ? globalClient.clientName : ""}</div>
        <CardContent>
          <RowCards />
        </CardContent>
        <CardActions>
        
          <div zIndex="left">
          <ScheduleDialog showButton={globalClient.clientName ? false : true} />
          </div>
        </CardActions>


      </Card>
      <Snackbar open={openSnackSuccess} autoHideDuration={2000} onClose={handleCloseSnackSuccess}>
              <Alert onClose={handleCloseSnackSuccess} severity="success">
                Scheduler {operation} successfully!
              </Alert>
            </Snackbar>
            <Snackbar open={openSnackError} autoHideDuration={2000} onClose={handleCloseSnackError}>
              <Alert onClose={openSnackError} severity="Error">
                An Error has been occurred!
              </Alert>
            </Snackbar>
    </div>
  );
};

const mapStateToProps = state => ({
  globalClient : state.client.globalClient,
  setOpenSnackSuccess : PropTypes.func.isRequired,
  setOpenSnackError : PropTypes.func.isRequired,
  operation : state.scheduler.operation,
  openSnackSuccess : state.scheduler.openSnackSuccess,
  openSnackError : state.scheduler.openSnackError
});
export default   connect(
  mapStateToProps,
 {
  setOpenSnackSuccess,
  setOpenSnackError
 }
)(Scheduler);
