import axios from "axios";
  
export const GET_USERS_LIST = "GET_USERS_LIST";
export const DELETE_USER = "DELETE_USER"
export const SET_SELECTED_USER = "SET_SELECTED_USER"
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

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
  // console.log('[setSelectedModule] ', selectedModule);
  
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
        }).catch(res2 => {
              // etwas für Error
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
        }).catch(res2 => {
              // etwas für Error
        });
      });
  };

export const updateUser = (modId, modToAdd) => dispatch =>  { // adding a module

  
    console.log('[UpdateModule] ', modToAdd);
    axios
      .put(`http://localhost:9000/api/modules/${modId}`, { ...modToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: ADD_USER,
            payload: res2.data
          });
        }).catch(res2 => {
              // etwas für Error
        });
      });
  };
