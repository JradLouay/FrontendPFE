import React from "react";
import clsx from 'clsx';
import { Breadcrumb } from "matx";
import ModuleRowCards from './components/Client Modules/ModuleRowCards';
import { connect } from "react-redux";
import {
  Button,
  CircularProgress,
  Fab,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import ModuleDialog from './components/Client Modules/ModuleDiag';
import AddClModuleDiag from'./components/Client Modules/AddClModuleDiag';

const useStyles = makeStyles(theme => ({
  
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
}));



const ClientModule = (props) => {

  const {
    globalClient
  }= props ;

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: globalClient.clientName ? globalClient.clientName : "undefined" }
          ]}
        />
      </div>

      <Card elevation={6} className="px-24 py-20 h-100">
                  <CardHeader
                      action={
                          <ModuleDialog />
                      }
                      title="Modules"
                      subheader={globalClient.clientName ? globalClient.clientName : "undefined" }
                    />
                <CardContent>
                        <ModuleRowCards />
                </CardContent>
                  <CardActions>
                        {/* <div className={classes.wrapper}>
                            <Fab
                              aria-label="save"
                              color="primary"
                              className={buttonClassname}
                              onClick={handleButtonClick}
                            >
                              {success ? <CheckIcon /> : 2 }
                            </Fab>
                          {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                        </div>
                        <div className={classes.wrapper}>
                            <Button
                              variant="contained"
                              color="primary"
                              className={buttonClassname}
                              disabled={loading}
                              onClick={handleButtonClick}
                            >
                              {success ? "Deployed" : "Deploy" }
                              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            </Button>
                        </div> */}
                        <AddClModuleDiag />
                  </CardActions>
   </Card>
      
    </div>
  );
};

const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
});
export default   connect(
  mapStateToProps,
 {}
)(ClientModule);
