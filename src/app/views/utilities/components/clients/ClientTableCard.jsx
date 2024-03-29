import React from "react";
import {
  getProductList,
  setSelectedClient,
  deleteClient
} from "app/redux/actions/ClientActions";
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
  Tooltip
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import VariablesDiag from "./VariablesDiag";
import InfoDiag from "./InfoDiag";

let tableIsLoaded = false ;

//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClientTableCard = (props) => {
  const {
    productList = [],
    getProductList,
    setSelectedClient,
    deleteClient,
  } = props;
  
  const [open, setOpen] = React.useState(false); // dialog
  const [deleteClientId, setDeleteClientId] = React.useState(null);

  // ----------------------DialogConfirmation--------

  const handleClickOpen = (clientId) => {
    setDeleteClientId(clientId);
    setOpen(true);
  };

  const handleClose = (decision = null) => {
    
    switch (decision) {
      case true:
        deleteClient(deleteClientId)
      default:
        setOpen(false);
    } 
  };

  if (!tableIsLoaded) {
    console.log("working fine for clients ");
    getProductList();
    tableIsLoaded = true;
  }
  return (
    <React.Fragment>
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">Clients</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={1}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Host
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Port
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
            {productList.map((client) => (
              <TableRow key={client.id} >
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    <img
                      className="circular-image-small"
                      src={client.image}
                      alt="client"
                    />
                    <p className="m-0 ml-8">{client.clientName}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {client.host}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {client.port}
                </TableCell>
                <TableCell className="px-0" align="left" colSpan={1}>
                  {client.status ? (
                    client.status === "Deployed" ? (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                         Deployed
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                        Not Deployed
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-secondary text-white px-8 py-1 ">
                      Unknown
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  <InfoDiag clicked={()=> setSelectedClient(client)} />
                  <Tooltip title={"Delete client"}>
                    <IconButton onClick={()=> handleClickOpen(client.id)}>
                      <Icon color="default">delete</Icon>
                    </IconButton>
                  </Tooltip>
                  <VariablesDiag clicked={()=> ()=> setSelectedClient(client)} display={1}/>
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
            Do you want to delete this client ?
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
  getProductList : PropTypes.func.isRequired,
  setSelectedClient : PropTypes.func.isRequired,
  deleteClient : PropTypes.func.isRequired,
  // cartList: state.ecommerce.cartList,
  // clientList : state.ecommerce.clientList,
  productList : state.client.productList,
  // selectedClient : state.ecommerce.selectedClient
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    // getCartList, 
    // deleteProductFromCart, 
    // updateCartAmount, 
    getProductList, 
    setSelectedClient,
    deleteClient }
)(ClientTableCard);
