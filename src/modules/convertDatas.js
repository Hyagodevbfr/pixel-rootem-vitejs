import { pxValue, remValue } from "./readData"
import { resultArea } from "./resultArea"

 function convertDatas(){
    let conversion = pxValue()/remValue()
    let remConverted = Number(conversion)
    
    resultArea(remConverted)

    return remConverted;
};

export default convertDatas
