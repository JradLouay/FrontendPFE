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
import { SimpleCard } from "matx";
import  InfoForm  from "./InfoForm";

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
    <React.Fragment>
      
      {/* <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <Icon>more_vert</Icon>
      </IconButton> */}
                  <IconButton onClick={()=> {
                      props.clicked()();
                      handleClickOpen();
                                    }}>
                    <Icon color="primary" >info</Icon>
                  </IconButton>
      {/* <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={handleClickOpen}
        >
          <Icon>add</Icon>
        </Fab> */}
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
             <SimpleCard title="User Info" >
                  <InfoForm type={"edit"}  />
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
