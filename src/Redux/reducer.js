import { DELETE_COUNTRY_SUCCESS, GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, UPDATE_COUNTRY_FAILURE, UPDATE_COUNTRY_REQUEST, UPDATE_COUNTRY_SUCCESS } from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_COUNTRIES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case UPDATE_COUNTRY_REQUEST: {
      return { ...state };
    }
    case UPDATE_COUNTRY_SUCCESS: {
      const newBooks = state.countries.map((item) =>
        item.id === payload.id ? payload : item
      );

      return { ...state, countries: newBooks };
    }
    case UPDATE_COUNTRY_FAILURE: {
      return { ...state };
    }

    case DELETE_COUNTRY_SUCCESS:
      return {countries : state.countries.filter((item)=> item.id!==payload)};
    default: {
      return state;
    }
}
}
