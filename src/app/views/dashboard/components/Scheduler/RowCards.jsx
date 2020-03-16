import React, { Component, Fragment } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getSchedulerList,
  deleteScheduler

} from "app/redux/actions/EcommerceActions";

const RowCards = (props) => {


  const {
    schedulerList,
    globalClient,
    getSchedulerList,
    deleteScheduler
  } = props;


  React.useEffect(() => {
    getSchedulerList(globalClient.id);
    return () => {

    };
  }, [globalClient]);

  return schedulerList.map(scheduler => (
    <Fragment key={scheduler.id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={2} xs={3}>
            <span className="card__roject-name font-weight-500">
              Name
              </span>
            <div className="text-muted">
              {scheduler.schedulerName}
            </div>
          </Grid>

          <Grid item md={3} xs={4}>
            <span className="card__roject-name font-weight-500">
              Update Date
                  </span>
            <div className="text-muted">
              {scheduler.date}
            </div>
          </Grid>

          <Grid item md={3} xs={4}>
            <span className="card__roject-name font-weight-500">
              Update Time
             </span>
            <div className="text-muted">
              {scheduler.time}
            </div>
          </Grid>
          <Grid item md={3} xs={4}>
            <span className="card__roject-name font-weight-500">
              Status
             </span>
            <div className="text-muted">
              {scheduler.status}
            </div>
          </Grid>

          <Grid item xs={1}>
            <div className="flex flex-end">
              <IconButton onClick={() => { deleteScheduler(scheduler.id, globalClient.id)}}>
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
  schedulerList: state.ecommerce.schedulerList,
  globalClient: state.ecommerce.globalClient,
  getSchedulerList : PropTypes.func.isRequired,
  deleteScheduler : PropTypes.func.isRequired
  // user: state.user
});
export default connect(
  mapStateToProps,
  {
    getSchedulerList,
    deleteScheduler
  }
)(RowCards);
