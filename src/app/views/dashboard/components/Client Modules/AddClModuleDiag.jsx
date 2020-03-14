import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  Fab,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import {
  getModulesList,
  addModuleToClient
} from 'app/redux/actions/EcommerceActions'

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));


 function AddClModuleDiag(props) {

  const {
    globalClient,
    getModulesList,
    addModuleToClient,
    modulesList
  }= props ;


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState("xs");

  function handleClickOpen() {
    setOpen(true);
  }
  function handleModuleClick(newModule) {
    addModuleToClient(globalClient.id, newModule);
  }

  function handleClose() {
    setOpen(false);
  }

 

  return (
    <Fragment>
      
      <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={ ()=>{ 
                    getModulesList();  
                    handleClickOpen();
                    }  }
        >
          <Icon>add</Icon>
        </Fab>
      
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >     
        <DialogTitle id="max-width-dialog-title">Add a module</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Choose a module to add to the client .
              </DialogContentText>
              <List>
                    {modulesList.map(mod => (
                    <ListItem button onClick={() => handleModuleClick(mod)} key={mod.id}>
                        <ListItemText primary={"Name"} secondary={mod.moduleName} />
                        <ListItemText primary={"version"} secondary={mod.version} />
                    </ListItem>
                    ))}

                    {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                        <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                    </ListItem> */}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
            </DialogActions>
      </Dialog>
    </Fragment>
  );
}


const mapStateToProps = state => ({
  getModulesList : PropTypes.func.isRequired,
  addModuleToClient: PropTypes.func.isRequired,
  globalClient : state.ecommerce.globalClient,
  modulesList: state.ecommerce.modulesList,
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList,
    addModuleToClient
    }
)(AddClModuleDiag);
