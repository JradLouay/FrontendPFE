import React from "react";
import {
  getModulesList,
  deleteModule,
  setSelectedModule
} from "app/redux/actions/ModuleActions";
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
  Slide
} from "@material-ui/core";
import ModuleInfoDiag from "./ModuleInfoDiag";
import EditDiag from "./editDiag";

let tableIsLoaded = false ;

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModuleTableCard = (props) => {
  const {
    modulesList=[],
    getModulesList,
    deleteModule,
    setSelectedModule,
  } = props;
  
  const [open, setOpen] = React.useState(false); // dialog
  const [deleteModuleId, setDeleteModuleId] = React.useState(null);

  // ----------------------DialogConfirmation--------

  const handleClickOpen = (moduleId) => {
    setDeleteModuleId(moduleId);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
            deleteModule(deleteModuleId);
      default:
        setOpen(false);
    } 
  };

  if (!tableIsLoaded) {
    console.log("working fine for modules ");
    
    getModulesList();
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
                    {/* <ModuleInfoDiag title={"Module Description"} desc={m.description} /> */}
                    <EditDiag clicked={()=> ()=> setSelectedModule(m)} />
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
      </React.Fragment>
  );
};

const mapStateToProps = state => ({
  // getProductList : PropTypes.func.isRequired,
  getModulesList : PropTypes.func.isRequired,
  deleteModule : PropTypes.func.isRequired,
  setSelectedModule : PropTypes.func.isRequired,
  modulesList : state.module.modulesList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList,
    deleteModule,
    setSelectedModule
  }
)(ModuleTableCard);
