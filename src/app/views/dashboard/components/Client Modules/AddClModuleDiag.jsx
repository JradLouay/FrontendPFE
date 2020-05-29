import React, { Fragment } from "react";
import YAML from "yaml";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Icon,
  Fab
} from "@material-ui/core";
// import AddIcon from '@material-ui/icons/Add';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import {
  getModulesList,
  setFile
} from 'app/redux/actions/ModuleActions';

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
    modulesList=[],
    getModulesList,
    yaml,
    setFile
  }= props ;

  React.useEffect(() => {
    return () => {
    };
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleModuleClick(modId, desc) {
      let file = YAML.parse(yaml);
      file = file || {"version":"3.4","services":null,"volumes":{}}; // you cun customize what ever you like in here 
      file.services = file.services || {};
      const description = JSON.parse(desc);
      file.services[Object.keys(description)[0]]= Object.values(description)[0];
      console.log(YAML.stringify(file));
      setFile(YAML.stringify(file));
     }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Fragment>

        <Fab
          size="small"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          disabled={showButton}
          onClick={ ()=>{   
                    handleClickOpen();
                    getModulesList();
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
                    <ListItem key={mod.id} button onClick={() => handleModuleClick(mod.id, mod.description)} >
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
  setFile: PropTypes.func.isRequired,
  modulesList : state.module.modulesList,
  yaml: state.module.yaml
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList,
    setFile
    }
)(AddClModuleDiag);
