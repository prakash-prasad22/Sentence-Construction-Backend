const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(cors()); // Enable CORS
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8000; 

server.listen(port);
