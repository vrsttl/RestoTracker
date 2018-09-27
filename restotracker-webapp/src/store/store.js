import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
require('dotenv');

export const host = process.env.HOST;
export const socket = io(host);
export const app = feathers().configure(socketio(socket)).configure(auth({ storage: localStorage }));
