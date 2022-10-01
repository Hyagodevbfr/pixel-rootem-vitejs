export function resultArea(value){
    const $result = document.querySelector('.result-text')

    $result.innerHTML = `<abr title="Clique para copiar">${value.toFixed(2)}rem</abr>`  

    return resultArea
}