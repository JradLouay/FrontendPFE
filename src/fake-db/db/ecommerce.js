import Mock from "../mock";
import shortId from "shortid";

const EcommerceDB = {
  productList: [ // these will become clients 
    {
      id: "323sa680b32497dsfdsgga21rt47",
      imgUrl: "/assets/images/logos/react.png",
      version: 1.2,
      clientName: "Client_1",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port: "3259",
      userName: "client1",
      password: "client1"
    },
    {
      id: "323sa680b324976dfgga21rt47",
      imgUrl: "/assets/images/logos/react.png",
      version: 1.3,
      clientName: "Client_2",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port: "3259",
      userName: "client2",
      password: "client2"
    },
    {
      id: "323sa680b32497dsfrsgga21rt47",
      imgUrl: "/assets/images/logos/react.png",
      version: 1.6,
      clientName: "Client_3",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port:"2592",
      userName: "client3",
      password: "client3"
    },
    {
      id: "323sa680b32497dsfrsgga21rt00",
      imgUrl: "/assets/images/logos/react.png",
      version: 1.6,
      clientName: "Client_4",
      lastUpdate: "14/02/1995",
      state: "deployed",
      host: "192.167.2.3",
      port:"2595",
      userName: "client4",
      password: "client4"
    }
  ],

  category: [],

  brand: [],

  rating: [],

  cart: [
    {
      uid: "1",
      list: [
        {
          productId: "323sa680b324976dfgga21rt47",
          amount: 1
        },{
          productId: "323sa680b32497dfdfgga21rt48",
          amount: 1
        },{
          productId: "323sa688b324976dfgga21rt49",
          amount: 1
        }
      ]
    }
  ],
  Modules:[
    {
      id:1,
      moduleName:"intent-manager-client",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    },
    {
      id:2,
      moduleName:"chatbot-manager-client",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    },
    {
      id:3,
      moduleName:"handout-client",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    },
    {
      id:4,
      moduleName:"monitor-client",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    },
    {
      id:5,
      moduleName:"middleware",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    },{
      id:6,
      moduleName:"manager",
      version:"2.6",
      lastUpdate:"14/02/1996",
      description:"here you can put some desc"
    }
  ],
  deployedModules: [
    {
      cid: "323sa680b32497dsfdsgga21rt47",
      list: [1,2]
    },
    {
      cid: "323sa680b324976dfgga21rt47",
      list: [1,2,3]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt47",
      list: [1,2,3]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt00",
      list: [1,2,3,4]
    },
  ],
  scheduler: [
    {
      cid: "323sa680b32497dsfdsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          schedulerName:"1st Update",
          description:"here you can add some desc ",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          version:"2.x",
          type:"Instant ",
          status:"Done"   // Pending || Done || Deleted 

        },
        {
          id:shortId.generate(),
          schedulerName:"2nd Update",
          description:"here you can add some desc ",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          version:"2.x",
          type:"Instant ",
          status:"Pending"   // Pending || Done || Deleted 

        },
    ]
    },
    {
      cid: "323sa680b324976dfgga21rt47",
      list: [
        {
          id:shortId.generate(),
          schedulerName:"1st Update",
          description:"here you can add some desc ",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          version:"2.x",
          type:"Instant ",
          status:"Pending"   // Pending || Done || Deleted 

        },
        {
          id:shortId.generate(),
          schedulerName:"2nd Update",
          description:"here you can add some desc ",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          version:"2.x",
          type:"Instant ",
          status:"Pending"   // Pending || Done || Deleted 

        },
      ]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          schedulerName:"1st Update",
          description:"here you can add some desc ",
          version:"2.x",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          type:"Instant ",
          status:"Done"   // Done || Done || Deleted 
        },
        {
          id:shortId.generate(),
          schedulerName:"2nd Update",
          description:"here you can add some desc ",
          version:"2.x",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          type:"Instant ",
          status:"Pending"   // Pending || Done || Deleted 
        },
        {
          id:shortId.generate(),
          schedulerName:"3rd Update",
          description:"here you can add some desc ",
          version:"2.x",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          type:"Instant ",
          status:"Pending"   // Pending || Done || Deleted 
        },
      ]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt00",
      list: [
        {
          id:shortId.generate(),
          schedulerName:"2nd Update",
          description:"here you can add some desc ",
          date : new Date('August 19, 1975 23:15:30').toLocaleDateString(),
          time : new Date('August 19, 1975 23:15:30').toLocaleTimeString(),
          version:"2.x",
          type:"Instant ",
          status:"Done"   // Pending || Done || Deleted 

        },
      ]
    },
  ],
  variables: [
    {
      cid: "323sa680b32497dsfdsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    },
    {
      cid: "323sa680b324976dfgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    }
  ],

  userList: [
    {
      id: "1",
      name: "John Doe",
      avatar: "/assets/images/face-7.jpg"
    },
    {
      id: "323sa680b3249760ea21rt47",
      name: "Frank Powell",
      avatar: "/assets/images/faces/13.jpg"
    },
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "/assets/images/face-1.jpg"
    }
  ]
};

const getDetailedCartList = uid => {
  let cartList = EcommerceDB.cart.find(userCart => userCart.uid == uid).list;
  return cartList.map(product => ({
    amount: product.amount,
    ...EcommerceDB.productList.find(item => item.id === product.productId)
  }));
};


Mock.onGet("/api/ecommerce/get-product-list").reply(config => { // this is for the client get list 
  const response = EcommerceDB.productList;
  return [200, response];
});

/////////////MODULES///////////////////////////////////////////////////////////////

Mock.onGet("/api/ecommerce/get-modules-list").reply(config => { // this is for the modules get list 
  const response = EcommerceDB.Modules;
  return [200, response];
});


Mock.onPost("/api/ecommerce/delete-mod").reply(config => {

  let  {moduleId}  = JSON.parse(config.data);
  
  let modules = EcommerceDB.Modules.filter(module => module.id !== moduleId);

  EcommerceDB.Modules = modules;

  const response = modules;

  return [200, response];
});


Mock.onPost("/api/ecommerce/add-mod").reply(config=> {

  let { modToAdd } = JSON.parse(config.data);
  let response = [] ;

  const copy =  {  ...modToAdd,
                  id:shortId.generate()  };
 
  EcommerceDB.Modules.push(copy) ;                           
  response = EcommerceDB.Modules; 
  console.log(response);

  return [200, response] ;

});


const getDetailedClientModuleList = cid => {
  let deployedModules = EcommerceDB.deployedModules.find(deployed => deployed.cid === cid).list;
  return deployedModules.map(mod=> ({
    ...EcommerceDB.Modules.find(item => item.id === mod)
  }));
};

Mock.onGet("/api/ecommerce/get-client-modules").reply(config => { // this is to get the modules list for each client mit ein cid
  let cid = config.data;
  let response = [];

  if (cid) {
    // let modulesList = EcommerceDB.deployedModules.find(modObj => modObj.cid === cid);
    let modulesList = getDetailedClientModuleList(cid);
    response = modulesList ? modulesList : [] ;
  }

  console.log('from dataBase',response);
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-filtred-modules-list").reply( (config) => {  // this is for filtering the modules list 
  let cid = config.data;
  

  const list = EcommerceDB.deployedModules.find(deployed => deployed.cid === cid).list;

  const response = EcommerceDB.Modules.filter(({id})=>  !list.includes(id));
  
  return [200, response];
});

Mock.onPost("/api/ecommerce/add-mod-to-client").reply(config => { // this for adding a variable
  let { cid, newModule } = JSON.parse(config.data);
  

  let modulesList = EcommerceDB.deployedModules.map(moduleObj => {
    if (moduleObj.cid === cid) { // find the vars for each client 
      return {
        ...moduleObj,  // optimization passer l'index du var dans le tab 
        list: moduleObj.list.concat(newModule.id)
      };
    } else return moduleObj;
  });

  EcommerceDB.deployedModules = modulesList;
  console.log(modulesList);
  

  const response =  getDetailedClientModuleList(cid) // we need to make this in a abstract form
  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-client-mod").reply(config => { // this for deleting a variable

  let { modId, cid } = JSON.parse(config.data);

  let deployedModulesList = EcommerceDB.deployedModules.map(obj => {
    if (obj.cid === cid) {
      return {
        ...obj,
        list: obj.list.filter(mod => mod !== modId)
      };
    } else return obj;
  });


  EcommerceDB.deployedModules = deployedModulesList;
  

  const response = getDetailedClientModuleList(cid);// we need to make this in a abstract form 
  return [200, response];
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mock.onGet("/api/ecommerce/get-category-list").reply(config => {
//   const response = EcommerceDB.category;
//   return [200, response];
// });

// Mock.onGet("/api/ecommerce/get-rating-list").reply(config => {
//   const response = EcommerceDB.rating;
//   return [200, response];
// });

// Mock.onGet("/api/ecommerce/get-brand-list").reply(config => {
//   const response = EcommerceDB.brand;
//   return [200, response];
// });

// Mock.onGet("/api/ecommerce/get-cart-list").reply(config => {
//   let uid = config.data;
//   let response = [];

//   if (uid) {
//     response = getDetailedCartList(uid); // just to get the product from the list weil er hat nur die ID 
//   }

//   return [200, response];
// });

Mock.onGet("/api/ecommerce/get-var-list").reply(config => { // this is to get the variables list for each client mit ein cid
  let cid = config.data;
  let response = [];

  if (cid) {
    let variablesList = EcommerceDB.variables.find(obj => obj.cid === cid);
    response = variablesList ? variablesList.list : [] ;
  }
  

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-var").reply(config => { // this for deleting a variable

  let { varId, cid } = JSON.parse(config.data);

  let variableList = EcommerceDB.variables.map(obj => {
    if (obj.cid === cid) {
      return {
        ...obj,
        list: obj.list.filter(variable => variable.id !== varId)
      };
    } else return obj;
  });

  EcommerceDB.variables = variableList;

  console.log(EcommerceDB.variables);
  

  const response = EcommerceDB.variables.find(obj => obj.cid === cid).list; // we need to make this in a abstract form 

  return [200, response];
});


Mock.onPost("/api/ecommerce/update-var").reply(config => { // this for deleting a variable
  let { varId, cid, newData } = JSON.parse(config.data);

  console.log("[dataBase side ]",varId, cid, newData);
  

  let variableList = EcommerceDB.variables.map(obj => {
    if (obj.cid === cid) {
      return {
        ...obj,  // optimization passer l'index du var dans le tab 
        list: obj.list.map(variable => {
          if(variable.id === varId){
            return {
              ...variable,
              ...newData
            }
          } else return variable
        })
      };
    } else return obj;
  });

  EcommerceDB.variables = variableList;
  console.log(variableList);
  

  const response =  EcommerceDB.variables.find(obj => obj.cid === cid).list; // we need to make this in a abstract form
  return [200, response];
});

Mock.onPost("/api/ecommerce/add-var").reply(config => { // this for adding a variable
  let { cid, newData } = JSON.parse(config.data);

  console.log("[dataBase side ]", cid, newData);
  

  let variableList = EcommerceDB.variables.map(obj => {
    if (obj.cid === cid) { // find the vars for each client 
      return {
        ...obj,  // optimization passer l'index du var dans le tab 
        list: obj.list.concat(newData)
      };
    } else return obj;
  });

  EcommerceDB.variables = variableList;
  console.log(variableList);
  

  const response =  EcommerceDB.variables.find(obj => obj.cid === cid).list; // we need to make this in a abstract form
  return [200, response];
});

////// this for the schedluler 


Mock.onGet("/api/ecommerce/get-scheduler-list").reply(config => { // this is to get the variables list for each client mit ein cid
  let cid = config.data;
  let response = [];

  if (cid) {
    let schedulerList = EcommerceDB.scheduler.find(schedulerObj => schedulerObj.cid === cid);
    response = schedulerList ? schedulerList.list : [] ;
  }
  

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-scheduler").reply(config => { // this for deleting a variable

  let { schedulerId, cid } = JSON.parse(config.data);

  let schedulerList = EcommerceDB.scheduler.map(obj => {
    if (obj.cid === cid) {
      return {
        ...obj,
        list: obj.list.filter(scheduler => scheduler.id !== schedulerId)
      };
    } else return obj;
  });

  EcommerceDB.scheduler = schedulerList;
  

  const response = EcommerceDB.scheduler.find(obj => obj.cid === cid).list; // we need to make this in a abstract form 

  return [200, response];
});


// Mock.onPost("/api/ecommerce/update-var").reply(config => { // this for deleting a variable
//   let { varId, cid, newData } = JSON.parse(config.data);

//   console.log("[dataBase side ]",varId, cid, newData);
  

//   let variableList = EcommerceDB.variables.map(obj => {
//     if (obj.cid === cid) {
//       return {
//         ...obj,  // optimization passer l'index du var dans le tab 
//         list: obj.list.map(variable => {
//           if(variable.id === varId){
//             return {
//               ...variable,
//               ...newData
//             }
//           } else return variable
//         })
//       };
//     } else return obj;
//   });

//   EcommerceDB.variables = variableList;
//   console.log(variableList);
  

//   const response =  EcommerceDB.variables.find(obj => obj.cid === cid).list; // we need to make this in a abstract form
//   return [200, response];
// });

Mock.onPost("/api/ecommerce/add-scheduler").reply(config => { // this for adding a variable
  let { cid, newScheduler } = JSON.parse(config.data);
  const copy = {
    ...newScheduler,
    status : "Pending"
  }

  let schedulerList = EcommerceDB.scheduler.map(schedulerObj => {
    if (schedulerObj.cid === cid) { // find the vars for each client 
      return {
        ...schedulerObj,  // optimization passer l'index du var dans le tab 
        list: schedulerObj.list.concat([copy])
      };
    } else return schedulerObj;
  });

  EcommerceDB.scheduler = schedulerList;
  

  const response =  EcommerceDB.scheduler.find(s => s.cid === cid).list; // we need to make this in a abstract form

  
  return [200, response];
});
//////////////END for the scheduler 

Mock.onPost("/api/ecommerce/add-client").reply(config => { // this for adding a client
  let  client  = JSON.parse(config.data);
  const id = shortId.generate();
                                                                  /////////
  console.log("[dataBase side ]", client);                        /////////
  const toBePers ={                                               /////////
     ...client,
     id: id,
     imgUrl: "/assets/images/products/speaker-1.jpg",
     state: "unknown",
     lastUpdate: "______",
  } 
  // 
  // initialize var table for the client 
  const varObj = {
                    cid: id,
                    list: []
                  }
  const modObj = {
                    cid: id,
                    list: []
                  }

  EcommerceDB.productList.push(toBePers); // add the client 
  const newClient = EcommerceDB.productList.find((client)=> client.id === id );
  EcommerceDB.variables.push(varObj); // initialize the variables array 
  EcommerceDB.deployedModules.push(modObj); // initialize the modules array 
  const response = [EcommerceDB.productList, newClient] ; // we need to make this in a abstract form
  return [200, response];
});



Mock.onPost("/api/ecommerce/add-to-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      let product = userCart.list.find(
        product => product.productId === productId
      );
      if (product) {
        return {
          ...userCart,
          list: userCart.list.map(product => {
            if (product.productId === productId) {
              return {
                ...product,
                amount: product.amount + 1
              };
            } else return product;
          })
        };
      } else {
        userCart.list.push({
          productId,
          amount: 1
        });
        return userCart;
      }
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-from-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.filter(product => product.productId !== productId)
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-client").reply(config => {
  let { clientId } = JSON.parse(config.data);

  let clients = EcommerceDB.productList.filter(client => client.id !== clientId);

  EcommerceDB.productList = clients;

  const response = clients;

  return [200, response];
});

Mock.onPost("/api/ecommerce/update-cart-amount").reply(config => {
  let { uid, productId, amount } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.map(product => {
          if (product.productId === productId) {
            product.amount = amount;
          }
          return product;
        })
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});
