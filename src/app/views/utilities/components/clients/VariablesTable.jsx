import React from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import shortId from "shortid"; // just for the Mock server otherwise this will not be used 
import MaterialTable from 'material-table';
import { 
  getVariablesList,
  deleteVariable,
  updateVariable,
  addVariable
  } from "app/redux/actions/EcommerceActions";




 function VariablesTable(props) {


  const {
        variablesList,
        selectedClient,
        getVariablesList,
        addVariable,
        deleteVariable,
        updateVariable
        
          }=props;


 

  const [loaded, setLoaded] = React.useState(false);

  if (!loaded){
    console.log('running to load ');
    
    getVariablesList(selectedClient.id);
    setLoaded(true)

  }


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
                            ... newData,
                            id : shortId.generate()
                           }
            addVariable(selectedClient.id, data);
            resolve(); // wait for server response then see if it's ok or not 
            
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
              updateVariable(oldData.id, selectedClient.id, newData)  
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
 
  variablesList : state.ecommerce.variablesList,
  selectedClient : state.ecommerce.selectedClient,
  getVariablesList: PropTypes.func.isRequired,
  deleteVariable : PropTypes.func.isRequired,
  updateVariable : PropTypes.func.isRequired,
  addVariable : PropTypes.func.isRequired
  
  
});

export default   connect(
  mapStateToProps,
  { 
    getVariablesList,
    deleteVariable,
    updateVariable,
    addVariable,
    }
)(VariablesTable);