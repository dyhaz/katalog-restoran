import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/colors.css';
import App from './views/app';

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
});
