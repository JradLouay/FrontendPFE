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
  addModuleToClient,
  getfiltredModulesList
} from 'app/redux/actions/EcommerceActions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


 function AddClModuleDiag(props) {

  const {
    showButton,
    globalClient,
    getfiltredModulesList,
    addModuleToClient,
    modulesList,
    clientModules
  }= props ;

  React.useEffect(() => {
    if(globalClient.id)
    getfiltredModulesList(globalClient.id)
    return () => {
    
    };
  }, [clientModules]);


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          disabled={showButton}
          onClick={ ()=>{   
                    getfiltredModulesList(globalClient.id);
                    handleClickOpen();
                    }  }
        >
          <Icon>add</Icon>
        </Fab>
      
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        scroll={"paper"}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >     
        <DialogTitle id="max-width-dialog-title">Add a module</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Choose a module to add to the client .
              </DialogContentText>
              <List className={classes.root}>
                    {modulesList.map(mod => (
                    <ListItem key={mod.id} button onClick={() => handleModuleClick(mod)} >
                        <ListItemText primary={"Name"} secondary={mod.moduleName} />
                        <ListItemText primary={"version"} secondary={mod.version} />
                    </ListItem>
                    ))}
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
  getfiltredModulesList: PropTypes.func.isRequired,
  globalClient : state.ecommerce.globalClient,
  modulesList: state.ecommerce.modulesList,
  clientModules: state.ecommerce.clientModules,
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList,
    addModuleToClient,
    getfiltredModulesList
    }
)(AddClModuleDiag);
