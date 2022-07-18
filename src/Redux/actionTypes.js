

export const GET_COUNTRIES_REQUEST = "GET_COUNTRIES_REQUEST";
export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
export const GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

export const UPDATE_COUNTRY_REQUEST = "UPDATE_COUNTRY_REQUEST";
export const UPDATE_COUNTRY_SUCCESS = "UPDATE_COUNTRY_SUCCESS";
export const UPDATE_COUNTRY_FAILURE = "UPDATE_COUNTRY_FAILURE";

export const DELETE_COUNTRY_REQUEST = "DELETE_COUNTRY_REQUEST";
export const DELETE_COUNTRY_SUCCESS = "DELETE_COUNTRY_SUCCESS";
export const DELETE_COUNTRY_FAILURE = "DELETE_COUNTRY_FAILURE";
// export const getCountry = (params) => (dispatch) => {
//     dispatch({ type:GET_COUNTRIES_REQUEST});
//     return axios
//       .get(`http://localhost:8080/countries`, params)
//       .then((r) => dispatch({ type: GET_COUNTRIES_SUCCESS, payload: r.data }))
//       .catch((err) => dispatch({ type: GET_COUNTRIES_FAILURE, payload: err }));
//   };
  