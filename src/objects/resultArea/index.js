import convertDatas from '../../modules/convertDatas'
import copyResult from '../../modules/copyResult'
import './style.css'

function resultArea(){
    window.copyresult = {}
    window.copyresult.handleClickCopy = () => {
       if (convertDatas() != ''){
        copyResult()
     }
    }

    return /*html*/`
     <span class="result-text" onclick="copyresult.handleClickCopy()">Informe os valores para calcular.</span>
    `
};

export default resultArea;