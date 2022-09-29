import descriptiveText from "../../components/descriptiveText";
import sectionInputs from "../sectionInputs";

function mainContent(){
    return/*html*/`
     <main>
      ${descriptiveText()}
      ${sectionInputs()}
     </main>
    `
};

export default mainContent;