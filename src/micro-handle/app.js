console.log('app process.env.NODE_ENV', process.env.NODE_ENV)
export const { microApp } = require(`./app-list/${process.env.NODE_ENV}/index.js`)
console.log('app microApp', microApp)
