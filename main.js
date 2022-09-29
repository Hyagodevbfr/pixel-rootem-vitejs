import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import headerTitle from './src/components/HeaderTitle/';

const $body = document.querySelector('#root');

$body.insertAdjacentHTML('beforeend',
  `
    ${headerTitle()}
  `
);