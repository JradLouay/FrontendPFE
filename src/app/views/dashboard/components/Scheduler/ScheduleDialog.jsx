import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // FormControl,
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

export default function ScheduleDialog() {
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

  function handleMaxWidthChange(event) {
    setMaxWidth(event.target.value);
  }

  function handleFullWidthChange(event) {
    setFullWidth(event.target.checked);
  }

  return (
    <React.Fragment>
      <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={handleClickOpen}
        >
          <Icon>add</Icon>
        </Fab>
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
