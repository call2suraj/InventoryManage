const INITIAL_STATE = {
    "_id":"",
    "Location":"",
    "Product":"",
    "Subject":"",
    "AlertPriority":"",
    "AlertType":"",
    "__v":0,
    "AlertStatus":""
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state};  
      default:
        return state;
    }
  };