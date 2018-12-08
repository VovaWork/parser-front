const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected');

//   socket.on('personalData', data => {
//       console.log(data);
//   });

  socket.emit('sendData', [
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
    'https://github.com/socketio/socket.io/blob/HEAD/docs/README.mdhttps://github.com/socketio/socket.io/blob/HEAD/docs/README.md',
  ]);
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`))