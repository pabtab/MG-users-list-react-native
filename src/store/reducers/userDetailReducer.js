import { GET_USER_DETAIL, GET_USER_DETAIL_LOADING } from "../actions/actionTypes"

const initialState = {
  payload: [],
  isLoading: false,
}

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_USER_DETAIL:
    return { ...state, payload, isLoading }

  case GET_USER_DETAIL_LOADING: 
    return {...state, isLoading}


  default:
    return state
  }
}
