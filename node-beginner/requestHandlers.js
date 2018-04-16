const requestHandlers = module.exports = {};

requestHandlers.start = () => {
  console.log('Request handler "start" was called.');
};

requestHandlers.upload = () => {
  console.log('Request handler "upload" was called.');
};

// exports.start = start;
// exports.upload = upload;
