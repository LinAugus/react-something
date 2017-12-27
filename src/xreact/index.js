import ReactDOM from './DOM';
import ReactElement from './Element';
import { ReactClassComponent } from './Component';

const render = ReactDOM.render;
const createElement = ReactElement.createElement;

const React = {
  render,
  createElement,
  Component: ReactClassComponent,
};

if (window) {
  window['React'] = React;
}

export default React;