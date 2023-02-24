if (typeof window === 'undefined') {
  // import('./server').then(s => {
  //   s.server.listen()
  // })
} else {
  console.log('asdf');
  const { worker } = require('./browser');
  worker.start();
}
export {};
