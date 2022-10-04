function copyResult(value){
    navigator.clipboard.writeText(copyRem(value))
     alert(`${copyRem(value)} copiado!`)
}
function copyRem(value){
     let Rem = `${value.toFixed(2)}rem`
    return Rem
}

export default copyResult;