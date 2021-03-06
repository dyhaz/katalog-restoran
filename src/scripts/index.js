import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/skeleton.css';
import '../styles/colors.css';
import App from './views/app';
import WebSocketInitiator from './utils/websocket-initiator';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import './views/custom-elements/restaurants/index';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
