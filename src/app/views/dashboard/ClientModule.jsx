import React from "react";
// import clsx from 'clsx';
import { Breadcrumb } from "matx";
import { connect } from "react-redux";
import {
  Button,
  CircularProgress,
  // Fab,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ModuleDialog from './components/Client Modules/ModuleDiag';
import AddClModuleDiag from'./components/Client Modules/AddClModuleDiag';
import ModuleRowCards from './components/Client Modules/ModuleRowCards';
import DeployInfo from "./components/Client Modules/DeployInfo";

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
    globalClient
  }= props ;

  const classes = useStyles();


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
                                    globalClient.status!=="Deployed" ? 
                                   <DeployInfo />: 
                                   <React.Fragment>
                                      <Button
                                      variant="contained"
                                      size="small"
                                      >
                                        Update
                                      </Button>
                                      <Button
                                      variant="contained"
                                      size="small"
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
                          subheader={globalClient.clientName ? globalClient.clientName : "" }
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
          {/* <Content /> */}
          {/* <Backdrop className={classes.backdrop} open={open} onClick={Deploy}>
             <CircularProgress color="inherit" />
                <Typography>{step}</Typography>
          </Backdrop> */}
    </React.Fragment>
   
  );
};

const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
});
export default   connect(
  mapStateToProps,
 {}
)(ClientModule);
