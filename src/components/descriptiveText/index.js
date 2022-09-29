import '../../styles/base/paragraph.css'
import '../../styles/base/strong.css'


function descriptiveText(){
    return /*html */`
    <article>
        <p id="descricption">A <strong>rem</strong>('root em') é o tamanho de fonte do elemento-raiz do documento. Diferentemente do <strong>em</strong>, que pode ser diferente para cada elemento, <strong>rem</strong> é constante em todo o documento. Por padrão <strong>1rem</strong> equivale a <strong>16px</strong>. Outras unidades em desenvolvimento permitem especificar tamanos relativos a janela do leitor.</p>
    </article>
    `
};

export default descriptiveText;