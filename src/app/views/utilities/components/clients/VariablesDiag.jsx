import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
} from "@material-ui/core";
import { 
  addList
  } from "app/redux/actions/VariableActions";
import { SimpleCard } from "matx";
import VariablesTable from './VariablesTable';
const dotenv = require('dotenv')


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

function VariablesDiag(props) {
    const {
          addList,
          selectedClient
            }=props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  let fileReader ; 

    const handleFileRead = (event) =>{
      const content = fileReader.result;
    const envConfig = dotenv.parse(content)
    addList(selectedClient.id, envConfig)
    
    }

    const handelChosenFile= (file)=> {
      fileReader = new FileReader();
      fileReader.onloadend= handleFileRead ;
      fileReader.readAsText(file);
    }

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <IconButton onClick={() => {
          props.clicked()();
          handleClickOpen();
        }}> 
        <Icon color="green" >library_books</Icon>
      </IconButton>
      
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <SimpleCard >
              <VariablesTable />

            </SimpleCard>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
        <input
                              accept=".env"
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              // multiple
                              type="file"
                              onChange={e=> handelChosenFile(e.target.files[0])}
                            />
                            <label htmlFor="raised-button-file">
                              <Button color="primary" component="span">
                                Add List 
                              </Button>
                            </label>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  selectedClient : state.client.selectedClient,
  addList : PropTypes.func.isRequired 
});

export default   connect(
  mapStateToProps,
  { 
    addList
    }
)(VariablesDiag);
