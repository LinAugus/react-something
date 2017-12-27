import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import VDOM from './VDOM';

console.log('##', VDOM);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import React from './xreact';
// import ReactDOM from './xreact/DOM';
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <span>It is Work!</span>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));