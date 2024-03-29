import { postWithBearer } from "./utilities/api.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import getCookie from "./getCookie.js";
import { addInner } from "./utilities/element.js"
import { card } from "./temp/table.js";
import {showLoadingModal, hideLoadingModal} from "./utilities/loading.js"

const Postdata = () => {
    showLoadingModal()
    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/getAllTopics";
    const datainjson = {};

    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
    } else {
        // console.log("token tidak ada "+result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
        hideLoadingModal()
    }
    // post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        let isiRow = (value) => {
            let content =
                card.replace("#JUDUL#", value.topicname)
                    .replace("#SOURCE#", value.source.source)
                    .replace("#ID#", value._id)
            addInner("listTopic", content);
        }

        result.data.forEach(isiRow)
        hideLoadingModal()
    } else {
        console.log(result.message);
        hideLoadingModal()
        alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
    }
};

Postdata();
