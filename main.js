import './style.css'

import prismCss from 'prismjs/themes/prism-okaidia.css?inline';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  ${prismCss}
`
