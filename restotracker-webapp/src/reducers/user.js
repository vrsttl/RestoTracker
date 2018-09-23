export default function user(state = {
  isAuthenticated: false,
  isAuthenticating: false,
  loginFailed: null,
  token: null,
  email: null,
  username: null,
  firstName: null,
}, action) {
  switch (action.type) {
    case 'USER_LOGIN_REQUESTED': {
      return {
        ...state,
        isAuthenticating: true,
        email: action.values.username,
        password: action.values.password,
      };
    }

    case 'RESTORE_USER_BY_TOKEN_SUCCEEDED': {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        email: action.user.email,
      };
    }
    case 'LOGIN_SUCCEEDED': {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
      };
    }

    case 'LOGIN_FAILED': {
      return {
        ...state,
        isAuthenticating: false,
        loginFailed: true,
      };
    }

    case 'LOGOUT_SUCCEEDED': {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        username: null,
        firstName: null,
        email: null,
      };
    }

    default:
      return state;
  }
}
