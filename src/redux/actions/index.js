import axios from 'axios';

export const  login = () => {
  console.log("in getAlerts action");
  return (dispatch) => {
    dispatch({ type: 'LOGIN' });
    axios.get('https://ns-wggmovyeol.now.sh/alert', {
      params: {
        AlertStatus: "Pending"
      }
    })
      .then((response) => getDataSuccess(dispatch, response.data))
      .catch(  (error) => {
        const response = error.response
        console.log(response.data.errors)
      })
  };
};

export const getDataSuccess = (dispatch, data) => {
  console.log("in getDataSuccess action"+JSON.stringify(data));
  // can we stop the process for 2 seconds
  //setTimeout(()=>{},1000);
  dispatch({
    type: 'SUCESS_ALERT',
    payload: data
  });
}

