if (typeof window === 'undefined') {
  // import('./server').then(s => {
  //   s.server.listen()
  // })
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./browser');
  worker.start();
}
export {};
