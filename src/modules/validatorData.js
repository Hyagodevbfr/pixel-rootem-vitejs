import readData from "./readData"

function validatorData(values){
    const msg = ''

    if (readData().length == '0' || readData.numberPixel <= 0){
        msg += 'Informe os Pixels. \n'
    }else if (readData.numberRem == ''){
        msg += 'O padrão de Rem será aplicado. \n'
         remValue = 16
        //convert()
    }else if(msg != ''){
        alert(msg)
        return false
    }
    return true 
};

export default validatorData;