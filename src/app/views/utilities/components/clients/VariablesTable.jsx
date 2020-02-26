import React from 'react';
import MaterialTable from 'material-table';

export default function VariablesTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Key', field: 'key' },
      { title: 'Value', field: 'value' },
     
    ],
    data: [
      {
        key: 'key_1', 
        value: 'value_1'
      },
      {
        key: 'key_2', 
        value: 'value_2'
      },
      {
        key: 'key_3', 
        value: 'value_3'
      },
      {
        key: 'key_4', 
        value: 'value_4'
      },
      {
        key: 'key_5', 
        value: 'value_5'
      },
      {
        key: 'key_6', 
        value: 'value_6'
      }
    ],
  });

  return (
    <MaterialTable
      title=" Environment Variables "
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {  
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
