import React, { Component, Fragment } from "react";
import { format } from "date-fns";
import {
  Grid,
  Card,
  // Icon,
  // IconButton,
  Checkbox,
  // Fab,
  // Avatar,
  // Hidden,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getModulesList,
  getClientModulesList
  
} from "app/redux/actions/EcommerceActions";

let isModulesLoaded = false ;

const ModuleRowCards = (props) => {

  const {
      globalClient,
      modulesList,
      clientModules,
      getModulesList,
      getClientModulesList

  }=props;

  if (!isModulesLoaded) {
    getModulesList();
    getClientModulesList(globalClient.id);
    isModulesLoaded=true ;
  }

 
  
 
 return  modulesList.map(mod => (
    <Fragment key={mod.id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={4} xs={5}>
              <span className="card__roject-name font-weight-500">
                Module 
              </span>
              <div className="text-muted">
                {mod.ModuleName}
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
          

            <Grid item md={3} xs={4}>
              <span className="card__roject-name font-weight-500">
                      Status 
                  </span>
               { clientModules.map(clMod=>{
                        if (clMod===mod.id) {
                          return (<div className="text-muted">
                          Deployed
                        </div> );
                        }else return(<div className="text-muted">
                        Not Deployed
                      </div> )
                    })}
                    {/* <div className="text-muted">
                    {clientModules.find(clMod=>clMod === mod.id ? " Deployed" : "not_Deployed")}
                  </div> */}
            </Grid>
            
                  
          <Grid item xs={2}>
            <div className="flex flex-end">
              <Checkbox />
              
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
  getModulesList : PropTypes.func.isRequired,
  clientModules : state.ecommerce.clientModules,
  getClientModulesList : PropTypes.func.isRequired,
  modulesList: state.ecommerce.modulesList,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  { 
    getModulesList, 
    getClientModulesList
    }
)(ModuleRowCards);
