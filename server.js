const http = require('http');
const fs = require('fs');
const {join} = require('path');

const url = require('url');

const distDir = 'dist';
const resolve = (path) => `${distDir}/${path}`;

const filetypes = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'application/javascript',
  'svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let currentUrl = url.parse(req.url, true).pathname;

  if (/^[^.]+$/.test(currentUrl)) {
    if (!currentUrl.endsWith('/')) {
      res.setHeader('Location', req.url + '/');
      res.writeHead(302);
      res.end();
      return;
    }
    currentUrl = `${currentUrl}index.html`;
    res.setHeader('Content-Type', `${filetypes['html']}`);
  } else {
    const ft = `${currentUrl.split('.')[1]}`;
    res.setHeader('Content-Type', `${filetypes[ft]}`);
  }

  const newPath = join(__dirname, resolve(`${currentUrl}`));

  try {
    body = fs.readFileSync(newPath);
  } catch (e) {
    res.statusCode = 404;
    res.end();

    return;
  }
  res.writeHead(200);

  res.end(body);
}).listen(3000);

module.exports = server;
