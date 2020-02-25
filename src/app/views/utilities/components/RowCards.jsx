import React, { Component, Fragment } from "react";
import { format } from "date-fns";
import ModuleDialog from './OptimalSizeDialog';
import ScheduleDialog from './ScheduleDialog';

import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox,
  Fab,
  Avatar,
  Hidden,
} from "@material-ui/core";

const RowCards = (props) => {

  let content = [] ;
  console.log(props);
  
   if (props.type ==="module")
  {
  content  = [1, 2, 3, 4].map(id => (
    <Fragment key={id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={4} xs={5}>
            <div className="flex flex-middle">
              <span className="card__roject-name font-weight-500">
                Module {id}
              </span>
            </div>
          </Grid>

          <Grid item md={3} xs={4}>
             <span className="card__roject-name font-weight-500">
                Last Update 
             </span>
            <div className="text-muted">
              {format(new Date().getTime(), "MM/dd/yyyy hh:mma")}
            </div>
          </Grid>
          

            <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                      Status 
                  </span>
                  <div className="text-muted">
                    {id % 2 === 1 ? ( "Deployed" ) : ( "not Deployed" )}
                  </div>
            </Grid>

          <Grid item xs={2}>
            <div className="flex flex-end">
              <Checkbox />
              <ModuleDialog />
              
            </div>
            
          </Grid>
        </Grid>
      </Card>
      <div className="py-8" />
    </Fragment>
  )); 
}
  else if(props.type==="schedule") {
 
  content = [1, 2, 3, 4].map(id => (
    <Fragment key={id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={4} xs={5}>
              <span className="card__roject-name font-weight-500">
                Module
              </span>
              <div className="text-muted">
                    Module {id}
                  </div>
          
          </Grid>

          <Grid item md={3} xs={4}>
             <span className="card__roject-name font-weight-500">
                Update Date  
             </span>
            <div className="text-muted">
              {format(new Date().getTime(), "MM/dd/yyyy hh:mma")}
            </div>
          </Grid>
          

            <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                      Status 
                  </span>
                  <div className="text-muted">
                    {id % 2 === 1 ? ( "pending" ) : ( "Done" )}
                  </div>
            </Grid>

          <Grid item xs={2}>
            <div className="flex flex-end">
              {/* <Checkbox /> */}
              
              
            </div>
            
          </Grid>
        </Grid>
      </Card>
      <div className="py-8" />
    </Fragment>
  ));
  }
  
  return (
    <div>
    {content}
    </div>
    ) ;
  
  
};

export default RowCards;
