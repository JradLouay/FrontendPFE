import React from 'react';
// import Backdrop from '@material-ui/core/Backdrop';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  LinearProgress
} from "@material-ui/core";
import axios from "axios";
// import Fade from '@material-ui/core/Fade';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { LinearProgress } from "@material-ui/core";
import { SimpleCard } from "matx";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
}));


export default function SimpleBackdrop() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [step, setStep] = React.useState("start");
  //wtf.................................................................
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef();

  React.useEffect(() => {
        // console.log("start Effect");
        // new EventSource(
        //   `http://localhost:9000/api/deploy/4589658`
        // ).addEventListener("message", (e)=>{
          
        //     console.log(e.data)
        //     setStep(e.data)
        //     // console.log("current step", step);
          
        // })
    
    function progress() {

        setCompleted(oldCompleted => {
          if (oldCompleted === 100) {
            // setStep(() => "Download Images");
            // clearInterval(timer);
            setTimeout(() => {
              // setStep(() => "Running Services");
    
            }, 500);
            setTimeout(() => {
              setOpen(false);
              setCompleted(0);
              // clearInterval(timer);
            }, 1500);
            return 100;
          }
          if (oldCompleted === Math.random() * 100) {
            // setStep(() => "An Error has been occured!!!! bitte können sie noch überprüfen");
            // clearInterval(timer);
            setTimeout(() => {
              setOpen(false);
              setCompleted(0);
            }, 1000);
            return oldCompleted;
          }
          const diff = Math.random() * 5;
          // setStep(() => "Connect to server...");
          return Math.min(oldCompleted + diff, 100);
        });
    
      }
    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  ////////////////////////////////////
  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    clearTimeout(timerRef.current);

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(() => {
      setQuery('success');
    }, 10000);
  };
  

  return (
    <div>
      <Button
            variant="contained"
            size="small"
            onClick={handleToggle}
            >
                Deploy
            </Button>

            <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        scroll={"paper"}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >     
            <DialogContent>
{/*               
                      <div className={classes.root}>
                        <div className={classes.placeholder}>
                            <Fade
                            in={loading}
                            style={{
                                transitionDelay: loading ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                            >
                            <CircularProgress color="inherit" />
                            </Fade>
                        </div>
                        <Button onClick={handleClickLoading} className={classes.button}>
                            {loading ? 'Stop loading' : 'Loading'}
                        </Button>
                        <div className={classes.placeholder}>
                            {query === 'success' ? (
                            <Typography>Success!</Typography>
                            ) : (
                            <Fade
                                in={query === 'progress'}
                                style={{
                                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                }}
                                unmountOnExit
                            >
                                <CircularProgress color="inherit" />
                            </Fade>
                            )}
                        </div>
                        <Button onClick={handleClickQuery} className={classes.button}>
                            {query !== 'idle' ? 'Reset' : 'Simulate a load'}
                        </Button>
                </div> */}
                <SimpleCard title={step}
                  // subtitle={clientToAdd.clientName}
                   >
                  <LinearProgress variant="determinate" value={completed} />
                </SimpleCard>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
            </DialogActions>
      </Dialog>
      {/* <Backdrop className={classes.backdrop} open={open} onClick={handleClose}> */}
       
        
      {/* </Backdrop> */}
    </div>
  );
}
