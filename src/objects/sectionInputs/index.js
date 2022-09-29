import buttonAction from "../../components/buttonAction";
import numberPixel from "../../components/numberPixel";
import numberRem from "../../components/numberRem";
import resultArea from "../resultArea";

function sectionInputs(){
    return /*html*/`
     <section>
       ${numberPixel()}
       ${numberRem()}
       ${buttonAction()} 
       ${resultArea()} 
     </section>
    `
};

export default sectionInputs;