import convertDatas from '../../modules/convertDatas';
import { pxValue, remValue } from '../../modules/readData';
import validateData from '../../modules/validateData';
import './style.css'


function buttonAction(){
  window.buttonaction = {}
  window.buttonaction.handleClick = () => {
    let values = {} 
    pxValue() 
    remValue()

    if (validateData(values)){
      convertDatas()
    }
  }
     
    return /*html*/`
     <button class="convert-button" onclick="buttonaction.handleClick()">converter</button>
    `
};

export default buttonAction;