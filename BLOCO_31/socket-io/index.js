const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});
  
  require('./sockets/chat')(io);
  
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/chat.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
  console.log('http://localhost:3000/');
  
});
