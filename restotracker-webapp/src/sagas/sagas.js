import { takeEvery, put, call } from 'redux-saga/effects';
import { history } from '../store/configureStore';
import { app } from '../store/store';
import * as API from '../services/api';

function* login(action) {
  try {
    const token = yield call(API.login, action.payload.email, action.payload.password);
    localStorage.setItem('token', token.accessToken);
    yield put({
      type: 'LOGIN_SUCCEEDED',
      token: token.accessToken,
    });
    yield put({
      type: 'RESTORE_USER_BY_TOKEN_REQUESTED',
    });
    history.push('/');
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

function* logout() {
  try {
    localStorage.removeItem('token');
    yield put({
      type: 'LOGOUT_SUCCEEDED',
    });
    app.logout();
    history.push('/login');
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

function* restoreUserByToken() {
  try {
    const token = localStorage.getItem('token');
    const userId = yield call(API.verifyToken, token);
    if (userId) {
      const user = yield call(API.getUserById, userId);
      yield put({
        type: 'RESTORE_USER_BY_TOKEN_SUCCEEDED',
        token,
        user,
      });
    }
  } catch (error) {
    console.log(error.message); // eslint-disable-line
    localStorage.removeItem('token');
    history.push('/login');
  }
}

function* componentChange(action) {
  try {
    yield put({
      type: 'COMPONENT_CHANGE_OK',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

function* updateDrawer(value) {
  try {
    yield put({
      type: 'DRAWER_UPDATE_SUCCEEDED',
      payload: value,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('LOGIN_REQUESTED', login);
  yield takeEvery('LOGOUT_REQUESTED', logout);
  yield takeEvery('RESTORE_USER_BY_TOKEN_REQUESTED', restoreUserByToken);
  yield takeEvery('DRAWER_UPDATE_REQUESTED', updateDrawer);
  yield takeEvery('COMPONENT_CHANGE_REQUESTED', componentChange);
}