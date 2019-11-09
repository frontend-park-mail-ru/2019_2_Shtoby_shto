const http = require('http');
const fs = require('fs');
const {join} = require('path');

const url = require('url');

const deployVar = process.env.NOWSECRET;
console.log(deployVar);

const distDir = deployVar ? '' : 'dist';

const filetypes = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'application/javascript',
  'svg': 'image/svg+xml',
};

const requestsObject = (req, res) => {
  let currentUrl = url.parse(req.url, true).pathname;

  if (/^[^.]+$/.test(currentUrl)) {
    res.setHeader('Content-Type', `${filetypes['html']}`);
    currentUrl = `/index.html`;
  } else {
    const ft = `${currentUrl.split('.')[1]}`;
    res.setHeader('Content-Type', `${filetypes[ft]}`);
    currentUrl = `${distDir}/${currentUrl}`;
  }

  const newPath = join(__dirname, currentUrl);

  try {
    body = fs.readFileSync(newPath);
  } catch (e) {
    console.log(e);
    res.statusCode = 404;
    res.end();

    return;
  }
  res.writeHead(200);

  res.end(body);
};

module.exports = deployVar
  ? requestsObject
  : http.createServer(requestsObject).listen(3000); 
