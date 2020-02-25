import React from "react";
import clsx from 'clsx';
import { Breadcrumb } from "matx";
import RowCards from './components/RowCards';
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
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

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
  }
}));



const Spacing = () => {

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  // const [selected, setSelected] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Utilities", path: "/utilities" },
            { name: "Spacing" }
          ]}
        />
      </div>

      <Card elevation={6} className="px-24 py-20 h-100">
                  <div className="card-title">Modules</div>
                  <div className="card-subtitle mb-24">Client_1</div>
                <CardContent>
                        <RowCards type="module" />
                </CardContent>
                  <CardActions>
                        <div className={classes.wrapper}>
                            <Fab
                              aria-label="save"
                              color="primary"
                              className={buttonClassname}
                              onClick={handleButtonClick}
                            >
                              {success ? <CheckIcon /> : <p>2</p> }
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
                              {success ? "Deployed" : "Deploy" }
                              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            </Button>
                        </div>
                  </CardActions>
                
     
    </Card>
      
    </div>
  );
};

export default Spacing;
