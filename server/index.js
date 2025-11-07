// Simple Socket.IO server for local development
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
  // Simple health-check for browser requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('socket server running');
});

const io = new Server(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // receive username from client via query param already available on connect
  const username = socket.handshake.query?.username;
  if (username) console.log('username:', username);

  // Example handlers: echo messages and emit a greeting
  socket.on('msg-send', (payload) => {
    console.log('msg-send', payload);
    // broadcast to others
    socket.broadcast.emit('msg-receive', payload);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', socket.id, reason);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Socket.IO server listening on ${PORT}`));
