export function restoreUserByToken(next) {
  return {
    type: 'RESTORE_USER_BY_TOKEN_REQUESTED',
    next,
  };
}

export function login(values) {
  return {
    type: 'LOGIN_REQUESTED',
    payload: {
      email: values.userName,
      password: values.password,
    },
  };
}

export function setCurrentComponent(componentName) {
  return {
    type: 'COMPONENT_CHANGE_REQUESTED',
    payload: componentName,
  };
}