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
  CardHeader,
  Backdrop
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



const ClientModule = (props) => {

  const {
    globalClient
  }= props ;

  const classes = useStyles();
  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  // const buttonClassname = clsx({
  //   [classes.buttonSuccess]: success,
  // });
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const Content = ()=>{
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
                           {/* go and get the button from the material UI site */}
                            <AddClModuleDiag />
                      </CardActions>
          </Card>
        
      </div>
    );  
  }


  // const ChooseClient = () => {
  //       return(
  //         // <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
  //         //     <CircularProgress color="inherit" />
  //         // </Backdrop>
  //       );
  // };


  // const handleButtonClick = () => {   für die button 
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //   }
  // };

  return (
    //  <React.Fragment>
    //    { globalClient.id ?  <Content /> : <ChooseClient /> }
    //  </React.Fragment>
    <Content />
  );
};

const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
});
export default   connect(
  mapStateToProps,
 {}
)(ClientModule);
