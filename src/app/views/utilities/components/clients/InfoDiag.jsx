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
  IconButton,
} from "@material-ui/core";
import { SimpleCard } from "matx";
import  ClientExpansionPanels  from "./ClientExpansionPanels";

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

export default function InfoDiag(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

 

  return (
    <Fragment>
      
                  <IconButton>
                    <Icon color="primary" onClick={()=> {
                                                       props.clicked()();
                                                        handleClickOpen();
                                                         }}>info</Icon>
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
                <SimpleCard title="Client info" >
                      <ClientExpansionPanels  />
                </SimpleCard>
              </DialogContentText>
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
