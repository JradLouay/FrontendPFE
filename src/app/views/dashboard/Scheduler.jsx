import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";
import RowCards from './components/Scheduler/RowCards';
import ScheduleDialog from './components/Scheduler/ScheduleDialog';
import {
  Icon,
  Button,
  CircularProgress,
  IconButton,
  Fab,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";


const Scheduler = (props) => {


  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Scheduler" }
          ]}
        />
      </div>
      <Card elevation={6} className="px-24 py-20 h-100">
        <div className="card-title">Scheduler </div>
        <div className="card-subtitle mb-24">Client_1</div>
        <CardContent>
          <RowCards  />
        </CardContent>
        <CardActions>
        
          <div zIndex="left">
          <ScheduleDialog />
          </div>
        </CardActions>


      </Card>
    </div>
  );
};

export default Scheduler  ;
