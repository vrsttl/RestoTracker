import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';

export const host = 'http://localhost:3030';
export const socket = io(host);
export const app = feathers().configure(socketio(socket)).configure(auth({ storage: localStorage }));
