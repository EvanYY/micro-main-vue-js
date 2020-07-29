export const microApp = [
  // {
  //   name: 'ReactMicroApp',
  //   entry: '//localhost:10100',
  //   container: '#mount-app-container',
  //   activeRule: '#/react'
  // },
  {
    name: 'VueMicroApp',
    entry: 'http://192.168.74.216:10200/',
    container: '#mount-app-container',
    activeRule: '#/vue',
    props: {
      say: 'i am your father'
    }
  }
]
