import { pxValue, remValue } from '../modules/readData';

function validateData(){
  let msg = ''

    if(Number(pxValue()) =='' || Number(pxValue())<=0){
        msg += 'Insira os valores do Pixels. \n'
    }else if (remValue() == '' || remValue() <= 0){
      msg += 'Insira o valor de rem.'
     }
    if (msg != ''){
        alert(msg)
        return false
    }
    return true 
}

export default validateData