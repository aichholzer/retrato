const express = require('express');
const [app, port] = [express(), process.env.PORT];

app.use(
  require('powered')(),
  require('compression')(),
  require('serve-favicon')(`${__dirname}/public/img/favicon.png`),
  require('./lib/router')({
    express,
    routes: `${__dirname}/routes`,
    controllers: `${__dirname}/controllers`
  }),
);

app.listen(port, function listener() {
  const { address } = this.address();
  console.log(`\n 🚀  ${address.replace('::', '') || 'http://localhost'}:${port}`);
});
