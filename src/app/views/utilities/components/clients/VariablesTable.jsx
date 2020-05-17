import React from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import MaterialTable from 'material-table';
import { 
  getVariablesList,
  deleteVariable,
  updateVariable,
  addVariable,
  cleanVariablesList
  } from "app/redux/actions/VariableActions";

 function VariablesTable(props) {

  const {
        variablesList,
        selectedClient,
        getVariablesList,
        addVariable,
        deleteVariable,
        updateVariable,
        cleanVariablesList
        
          }=props;
          
const [loaded, setLoaded] = React.useState(false);
  // if (!loaded){
  //   console.log('running to load ');
  //   getVariablesList(selectedClient.id);
  //   setLoaded(true)

  // }
  React.useEffect(() => {
    getVariablesList(selectedClient.id);
    // return cleanVariablesList()
    return function cleanup() {
      console.log("cleanup executed");
      cleanVariablesList()
    };
  }, [selectedClient]);

  return (
    <MaterialTable
      title=" Environment Variables "
      columns={[
        { title: 'Key', field: 'key' },
        { title: 'Value', field: 'value' },
       
      ]}
      data={variablesList}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            const data = {
                            ... newData
                           }
            addVariable(selectedClient.id, data);
            resolve(); // wait for server response then see if it's ok or not 
            
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
              updateVariable(selectedClient.id, newData)  
              resolve();
           }),
        onRowDelete: oldData =>
          new Promise(resolve => {
              deleteVariable(oldData.id, selectedClient.id);
              resolve();
              
          }),
      }}
    />
  );
}

const mapStateToProps = (state) => ({
 
  variablesList : state.variable.variablesList,
  selectedClient : state.client.selectedClient,
  getVariablesList: PropTypes.func.isRequired,
  deleteVariable : PropTypes.func.isRequired,
  updateVariable : PropTypes.func.isRequired,
  addVariable : PropTypes.func.isRequired,
  cleanVariablesList : PropTypes.func.isRequired
  
  
});

export default   connect(
  mapStateToProps,
  { 
    getVariablesList,
    deleteVariable,
    updateVariable,
    addVariable,
    cleanVariablesList
    }
)(VariablesTable);