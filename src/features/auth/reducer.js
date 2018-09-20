import * as types from './constants'

const initialState = {
  email: '',
  isAuthenticated: false,
  user: undefined,
  userId: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER: {
      return {
        ...state,
        user: action.payload || undefined,
      }
    }
    case types.CREATE_ACCOUNT: {
      return {
        ...state,
        email: action.payload.email,
      }
    }
    case types.CREATE_ACCOUNT_FAILED:
    case types.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
      }
    }

    case types.LOGIN: {
      return {
        ...state,
        email: action.payload.email,
      }
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        error: action.error,
      }
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        authKey: action.payload.id,
        userId: action.payload.userId,
      }
    }

    default:
      return state
  }
}
