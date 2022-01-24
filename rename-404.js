import { rename } from 'fs';

rename('./build/404/index.html', './build/404.html', (err) => {
  if (err) throw err;
  console.log('Moved `./build/404/index.html` to ./build/404.html');
});
