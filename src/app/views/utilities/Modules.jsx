import React from "react";
import { Breadcrumb } from "matx";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setOpenSnackSuccessAdd,
  setOpenSnackErrorAdd
} from "app/redux/actions/ModuleActions";
import ModuleTableCard from "./components/modules/ModuleTableCard";
import AddModuleDiag from "./components/modules/AddModuleDiag";
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


const Modules = (props) => {
  const {
    operation,
    openSnackSuccessAdd,
    openSnackErrorAdd,  
    setOpenSnackSuccessAdd,
    setOpenSnackErrorAdd,
  } = props;

  const handleCloseSnackSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackSuccessAdd(false); // ijiw mel actions 
  };
  const handleCloseSnackError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackErrorAdd(false);
  };

  return (
    <div className="m-sm-30">
            <div className="mb-sm-30">
              <Breadcrumb
                routeSegments={[
                  { name: "Utilities", path: "/utilities" },
                  { name: "Modules" }
                ]}
              />
            </div>
            <Card elevation={6} className="px-24 py-20 h-100">
              {/* <div className="card-title">Clients</div> */}
              {/* <div className="card-subtitle mb-24">Client_1</div> */}
              <CardContent>
                <ModuleTableCard />
              </CardContent>
              <CardActions>
                <AddModuleDiag />
              </CardActions>
            </Card>
            <Snackbar open={openSnackSuccessAdd} autoHideDuration={2000} onClose={handleCloseSnackSuccess}>
                <Alert onClose={handleCloseSnackSuccess} severity="success">
                  Module {operation} successfully!
                </Alert>
              </Snackbar>
              <Snackbar open={openSnackErrorAdd} autoHideDuration={2000} onClose={handleCloseSnackError}>
                <Alert onClose={openSnackErrorAdd} severity="Error">
                  An Error has been occurred!
                </Alert>
              </Snackbar>
    </div>
  );
};

const mapStateToProps = state => ({
  // getProductList : PropTypes.func.isRequired,
  setOpenSnackSuccessAdd : PropTypes.func.isRequired,
  setOpenSnackErrorAdd : PropTypes.func.isRequired,
  operation : state.module.operation,
  openSnackSuccessAdd : state.module.openSnackSuccessAdd,
  openSnackErrorAdd : state.module.openSnackErrorAdd
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    setOpenSnackSuccessAdd,
    setOpenSnackErrorAdd
  }
)(Modules);
