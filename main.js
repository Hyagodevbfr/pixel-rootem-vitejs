import './src/tools/mediaQuery.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import './src/tools/mediaQuery.css'
import headerTitle from './src/components/HeaderTitle/';
import mainContent from './src/objects/mainContent';


const $body = document.querySelector('#root');

$body.insertAdjacentHTML('beforeend',
  `
    ${headerTitle()}
    ${mainContent()}
  `
);