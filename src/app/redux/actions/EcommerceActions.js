import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"; // getclients 
export const SET_SELECTED_CLIENT = "SET_SELECTED_CLIENT"; // set client for the InfoDiag
export const SET_GLOBAL_CLIENT = "SET_GLOBAL_CLIENT"; // set global  client for the common part of the app 
export const DELETE_CLIENT ="DELETE_CLIENT";  // delete client
export const SET_CLIENT_TO_ADD ="SET_CLIENT_TO_ADD";  // set client to add
export const ADD_CLIENT ="ADD_CLIENT";  // add client
export const UPDATE_CLIENT ="UPDATE_CLIENT";  // add client
export const GET_VARIABLES_LIST ="GET_VARIABLES_LIST";  // getVariables mit der client ID 
export const DELETE_VARIABLE ="DELETE_VARIABLE";  // getVariables mit der client ID 
export const UPDATE_VARIABLE = "UPDATE_VARIABLE"; // updateVariable mit der client ID und die var ID auch 
export const ADD_VARIABLE = "ADD_VARIABLE"; // Add a new variable  
export const GET_MODULES_LIST = "GET_MODULES_LIST"; // get modules list  (ALL) 
export const SET_SELECTED_MODULE = "SET_SELECTED_MODULE"; // get modules list  (ALL) 
export const DELETE_MODULE = "DELETE_MODULE"; // delete a module 
export const ADD_MODULE = "ADD_MODULE"; // delete a module 
export const GET_CLIENT_MODULES = "GET_CLIENT_MODULES"; // get client modules list  (ALL) 
export const GET_FILTRED_MODULES = "GET_FILTRED_MODULES"; // get filtred list  
export const ADD_MODULE_TO_CLIENT = "ADD_MODULE_TO_CLIENT"; // add module to a client  
export const DELETE_CLIENT_MODULE = "DELETE_CLIENT_MODULE"; // add module to a client  
export const GET_SCHEDULER_LIST = "GET_SCHEDULER_LIST"; // get scheduler list for specific client   
export const ADD_SCHEDULER = "ADD_SCHEDULER"; // adds a scheduler to a specific client   
export const DELETE_SCHEDULER = "DELETE_SCHEDULER"; // adds a scheduler to a specific client   
export const GET_CART_LIST = "GET_CART_LIST";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_RATING_LIST = "GET_RATING_LIST";
export const GET_BRAND_LIST = "GET_BRAND_LIST";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";


// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getProductList = () => dispatch => {

  console.log('[getClients]');
  
  // axios.get("/api/ecommerce/get-product-list").then(res => {
  axios.get("http://localhost:9000/api/clients").then(res => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data
    });
  });
};

export const setSelectedClient = (selectedClient) => {
      console.log('[setSelectedClient] ', selectedClient);
      
      return {
        type: SET_SELECTED_CLIENT,
        payload: selectedClient
      };
};
export const setGlobalClient = (globalClient) => {
      console.log('[setGlobalClient] ', globalClient);
      
      return {
        type: SET_GLOBAL_CLIENT,
        payload: globalClient
      };
};
export const setClientToAdd = (client) => {
      console.log('[setSelectedClient] ', client);
      
      return {
        type: SET_CLIENT_TO_ADD,
        payload: client
      };
};

export const deleteClient = (clientId) => dispatch => {

  console.log('[deleteClient] ', clientId);
  axios
    .delete(`http://localhost:9000/api/clients/${clientId}`)
    .then(res1 => {
          axios.get("http://localhost:9000/api/clients").then(res2 => {
            dispatch({
              type: DELETE_CLIENT,
              payload: res2.data
            });
            
          }).catch(res2 => {
                // etwas für Error
          });
    })
    .catch(res1 => {
        // etwas für Error
    });
};

export const addClient = (client) => dispatch => {

  // console.log('[addClient] ', client);
  let form_data = new FormData();
    for ( var key in client ) {
      form_data.append(key, client[key]);
  }
  // axios
  //   .post("http://localhost:9000/api/clients", client )
  axios({
    method: 'post',
    url: 'http://localhost:9000/api/clients',
    data: form_data,
    // headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(res1 => {
      axios.get("http://localhost:9000/api/clients").then(res2 => {
        dispatch({
          type: ADD_CLIENT,
          payload: [res2.data, res1.data]
        });
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
    });
};

export const updateClient = (cid, client) => dispatch => {

  // console.log('[addClient] ', client);
  let form_data = new FormData();
    for ( var key in client ) {
      form_data.append(key, client[key]);
  }
  // axios
  //   .post("http://localhost:9000/api/clients", client )
  axios({
    method: 'put',
    url: `http://localhost:9000/api/clients/${cid}`,
    data: form_data,
    // headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(res1 => {
      axios.get("http://localhost:9000/api/clients").then(res2 => {
        dispatch({
          type: ADD_CLIENT,
          payload: [res2.data, res1.data]
        });
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
    });
};
// ---------------------------------------------END----------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getCategoryList = () => dispatch => {
  axios.get("/api/ecommerce/get-category-list").then(res => {
    dispatch({
      type: GET_CATEGORY_LIST,
      payload: res.data
    });
  });
};

export const getRatingList = () => dispatch => {
  axios.get("/api/ecommerce/get-rating-list").then(res => {
    dispatch({
      type: GET_RATING_LIST,
      payload: res.data
    });
  });
};

export const getBrandList = () => dispatch => {
  axios.get("/api/ecommerce/get-brand-list").then(res => {
    dispatch({
      type: GET_BRAND_LIST,
      payload: res.data
    });
  });
};

export const getCartList = uid => dispatch => {
  axios.get("/api/ecommerce/get-cart-list", { data: uid }).then(res => {
    dispatch({
      type: GET_CART_LIST,
      payload: res.data
    });
  });
};
// -------------------------------------------STARTVAR------------------------------------------------------------
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
export const getSchedulerList = cid => dispatch => { // get list of scheduler mit die cid auf ein client
  
  console.log('[getSchedulerList] ', cid);

  axios.get("/api/ecommerce/get-scheduler-list", { data: cid }).then(res => {
    dispatch({
      type: GET_SCHEDULER_LIST,
      payload: res.data
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

export const deleteScheduler = (schedulerId, cid ) => dispatch => { //delete variable 
  
  // console.log('[deleteScheduler] ', schedulerId, cid);
  axios
    .post("/api/ecommerce/delete-scheduler", { schedulerId, cid})
    .then(res => {
      dispatch({
        type: DELETE_SCHEDULER,
        payload: res.data
      });
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
export const addScheduler = (cid, newScheduler) => dispatch => { //delete variable 
  
  // console.log('[addScheduler] ',cid, newScheduler);
  axios
    .post("/api/ecommerce/add-scheduler", { cid, newScheduler })
    .then(res => {
      dispatch({
        type: ADD_SCHEDULER,
        payload: res.data
      });
    });
};

// -----------------------------------------------END--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// -----------------------------------------------STARTMOD--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

export const getModulesList = () => dispatch => { // get all modules 
  
  // console.log('[getModulesList] ');
  axios.get("http://localhost:9000/api/modules").then(res => {
    
    dispatch({
      type: GET_MODULES_LIST,
      payload: res.data
    });
  });
};

export const setSelectedModule = (selectedModule) => {
  // console.log('[setSelectedModule] ', selectedModule);
  
  return {
    type: SET_SELECTED_MODULE,
    payload: selectedModule
  };
};

export const deleteModule = moduleId => dispatch =>  { // deleting a module

  
    // console.log('[DeleteModule] ', moduleId);
    axios
      .delete(`http://localhost:9000/api/modules/${moduleId}`)  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: DELETE_MODULE,
            payload: res2.data
          });
        }).catch(res2 => {
              // etwas für Error
        });
      });
  };
export const addModule = modToAdd => dispatch =>  { // adding a module

  
    // console.log('[AddModule] ', modToAdd);
    axios
      .post(`http://localhost:9000/api/modules`, { ...modToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: ADD_MODULE,
            payload: res2.data
          });
        }).catch(res2 => {
              // etwas für Error
        });
      });
  };

export const updateModule = (modId, modToAdd) => dispatch =>  { // adding a module

  
    console.log('[UpdateModule] ', modToAdd);
    axios
      .put(`http://localhost:9000/api/modules/${modId}`, { ...modToAdd })  
      .then(res => {
        axios.get(`http://localhost:9000/api/modules`).then(res2 => {
          dispatch({
            type: ADD_MODULE,
            payload: res2.data
          });
        }).catch(res2 => {
              // etwas für Error
        });
      });
  };



export const getClientModulesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
  // console.log('[getClientModulesList] ', cid);

  axios.get(`http://localhost:9000/api/clients/${cid}`)
  .then(res => {
    dispatch({
      type: GET_CLIENT_MODULES,
      payload: res.data.deployedModules
    });
  });
};

export const getfiltredModulesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
  // console.log('[getfiltredModulesList] ', cid);

  axios.get(`http://localhost:9000/api/modules/${cid}`, { data: cid }).then(res => {
    dispatch({
      type: GET_FILTRED_MODULES,
      payload: res.data
    });
  });
};

export const addModuleToClient = (cid, modId) => dispatch => { //delete variable 
  
  //  console.log('[addModuleToClient] ',cid, modId);
  axios
    .post(`http://localhost:9000/api/modules/${cid}/${modId}`)
    .then(res => {
      axios.get(`http://localhost:9000/api/clients/${cid}`)
      .then(res => {
        dispatch({
          type: ADD_MODULE_TO_CLIENT,
          payload: res.data.deployedModules
        });
      });
      
    });
};

export const deleteClientModule = (modId, cid ) => dispatch => { //delete module from a client 
  
  // console.log('[deleteClientModule] ', modId, cid);
  axios
    .delete(`http://localhost:9000/api/modules/${cid}/${modId}`)
    .then(res => {
      dispatch({
        type: DELETE_CLIENT_MODULE,
        payload: res.data.deployedModules
      });
    });
};
// -----------------------------------------------END--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
export const addProductToCart = (uid, productId) => dispatch => {
  axios.post("/api/ecommerce/add-to-cart", { uid, productId }).then(res => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data
    });
  });
};

export const deleteProductFromCart = (uid, productId) => dispatch => {
  axios
    .post("/api/ecommerce/delete-from-cart", { uid, productId })
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: res.data
      });
    });
};


export const updateCartAmount = (uid, productId, amount) => dispatch => {
  console.log('update  cart amount ');
  
  axios
    .post("/api/ecommerce/update-cart-amount", { uid, productId, amount })
    .then(res => {
      dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: res.data
      });
    });
};
