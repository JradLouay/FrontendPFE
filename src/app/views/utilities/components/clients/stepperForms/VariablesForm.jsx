import React from 'react';
import MaterialTable from 'material-table';

export default function VariablesForm() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Key', field: 'key' },
      { title: 'Value', field: 'value' },
     
    ],
    data: [],
  });

  return (
    <div width="75%" height="50%">
    <MaterialTable
      options={{
        search: false, 
        showTitle : false
      }}
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
    </div>
  );
}
