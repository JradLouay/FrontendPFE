import axios from "axios";

export const GET_VARIABLES_LIST ="GET_VARIABLES_LIST";  // getVariables mit der client ID 
export const DELETE_VARIABLE ="DELETE_VARIABLE";  // getVariables mit der client ID 
export const UPDATE_VARIABLE = "UPDATE_VARIABLE"; // updateVariable mit der client ID und die var ID auch 
export const ADD_VARIABLE = "ADD_VARIABLE"; // Add a new variable  


// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getVariablesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
  console.log('[getVariablesList] ', cid);

  // axios.get("/api/ecommerce/get-var-list", { data: cid }).then(res => {
    axios
    .get(`http://localhost:9000/api/clients/${cid}`).then(res => {
    
    dispatch({
      type: GET_VARIABLES_LIST,
      payload: res.data.variables
    });
  });
};
export const deleteVariable = (varId, cid ) => dispatch => { //delete variable 
  
  // console.log('[DeleteVariables] ', varId, cid);
  axios
    .delete(`http://localhost:9000/api/variables/${cid}/${varId}`)
    .then(res1 => {
      axios.get(`http://localhost:9000/api/clients/${cid}`).then(res2 => {
        dispatch({
          type: DELETE_VARIABLE,
          payload: res2.data.variables
        });
        
      }).catch(res2 => {
            // etwas für Error
      });
})
.catch(res1 => {
    // etwas für Error
});
};

export const updateVariable = (cid, newData) => dispatch => { //delete variable 
  
  // console.log('[updateVariable] ', cid, newData);
  axios
    .put(`http://localhost:9000/api/variables/${newData.id}`, { ...newData })
    .then(res => {
      console.log(res.data);
      axios.get(`http://localhost:9000/api/clients/${cid}`).then(res2 => {
        dispatch({
          type: UPDATE_VARIABLE,
          payload: res2.data.variables
        });
      }).catch(res2 => {
            // etwas für Error
      });
    });
};

export const addVariable = (cid, newData) => dispatch => { //delete variable 
  
  // console.log('[addVariable] ',cid, newData);
  axios
    .post(`http://localhost:9000/api/variables/${cid}`, { ...newData })
    .then(res => {
      dispatch({
        type: ADD_VARIABLE,
        payload: res.data.variables
      });
    });
};

// -----------------------------------------------END--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
