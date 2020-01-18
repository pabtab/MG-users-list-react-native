import { GET_USERS_LIST, GET_USERS_LIST_LOADING, SET_FAVOURITE_COCKTAIL } from "../actions/actionTypes"

const initialState = {
  payload: [],
  isLoading: false,
}

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_USERS_LIST:
    return { ...state, payload, isLoading }

  case GET_USERS_LIST_LOADING: 
    return {...state, isLoading}


  default:
    return state
  }
}
