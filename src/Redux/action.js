import axios from "axios";
import { DELETE_COUNTRY_FAILURE, DELETE_COUNTRY_REQUEST, DELETE_COUNTRY_SUCCESS, GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, UPDATE_COUNTRY_FAILURE, UPDATE_COUNTRY_REQUEST, UPDATE_COUNTRY_SUCCESS } from "./actionTypes";

export const getCountry = (params) => (dispatch) => {
    dispatch({ type:GET_COUNTRIES_REQUEST});
    return axios
      .get(`http://localhost:8080/countries`, params)
      .then((r) => dispatch({ type: GET_COUNTRIES_SUCCESS, payload: r.data }))
      .catch((err) => dispatch({ type: GET_COUNTRIES_FAILURE, payload: err }));
  };
  

  export const updateRequest = () => ({ type: UPDATE_COUNTRY_REQUEST });
export const updateSuccess = (payload) => ({
  type: UPDATE_COUNTRY_SUCCESS,
  payload,
});
export const updateError = (payload) => ({
  type: UPDATE_COUNTRY_FAILURE,
  payload,
});

export const UpdateAPI = (params) => (dispatch) => {
  // console.log(params)
  dispatch(updateRequest());
  axios
    .patch(`http://localhost:8080/countries/${params.id}`, {
      
      city: params.city,
      population: params.population,

    })
    .then((r) => console.log(r.data,"delete"))
    .catch((err) => dispatch(updateError (err)));
};



////////////delete
export const deleteBlogPostRequest=(payload)=>{
  return{
      type:DELETE_COUNTRY_REQUEST,
      payload
  }
}

export const deleteBlogPostSuccess=(payload)=>{
  return{
      type:DELETE_COUNTRY_SUCCESS,
      payload
  }
}
export const deleteBlogPostFailure=(payload)=>{
  return{
      type:DELETE_COUNTRY_FAILURE,
      payload
  }
}

export const deletecountry=(payload)=>(dispatch)=>{
  dispatch(deleteBlogPostRequest());
  axios.delete(`http://localhost:8080/country/${payload}`,payload)
  .then(r=>deleteBlogPostSuccess(r.data)

  )
  .then((data)=>
  // 
  console.log(data,"data11")
  )
 
  .catch(e=>deleteBlogPostFailure(e.data))


}


export const delete_todo = (id)=>{
  return {
      type :DELETE_COUNTRY_SUCCESS ,
      payload : id
  }
};



///4
export const upated_fun = (payload)=>{
  return {
      type : UPDATE_COUNTRY_SUCCESS,
      payload
  }
};