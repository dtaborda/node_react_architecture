require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Employees test',
    description: '',
    head: {
      titleTemplate: 'employees: %s',
      meta: [
        { name: 'description', content: 'app content.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'employee' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'employee' },
        { property: 'og:description', content: 'employee.' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200 ' }
      ]
    }
  }

}, environment);
