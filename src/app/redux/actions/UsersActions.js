import axios from "axios";
  
export const GET_USERS_LIST = "GET_USERS_LIST";
export const DELETE_USER = "DELETE_USER"
export const SET_SELECTED_USER = "SET_SELECTED_USER"
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const SET_OPERATION = "SET_OPERATION";  
export const OPEN_SNACK_SUCCESS = "OPEN_SNACK_SUCCESS"; 
export const OPEN_SNACK_ERROR = "OPEN_SNACK_ERROR"; 
// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

export const setOpenSnackSuccess = (val) => {

  return {
    type: OPEN_SNACK_SUCCESS,
    payload: val
  };
}
export const setOpenSnackError = (val) => {

  return {
    type: OPEN_SNACK_ERROR,
    payload: val
  };
}

export const getUsersList = () => dispatch => { // get all modules 
  
  // console.log('[getModulesList] ');
  axios.get('http://localhost:9000/api/users').then(res => {
    
    dispatch({
      type: GET_USERS_LIST,
      payload: res.data
    });
  });
};

export const setSelectedUser = (selectedUser) => {
  console.log('[setSelectedModule] ', selectedUser);
  return {
    type: SET_SELECTED_USER,
    payload: selectedUser
  };
};


export const deleteUser = userId => dispatch =>  { // deleting a module

    axios
      .delete(`http://localhost:9000/api/users/${userId}`)  
      .then(res => {
        console.log(res.data);
        axios.get(`http://localhost:9000/api/users`).then(res2 => {
          dispatch({
            type: DELETE_USER,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Deleted"
          });
          dispatch({
            type:OPEN_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(error => {
              // etwas für Error
        });
      }).catch((error)=>{
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
      });
  };

export const addUser = user => dispatch =>  { // adding a user
  
    // console.log('[AddModule] ', modToAdd);
    axios
      .post(`http://localhost:9000/api/users`, { ...user })  
      .then(res => {
        console.log(res.data);
        axios.get(`http://localhost:9000/api/users`).then(res2 => {
          dispatch({
            type: ADD_USER,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Added"
          });
          dispatch({
            type:OPEN_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(res2 => {
              // etwas für Error
        });
      }).catch((error=>{
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
      }));
  };

export const updateUser = (uid, usrToAdd) => dispatch =>  { // adding a module

    console.log('[UpdateModule] ', usrToAdd);
    axios
      .put(`http://localhost:9000/api/users/${uid}`, { ...usrToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/users`).then(res2 => {
          dispatch({
            type: ADD_USER,
            payload: res2.data
          });
          dispatch({
            type:SET_OPERATION ,
            payload: "Updated"
          });
          dispatch({
            type:OPEN_SNACK_SUCCESS ,
            payload: true
          });
        }).catch(err => {
              // etwas für Error
        });
      }).catch(err=>{
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
      });
  };
export const updateState = (uid, usrToUpdate) => dispatch =>  { // adding a module

    console.log('[UpdateState] ', usrToUpdate);
    axios
      .put(`http://localhost:9000/api/users/${uid}`, usrToUpdate )  
      .then(res => {
        dispatch({
          type: SET_SELECTED_USER,
          payload: res.data
        });
        dispatch({
          type:SET_OPERATION ,
          payload: "Updated"
        });
        dispatch({
          type:OPEN_SNACK_SUCCESS ,
          payload: true
        });
      }).catch(err=>{
        console.log(err);
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
      });
  };
