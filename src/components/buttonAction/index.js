import readData from '../../modules/readData'
import validatorData from '../../modules/validatorData'

import './style.css'

function buttonAction(){
    window.buttonaction = {}
    window.buttonaction.handleClick = () => {
        //   const numberPixel = Number(document.querySelector('#number-pixel'))
        //   const numberRem = Number(document.querySelector('#number-rem'))
    
      let values = readData(numberPixel, numberRem)

      if(validatorData(values)){
        console.log(values);
      }
        
    }
    return /*html*/`
     <button class="convert-button" onclick="buttonaction.handleClick()">converter</button>
    `
};

export default buttonAction;