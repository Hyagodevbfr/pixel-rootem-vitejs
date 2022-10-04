import { pxValue, remValue } from "./readData"
import { resultArea } from "./resultArea"

export function conversion(){
     const Conversion = pxValue()/remValue()
    
    return Conversion
}

export function remConverted(){
     const Converted = conversion()

    return Converted
}

export default function convertDatas(){
     resultArea(remConverted())

    return remConverted;
};

