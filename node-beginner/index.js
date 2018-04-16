const requestHandlers = require('./requestHandlers');

const server = require('./server');
const router = require('./router');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);
