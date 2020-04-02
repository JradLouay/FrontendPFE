import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";
import RowCards from './components/Scheduler/RowCards';
import ScheduleDialog from './components/Scheduler/ScheduleDialog';
import { connect } from "react-redux";
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

  const {
    globalClient
  }= props ;

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
      <Card elevation={6} xs={3} className="px-24 py-20 h-100">
        <div className="card-title">Scheduler </div>
        <div className="card-subtitle mb-24">{globalClient.clientName ? globalClient.clientName : ""}</div>
        <CardContent>
          <RowCards />
        </CardContent>
        <CardActions>
        
          <div zIndex="left">
          <ScheduleDialog showButton={globalClient.clientName ? false : true} />
          </div>
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
)(Scheduler);
