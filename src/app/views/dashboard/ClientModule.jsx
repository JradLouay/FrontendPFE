import React from "react";
// import clsx from 'clsx';
import { Breadcrumb } from "matx";
import { connect } from "react-redux";
import {
  setGlobalClient
} from "app/redux/actions/EcommerceActions";
import { PropTypes } from "prop-types";
import {
  Button,
  CircularProgress,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  LinearProgress
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { SimpleCard } from "matx";
import ModuleDialog from './components/Client Modules/ModuleDiag';
import AddClModuleDiag from './components/Client Modules/AddClModuleDiag';
import ModuleRowCards from './components/Client Modules/ModuleRowCards';

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



const ClientModule = (props) => {

  const {
    globalClient,
    setGlobalClient
  } = props;

  const [open, setOpen] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [step, setStep] = React.useState(null);
  const [feedback, setFeedback] = React.useState([]);
  const descriptionElementRef = React.useRef(null);

  const classes = useStyles();
  //----- dialog----------------------------------
  const handleClose = () => {
    setOpen(false);
    setFeedback([]);
    setStep(null);
  };
  const handleToggle = (type) => {

    if (type === "deploy") {
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/deploy/${globalClient.id}`
          )
          es.addEventListener("step", (e) => {
            setStep(e.data)
          });
          es.addEventListener("feedback", (e) => {
            console.log(e.data);
            setFeedback(prevFeed => [...prevFeed, e.data ]);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevFeed => [...prevFeed, e.data ]);
            es.close();
            setGlobalClient(Object.assign(globalClient, {status : "Deployed"}));
          });
    }
    if (type === "update") {
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/update/${globalClient.id}`
          )
          es.addEventListener("step", (e) => {
            setStep(e.data)
          });
          es.addEventListener("feedback", (e) => {
            setFeedback(prevFeed => [...prevFeed, e.data + "\n"]);
          });
          es.addEventListener('close', (e) => {
            setFeedback(prevFeed => [...prevFeed, e.data + "\n"]);
            es.close();
          });
    }
    if (type === "stop") {
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/stop/${globalClient.id}`
          )
          es.addEventListener("step", (e) => {
            setStep(e.data)
          });
          es.addEventListener("feedback", (e) => {
            console.log(e.data);
            setFeedback(prevFeed => [...prevFeed, e.data ]);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevFeed => [...prevFeed, e.data ]);
            es.close();
            setGlobalClient(Object.assign(globalClient, {status : "Not deployed"}));
          });
    }
    if (type === "rollback") {
          setOpen(!open);
          const es = new EventSource(
            `http://localhost:9000/api/deploys/rollback/${globalClient.id}`
          )
          es.addEventListener("step", (e) => {
            setStep(e.data)
          });
          es.addEventListener("feedback", (e) => {
            console.log(e.data);
            setFeedback(prevFeed => [...prevFeed, e.data ]);
          });
          es.addEventListener('success', (e) => {
            setFeedback(prevFeed => [...prevFeed, e.data ]);
            es.close();
            setGlobalClient(Object.assign(globalClient, {status : "Deployed"}));
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
                    globalClient.status !== "Deployed" ?
                      <Button
                        variant="contained"
                        size="small"
                        disabled={globalClient.clientName ? false : true}
                        onClick={()=>handleToggle("deploy")}
                      >
                        Deploy
                      </Button> :
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
                  <ModuleDialog showButton={globalClient.clientName ? false : true} />
                </div>
              </React.Fragment>
            }
            title="Modules"
            subheader={globalClient.clientName ? globalClient.clientName : ""}
          />
          <CardContent>
            <ModuleRowCards />
          </CardContent>
          <CardActions>
            {/* go and get the button from the material UI site */}
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
        {/* <DialogTitle id="scroll-dialog-title">{step}</DialogTitle>
        <LinearProgress color="secondary" /> */}
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <SimpleCard title={step}
                subtitle={feedback
                  .map(
                    (feed) => feed,
                  )}>
                <LinearProgress  />
              </SimpleCard>
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
    </React.Fragment>

  );
};

const mapStateToProps = state => ({
  globalClient: state.ecommerce.globalClient,
  setGlobalClient: PropTypes.func.isRequired
});
export default connect(
  mapStateToProps,
  {
    setGlobalClient
  }
)(ClientModule);
