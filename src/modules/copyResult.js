function copyResult(value){
    navigator.clipboard.writeText(copyRem(value))
     alert('Copiado!')
}
function copyRem(value){
    let Rem = `${value.toFixed(2)}rem`
    return Rem
}

export default copyResult;