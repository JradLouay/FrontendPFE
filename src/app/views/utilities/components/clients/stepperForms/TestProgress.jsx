import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

const TestProgress = () => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [test, setTest] = React.useState(null) ;

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          setTest( ()=> "Alles Gut !!!" )
          return 0;
        }

        const diff = Math.random() * 10;
        setTest( ()=> "Attempting to Connect..." )
        return Math.min(oldCompleted + diff, 100);
      });
    }
    // progress();
    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
        <React.Fragment>
          <SimpleCard title={test}>
              <LinearProgress variant="determinate" value={completed} />
          </SimpleCard>
        </React.Fragment>
  );
};
export default TestProgress;
