import React from "react";
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
import EditorYaml from "./EditorYaml";


// const useStyles = makeStyles(theme => ({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     margin: "auto",
//     width: "fit-content"
//   },
//   formControl: {
//     marginTop: theme.spacing(2),
//     minWidth: 120
//   },
//   formControlLabel: {
//     marginTop: theme.spacing(1)
//   }
// }));

export default function ModuleDiag() {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <Icon>edit</Icon>
      </IconButton>
      
      <Dialog
        fullWidth="true"
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Yaml Configuration</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
                <EditorYaml />
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
