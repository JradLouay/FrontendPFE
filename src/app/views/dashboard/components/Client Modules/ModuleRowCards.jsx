import React, { Component, Fragment } from "react";
// import { format } from "date-fns";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox,
  // Fab,
  // Avatar,
  // Hidden,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getClientModulesList
  
} from "app/redux/actions/EcommerceActions";

const ModuleRowCards = (props) => {
  

  const {
      globalClient,
      clientModules,
      getClientModulesList

  }=props;


  React.useEffect(() => {
    console.log("run fro the module part management ");
    getClientModulesList(globalClient.id);
    return () => {
    
    };
  }, [globalClient]);

 return  clientModules.map(mod => (
    <Fragment key={mod.id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={4} xs={5}>
              <span className="card__roject-name font-weight-500">
                Module 
              </span>
              <div className="text-muted">
                {mod.moduleName}
              </div>
          </Grid>

          <Grid item md={3} xs={4}>
              <span className="card__roject-name font-weight-500">
                      Version 
                  </span>
                  <div className="text-muted">
                    {mod.version}
                  </div>
            </Grid>

          <Grid item md={3} xs={4}>
             <span className="card__roject-name font-weight-500">
                Last Update 
             </span>
            <div className="text-muted">
              {mod.lastUpdate}
            </div>
          </Grid>
                  
          <Grid item xs={2}>
            <div className="flex flex-end">
                  <IconButton onClick={()=>{}}>
                    <Icon color="default">delete</Icon>
                  </IconButton>
            </div>
            
          </Grid>
        </Grid>
      </Card>
      <div className="py-8" />
    </Fragment>
  )); 

  
  
  
};


const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
  clientModules : state.ecommerce.clientModules,
  getClientModulesList : PropTypes.func.isRequired,
  modulesList: state.ecommerce.modulesList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getClientModulesList
    }
)(ModuleRowCards);
