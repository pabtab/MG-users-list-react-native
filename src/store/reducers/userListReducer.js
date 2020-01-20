import { GET_USERS_LIST, GET_USERS_LIST_LOADING, UPDATE_PROFILE_PICTURE } from "../actions/actionTypes"

const initialState = {
  payload: [],
  isLoading: false,
}

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_USERS_LIST:
    return { 
      ...state, 
      payload: state.payload.concat(payload),
      isLoading
    }

  case GET_USERS_LIST_LOADING: 
    return {...state, isLoading}

  case UPDATE_PROFILE_PICTURE:
    return { 
      ...state, 
      payload: state.payload.map(person => {
        if (person.login.username === payload.login.username) {
          return payload;
        }

        return person;
      })
    }


  default:
    return state
  }
}
