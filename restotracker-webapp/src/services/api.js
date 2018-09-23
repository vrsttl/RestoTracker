import { app, socket } from '../store/store';

export function login(email, password) {
  return new Promise((resolve, reject) => {
    socket.emit('authenticate', {
      strategy: 'local',
      email,
      password,
    }, (error, data) => {
      if (error) {
        reject(error);
      }
      socket.emit('authenticate', {
        token: data.accessToken,
      }, (mesSock, dataSock) => {
        resolve(dataSock);
      });
    });
  });
}

export function verifyToken(token) {
  return new Promise((resolve, reject) => {
    app
      .passport
      .verifyJWT(token).then((data) => {
        socket.emit('authenticate', {
          strategy: 'jwt',
          accessToken: token,
        }, () => {
          resolve(data.userId);
        });
      }).catch((err) => {
        reject(err);
      });
  });
}

export const getUserById = userId => (
  new Promise((resolve, reject) => {
    socket.emit('get', 'users', userId, (error, user) => {
      if (error) {
        reject(error);
      }
      resolve(user);
    });
  })
);

export const getData = dataType => (
  new Promise((resolve, reject) => {
    socket.emit('find', dataType, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  })
);

export const getItem = (dataType, id) => (
  new Promise((resolve, reject) => {
    socket.emit('get', dataType, id, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  })
);

export const postData = (dataType, data) => (
  new Promise((resolve, reject) => {
    socket.emit('create', dataType, data, (error, res) => {
      if (error) {
        reject(error);
      }
      resolve(res);
    });
  })
);

export const patchData = (dataType, payload) => (
  new Promise((resolve, reject) => {
    socket.emit('patch', dataType, payload.id, { deprecated: true }, (error) => {
      if (error) {
        reject(error);
      }
      socket.emit('create', dataType, payload, (err, res) => {
        if (error) {
          reject(err);
        }
        socket.emit('patch', dataType, res._id, { parent: payload.id }, (errr, ress) => {
          if (error) {
            reject(errr);
          }
          resolve(ress);
        });
      });
    });
  })
);
