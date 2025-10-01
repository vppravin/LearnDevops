const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHad(200, { 'Content-Type': 'text/plain' });
  res.end('HEYO USERS \n Hello from Jenkins + Docker using Poll SCM !');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
