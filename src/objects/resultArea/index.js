import { remConverted } from '../../modules/convertDatas'
import copyResult from '../../modules/copyResult'
import { remValue } from '../../modules/readData'
import './style.css'

function resultArea(){
    window.copyresult = {}
    window.copyresult.handleClickCopy = () => {
        if (remConverted() != 0 && remValue() != 0){
            copyResult(remConverted())
        }else{
            return false
        }
    }

    return /*html*/`
     <span class="result-text" onclick="copyresult.handleClickCopy()">Informe os valores para calcular.</span>
    `
};

export default resultArea;