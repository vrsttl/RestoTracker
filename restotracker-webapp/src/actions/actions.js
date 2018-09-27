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
      username: values.userName,
      password: values.password,
    },
  };
}

export function getTables() {
  return {
    type: 'TABLES_REQUESTED',
  };
}

export function logout() {
  return {
    type: 'LOGOUT_REQUESTED',
  };
}

export function setCurrentComponent(componentName) {
  return {
    type: 'COMPONENT_CHANGE_REQUESTED',
    payload: componentName,
  };
}

export function updateDrawer(value) {
  return {
    type: 'DRAWER_UPDATE_REQUESTED',
    value,
  };
}