import React from "react";
// import axios from "axios"
// import clsx from 'clsx';
import { Breadcrumb } from "matx";
import { connect } from "react-redux";
import {
  setGlobalClient
} from "app/redux/actions/ClientActions";
import { PropTypes } from "prop-types";
import {
  Button,
  // CircularProgress,
  Typography,
  Card,
  // Fade,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  // DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Snackbar,
  Slide,
  LinearProgress
} from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import AddClModuleDiag from './components/Client Modules/AddClModuleDiag';
import EditorYaml from './components/Client Modules/EditorYaml';

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  progress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  placeholder: {
    height: 40,
  },
  stepper: {  //root 
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
//transition for the confirmation Diag 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getSteps() {
  return ['Establishing SSH connexion', 'File Transfer', 'Starting Services'];
}
function getStopSteps() {
  return ['Establishing SSH connexion', 'Stopping Services'];
}

const ClientModule = (props) => {

  const {
    globalClient,
    setGlobalClient
  } = props;

  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(null);
  const [feedback, setFeedback] = React.useState([]);
  const descriptionElementRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(-1);
  const [steps, setSteps] = React.useState([]);
  const [openSnackSuccess, setOpenSnackSuccess] = React.useState(false); // snackbarSuccess
  const [openSnackError, setOpenSnackError] = React.useState(false); // snackbarError
  

  const classes = useStyles();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  // -----------------------snack-------------------
  const handleCloseSnackSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackSuccess(false);
  };
  const handleCloseSnackError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackError(false);
  };
  //----- dialog----------------------------------
  const handleClose = () => {
    setOpen(false);
    if(!loading){
      setFeedback([]);
      setStep(null);
      setActiveStep(-1);
    }
  };
  const handleToggle = (type) => {

    if (type === "deploy") {
          setSteps(getSteps());
          setLoading(true);
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/deploy/${globalClient.id}`
          );
          es.addEventListener("step", (e) => {
            handleNext();
            setStep(e.data);
          });
          es.addEventListener('feedback', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
          });
          es.addEventListener('error', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            es.close();
            setOpenSnackError(true);
            setLoading(false);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            es.close();
            handleNext();
            setGlobalClient(Object.assign(globalClient, {status : "Deployed"}));
            setOpenSnackSuccess(true);
            setLoading(false);
          });
    }
    if (type === "update") {
      setSteps(getSteps());
      setLoading(true);
      setOpen(!open);
      const es = new EventSource(
        `http://localhost:9000/api/deploys/update/${globalClient.id}`
      );
      es.addEventListener('step', (e) => {
        handleNext();
        setStep(e.data);
      });
      es.addEventListener('feedback', (e) => {
        setFeedback(prevState=> [...prevState, e.data]);
        console.log(feedback);
        
      });
      es.addEventListener('error', (e) => {
        setFeedback(prevState=> [...prevState, e.data]);
        es.close();
        setOpenSnackError(true)
        setLoading(false);
      });
      es.addEventListener('success', (e) => {
        setFeedback(prevState=> [...prevState, e.data]);
        es.close();
        handleNext();
        setGlobalClient(Object.assign(globalClient, {status : "Deployed"}));
        setOpenSnackSuccess(true);
        setLoading(false);
        
      });
    }
    if (type === 'stop') {
          setSteps(getStopSteps());
          setLoading(true);
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/stop/${globalClient.id}`
          );
          es.addEventListener('step', (e) => {
            setStep(e.data)
            handleNext();
          });
          es.addEventListener('feedback', (e) => {
            console.log(e.data);
            setFeedback(prevState=> [...prevState, e.data]);
          });
          es.addEventListener('error', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            es.close();
            setOpenSnackError(true);
            setLoading(false);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            handleNext();
            setGlobalClient(Object.assign(globalClient, {status : "Not deployed"}));
            es.close();
            setOpenSnackSuccess(true);
            setLoading(false);
            
          });
    }
    if (type === "rollback") {
          setSteps(getSteps());
          setLoading(true);
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/rollback/${globalClient.id}`
          );
          es.addEventListener("step", (e) => {
            handleNext();
            setStep(e.data);
          });
          es.addEventListener('feedback', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
          });
          es.addEventListener('error', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            es.close();
            setOpenSnackError(true);
            setLoading(false);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevState=> [...prevState, e.data]);
            es.close();
            handleNext();
            setGlobalClient(Object.assign(globalClient, {status : "Deployed"}));
            setOpenSnackSuccess(true);
            setLoading(false);
          });
    }
  };
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <React.Fragment>
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Utilities", path: "/utilities" },
              { name: globalClient.clientName ? globalClient.clientName : "" }
            ]}
          />
        </div>
        <Card elevation={6} className="px-24 py-20 h-100" >
          <CardHeader
            action={
              <React.Fragment>
                <div className={classes.root}>
                  {
                    globalClient.status !== "Deployed"  ?
                      <Button
                        variant="contained"
                        size="small"
                        disabled={globalClient.clientName && globalClient.file ? false : true}
                        onClick={()=>handleToggle("deploy")}
                      >
                        Deploy
                      </Button> :
                      <React.Fragment>
                       {
                         globalClient.prevVersion ? 
                        <React.Fragment>
                              <Button
                                variant="contained"
                                size="small"
                                onClick={()=>handleToggle("rollback")}
                              >
                                Rollback
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                onClick={()=>handleToggle("update")}
                              >
                                Update
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                onClick={()=>handleToggle("stop")}
                              >
                                Stop
                              </Button>
                        </React.Fragment>
                        :   
                        <React.Fragment>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={()=>handleToggle("update")}
                              >
                                Update
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                onClick={()=>handleToggle("stop")}
                              >
                                Stop
                              </Button>
                        </React.Fragment>
                       }
                      </React.Fragment>
                  }
                </div>
              </React.Fragment>
            }
            title="docker-compose.yml"
            subheader={globalClient.clientName ? globalClient.clientName : ""}
          />
          <CardContent>
            {globalClient.clientName ? <EditorYaml />: null}
          </CardContent>
          <CardActions>
            <AddClModuleDiag showButton={globalClient.clientName ? false : true} />
          </CardActions>
        </Card>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">{step}</DialogTitle> */}
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
                <div className={classes.stepper}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                  </Stepper>
                  <div>
                    {/* {activeStep === steps.length ? (
                      null
                    ) : (
                      <LinearProgress/>
                    )} */}
                     <Typography className={classes.instructions} variant="body1" gutterBottom>{feedback.map((feed) => <div>{feed}</div>)}</Typography>
                  </div>
                </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackSuccess} autoHideDuration={3000} onClose={handleCloseSnackSuccess}>
        <Alert onClose={handleCloseSnackSuccess} severity="success">
          Success!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackError} autoHideDuration={4000} onClose={handleCloseSnackError}>
        <Alert onClose={handleCloseSnackError} severity="Error">
          An Error has been occurred!
        </Alert>
      </Snackbar>
    </React.Fragment>

  );
};

const mapStateToProps = state => ({
  globalClient: state.client.globalClient,
  setGlobalClient: PropTypes.func.isRequired
});
export default connect(
  mapStateToProps,
  {
    setGlobalClient
  }
)(ClientModule);
