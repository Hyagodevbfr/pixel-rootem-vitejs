import { pxValue, remValue } from "./readData"

function convertDatas(){
    let conversion = pxValue()/remValue()
    

    console.log(`${conversion.toFixed(2)}rem`);
};

export default convertDatas