import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  addClient
} from "app/redux/actions/EcommerceActions";
// import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   progress: {
//     margin: theme.spacing(2)
//   }
// }));

const TestProgress = (props) => {

  const {
    clientToAdd,
    addClient
  } = props;
  // const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [test, setTest] = React.useState(null);

  React.useEffect(() => {
    function progress() {

      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          setTest(() => "Alles Gut !!!");
          clearInterval(timer);
          setTimeout(() => {
            setTest(() => "saving Data ");

          }, 500);
          setTimeout(() => {
            props.next();
            addClient(clientToAdd);
          }, 1500);
          return 100;
        }
        if (oldCompleted === Math.random() * 100) {
          setTest(() => "An Error has been occured!!!! bitte können sie noch überprüfen");
          clearInterval(timer);
          setTimeout(() => {
            props.prev();

          }, 1000);
          return oldCompleted;
        }
        const diff = Math.random() * 30;
        setTest(() => "Attempting to Connect...");
        return Math.min(oldCompleted + diff, 100);
      });

    }
    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <React.Fragment>
      <SimpleCard title={test}
        subtitle={clientToAdd.clientName} >
        <LinearProgress variant="determinate" value={completed} />
      </SimpleCard>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  addClient: PropTypes.func.isRequired,
  clientToAdd: state.ecommerce.clientToAdd,
  // user: state.user
});

export default connect(
  mapStateToProps,
  {
    addClient
  }
)(TestProgress);
