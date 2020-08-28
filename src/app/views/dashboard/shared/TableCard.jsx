import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Card
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MaterialTable from 'material-table';
import Terminal from '../components/Client Modules/Terminal'
import {
  getModulesStats,
  cleanModuleStats,
  getModulesLogs,
  cleanLogs
} from "app/redux/actions/ModuleActions";

const TableCard = (props) => {
  const tableRef = React.createRef();
  const {
    globalClient,
    containerLogs,
    getModulesLogs,
    cleanLogs
  } = props;

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');


  const handleClose = () => {
    setOpen(false);

  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (globalClient.id) {
      tableRef.current.onQueryChange();
    }
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
        
      }
    }
    return () => {
      cleanLogs()
    };
  }, [globalClient.id]);

  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="overflow-auto">
        <MaterialTable
          title="Deployed Modules"
          tableRef={tableRef}
          columns={[
            { title: 'Name', field: 'Names' },
            { title: 'Created at', field: 'CreatedAt' },
            { title: 'Ports', field: 'Ports' },
            { title: 'Running for', field: 'RunningFor' },
            { title: 'Status', field: 'Status' }
          ]}
          data={
            query =>
            new Promise((resolve, reject) => {
              if (globalClient.id) {
                console.log("getStats from table");
                axios.get(`http://localhost:9000/api/deploys/stats/${globalClient.id}`)
                  .then(res => {
                    console.log("data", res.data);
                    resolve({
                      data: res.data
                    })
                  }).catch((err)=> resolve({
                    data : []
                  }) )
              }
            })
          }
          actions={[
            {
              icon: 'list',
              tooltip: 'Logs',
              onClick: (event, rowData) => {
                  setOpen(true);
                  getModulesLogs(globalClient.id, rowData.Names);
                }
            }]}
          options={{
            filtering: false,
            search: false,
            paging: false,
            actionsColumnIndex: -1,
            // showTitle: false
          }}
          localization={{
            body:{
              emptyDataSourceMessage : "No Services are Deployed"
            }
          }}
        />


      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Container Logs</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Terminal feedback={containerLogs} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  globalClient: state.client.globalClient,
  modulesStats: state.module.modulesStats,
  containerLogs: state.module.containerLogs,
  getModulesStats: PropTypes.func.isRequired,
  getModulesLogs: PropTypes.func.isRequired,
  cleanLogs: PropTypes.func.isRequired,
  cleanModuleStats: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  {
    getModulesStats,
    cleanModuleStats,
    getModulesLogs,
    cleanLogs
  }
)(TableCard);
