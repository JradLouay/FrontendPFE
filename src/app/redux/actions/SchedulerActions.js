import axios from "axios";

export const GET_SCHEDULER_LIST = "GET_SCHEDULER_LIST"; // get scheduler list for specific client   
export const ADD_SCHEDULER = "ADD_SCHEDULER"; // adds a scheduler to a specific client   
export const DELETE_SCHEDULER = "DELETE_SCHEDULER"; // adds a scheduler to a specific client   
export const SET_OPERATION = "SET_OPERATION";  
export const OPEN_SNACK_SUCCESS = "OPEN_SNACK_SUCCESS"; 
export const OPEN_SNACK_ERROR = "OPEN_SNACK_ERROR";
// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
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
export const getSchedulerList = cid => dispatch => { // get list of scheduler mit die cid auf ein client
  
  console.log('[getSchedulerList] ', cid);

  axios.get(`http://localhost:9000/api/clients/${cid}`).then(res => {
    dispatch({
      type: GET_SCHEDULER_LIST,
      payload: res.data.schedulers
    });
  });
};

export const deleteScheduler = (schedulerId, cid ) => dispatch => { //delete variable 
  
  // console.log('[deleteScheduler] ', schedulerId, cid);
  axios
    .delete(`http://localhost:9000/api/schedulers/${cid}/${schedulerId}`)
    .then(res1 => {
      axios.get(`http://localhost:9000/api/clients/${cid}`).then(res2 => {
        dispatch({
          type: DELETE_SCHEDULER,
          payload: res2.data.schedulers
        });
        dispatch({
          type:SET_OPERATION ,
          payload: "Deleted"
        });
        dispatch({
          type:OPEN_SNACK_SUCCESS ,
          payload: true
        });
        
      }).catch(res2 => {
            // etwas für Error
      });
})
.catch(res1 => {
    // etwas für Error
    dispatch({
      type:OPEN_SNACK_ERROR ,
      payload: true
    });
});
 
};

export const addScheduler = (cid, newScheduler) => dispatch => { //delete variable 
  
  // console.log('[addScheduler] ',cid, newScheduler);
  axios
    .post(`http://localhost:9000/api/schedulers/${cid}`, { ...newScheduler })
    .then(res => {
      dispatch({
        type: ADD_SCHEDULER,
        payload: res.data.schedulers
      });
      dispatch({
        type:SET_OPERATION ,
        payload: "Added"
      });
      dispatch({
        type:OPEN_SNACK_SUCCESS ,
        payload: true
      });
    }).catch(res1 => {
      // etwas für Error
      dispatch({
        type:OPEN_SNACK_ERROR ,
        payload: true
      });
  });
};

