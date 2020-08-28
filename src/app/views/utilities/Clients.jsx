import React from "react";
import { Breadcrumb } from "matx";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setOpenSnackSuccess,
  setOpenSnackError
} from "app/redux/actions/ClientActions";
import ClientTableCard from "./components/clients/ClientTableCard";
import AddClientDiag from "./components/clients/AddClientDiag";
import {
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

const Clients = (props) => {

  const {
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
                  { name: "Clients" }
                ]}
              />
            </div>
            <Card elevation={6} className="px-24 py-20 h-100">
              <CardContent>
                <ClientTableCard />
              </CardContent>
              <CardActions>
                <AddClientDiag />
              </CardActions>
            </Card>
            <Snackbar open={openSnackSuccess} autoHideDuration={10000} onClose={handleCloseSnackSuccess}>
              <Alert onClose={handleCloseSnackSuccess} severity="success">
                Client {operation} successfully!
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
  setOpenSnackSuccess : PropTypes.func.isRequired,
  setOpenSnackError : PropTypes.func.isRequired,
  operation : state.client.operation,
  openSnackSuccess : state.client.openSnackSuccess,
  openSnackError : state.client.openSnackError
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    setOpenSnackSuccess,
    setOpenSnackError
  }
)(Clients);
