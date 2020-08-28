import React, { Component, Fragment } from "react";
import {
  Grid,
  Card,
} from "@material-ui/core";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import { withStyles } from "@material-ui/styles";

class Dashboard1 extends Component {
  state = {};

  render() {
    let { theme } = this.props;

    return (
      <Fragment>

        <div className="analytics m-sm-30 mt--80 " >

          <Grid container spacing={4}>
                        {/*8*/} {/*8*/}
            <Grid item lg={8} md={8} sm={12} xs={12}>
            
              <StatCards theme={theme}/>
              <TableCard/>
            </Grid>

          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
