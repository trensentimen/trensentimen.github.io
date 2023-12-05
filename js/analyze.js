import { postWithBearer } from "./utilities/api.js";
import getCookie from "./getCookie.js";
import { showLoadingModal, hideLoadingModal } from "./utilities/loading.js"

import { docs } from "./getTopic.js";

const analyzeData = () => {
    if (!confirm("Apakah anda yakin ingin menganalisis data?")) {
        return;
    }
    showLoadingModal()
    alert("Berhasil menganalisis data")
    console.log(docs)
    document.getElementById("actionButton").setAttribute("disabled", true);
    responseData()
}

const responseData = (result) => {

    hideLoadingModal()
}

window.analyzeData = analyzeData;