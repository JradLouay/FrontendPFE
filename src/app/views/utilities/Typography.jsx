import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";
import RowCards from './components/RowCards';
import ScheduleDialog from './components/ScheduleDialog';
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

const Typography = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Typography" }
          ]}
        />
      </div>
      <Card elevation={6} className="px-24 py-20 h-100">
        <div className="card-title">Scheduler </div>
        <div className="card-subtitle mb-24">Client_1</div>
        <CardContent>
          <RowCards type="schedule" />
        </CardContent>
        <CardActions>
          {/* <div className={classes.wrapper}>
            <Fab
              aria-label="save"
              color="primary"
              className={buttonClassname}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <p>2</p>}
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
              {success ? "Deployed" : "Deploy"}
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Button>
          </div> */}
          <div zIndex="left">
          <ScheduleDialog />
          </div>
        </CardActions>


      </Card>
    </div>
  );
};

export default Typography;
