import { postWithBearer } from "./utilities/api.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import getCookie from "./getCookie.js";
import { addInner } from "./utilities/element.js"
import { showLoadingModal, hideLoadingModal } from "./utilities/loading.js"
import { tabelTopic } from "./temp/table.js";

const analyzeData = () => {
    if (!confirm("Apakah anda yakin ingin menganalisis data?")) {
        return;
    }
    showLoadingModal()
    alert("Berhasil menganalisis data")
    document.getElementById("actionButton").setAttribute("disabled", true);
}

const responseData = (result) => {

    hideLoadingModal()
}

window.analyzeData = analyzeData;