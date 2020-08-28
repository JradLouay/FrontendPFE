import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
  // FormControlLabel,
  // InputLabel,
  // MenuItem,
  // Select,
  // Switch,
  Icon,
  Fab,
  // IconButton,
} from "@material-ui/core";
import { SimpleCard } from "matx";
import SimpleForm from './SimpleForm';

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

export default function ScheduleDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Tooltip title={"Add a scheduler"}>
      <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={handleClickOpen}
          disabled = {props.showButton}
        >
          <Icon>add</Icon>
        </Fab>
        </Tooltip>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
            <DialogTitle id="max-width-dialog-title"></DialogTitle>
            <DialogContent>
                <DialogContentText>
                  <SimpleCard title="Schedule a Deployment">
                      <SimpleForm close={handleClose}/>
                  </SimpleCard>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
