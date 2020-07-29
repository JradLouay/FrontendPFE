import axios from "axios";

export const GET_MODULES_LIST = "GET_MODULES_LIST";
export const GET_MODULES_STATS = "GET_MODULES_STATS";
export const GET_FILE = "GET_FILE"; 
export const SET_FILE = "SET_FILE"; 
export const SET_SELECTED_MODULE = "SET_SELECTED_MODULE";  
export const DELETE_MODULE = "DELETE_MODULE"; 
export const ADD_MODULE = "ADD_MODULE";  
export const GET_CLIENT_MODULES = "GET_CLIENT_MODULES";  
export const GET_FILTRED_MODULES = "GET_FILTRED_MODULES"; 
export const ADD_MODULE_TO_CLIENT = "ADD_MODULE_TO_CLIENT";  
export const DELETE_CLIENT_MODULE = "DELETE_CLIENT_MODULE";   
export const SET_OPERATION = "SET_OPERATION"; 
export const OPEN_ADD_SNACK_SUCCESS = "OPEN_ADD_SNACK_SUCCESS";   
export const OPEN_ADD_SNACK_ERROR = "OPEN_ADD_SNACK_ERROR";  


export const getModulesList = () => dispatch => { 
  
 return axios.get("http://localhost:9000/api/modules").then(res => {
    
    dispatch({
      type: GET_MODULES_LIST,
      payload: res.data
    });
  });
};

export const getModulesStats = (cid) => dispatch => { 
  
 return axios.get(`http://localhost:9000/api/deploys/stats/${cid}`).then(res => {
    
    dispatch({
      type: GET_MODULES_STATS,
      payload: res.data
    });
  });
};
export const getFile = (file) => dispatch => { 

  if (file) {
   return axios.get(`http://localhost:9000/${file}`).then(res => {
    dispatch({
      type: GET_FILE,
      payload: res.data
    });
});
  }else{
   return dispatch({
      type: GET_FILE,
      payload: ""
    });
  }
};
export const setFile = (newFile) => { 
  return {
    type: SET_FILE,
    payload: newFile
  };

};
// export const saveFile = (newFile)  => dispatch => { // get all modules 
  
//   axios.get(`http://localhost:9000/${file}`).then(res => {
//     // console.log("get the file ",res.data);
//     dispatch({
//       type: GET_FILE,
//       payload: res.data
//     });
// });
// }; 

export const cleanModuleStats = (selectedModule) => {
  return {
    type: GET_MODULES_STATS,
    payload: []
  };
}
export const setSelectedModule = (selectedModule) => {
  return {
    type: SET_SELECTED_MODULE,
    payload: selectedModule
  };
}

export const setOpenSnackSuccessAdd = (val) => {
  return {
    type: OPEN_ADD_SNACK_SUCCESS,
    payload: val
  };
}

export const setOpenSnackErrorAdd = (val) => {
  return {
    type: OPEN_ADD_SNACK_ERROR,
    payload: val
  };
}

export const deleteModule = moduleId => dispatch =>  { // deleting a module

  return axios
      .delete(`http://localhost:9000/api/modules/${moduleId}`)  
      .then(res => {
        console.log(res.data);
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: DELETE_MODULE,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Deleted"
          });
          dispatch({
            type:OPEN_ADD_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(res2 => {
              // etwas für Error
              dispatch({
                type:OPEN_ADD_SNACK_ERROR ,
                payload: true
              });
        });
      });
  };

export const addModule = modToAdd => dispatch =>  { // adding a module

   return axios
      .post(`http://localhost:9000/api/modules`, { ...modToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: ADD_MODULE,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Added"
          });
          dispatch({
            type:OPEN_ADD_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(res2 => {
          dispatch({
            type:OPEN_ADD_SNACK_ERROR ,
            payload: true
          });
        });
      });
  };

export const updateModule = (modId, modToAdd) => dispatch =>  { // adding a module

   return axios
      .put(`http://localhost:9000/api/modules/${modId}`, { ...modToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: ADD_MODULE,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Updated"
          });
          dispatch({
            type:OPEN_ADD_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(res2 => {
              // etwas für Error
              dispatch({
                type:OPEN_ADD_SNACK_ERROR ,
                payload: true
              });
        });
      });
  };

// export const getClientModulesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
//   // console.log('[getClientModulesList] ', cid);

//   axios.get(`http://localhost:9000/api/clients/${cid}`)
//   .then(res => {
//     dispatch({
//       type: GET_CLIENT_MODULES,
//       payload: res.data.deployedModules
//     });
//   });
// };

// export const getfiltredModulesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
//   // console.log('[getfiltredModulesList] ', cid);

//   axios.get(`http://localhost:9000/api/modules/${cid}`, { data: cid }).then(res => {
//     dispatch({
//       type: GET_FILTRED_MODULES,
//       payload: res.data
//     });
//   });
// };

// export const addModuleToClient = (cid, modId) => dispatch => { //delete variable 
  
//   //  console.log('[addModuleToClient] ',cid, modId);
//   axios
//     .post(`http://localhost:9000/api/modules/${cid}/${modId}`)
//     .then(res => {
//       axios.get(`http://localhost:9000/api/clients/${cid}`)
//       .then(res => {
//         dispatch({
//           type: ADD_MODULE_TO_CLIENT,
//           payload: res.data.deployedModules
//         });
//       });
      
//     });
// };

// export const deleteClientModule = (modId, cid ) => dispatch => { //delete module from a client 
  
//   // console.log('[deleteClientModule] ', modId, cid);
//   axios
//     .delete(`http://localhost:9000/api/modules/${cid}/${modId}`)
//     .then(res => {
//       dispatch({
//         type: DELETE_CLIENT_MODULE,
//         payload: res.data.deployedModules
//       });
//     });
// };
// -----------------------------------------------END--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
