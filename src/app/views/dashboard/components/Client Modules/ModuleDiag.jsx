import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
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

export default function ModuleDiag(props) {

 
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
      <IconButton 
      variant="outlined" 
      color="primary" 
      onClick={handleClickOpen}
      disabled={props.showButton}>
                <EditIcon />
      </IconButton>
      
      <Dialog
        fullWidth="true"
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
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


