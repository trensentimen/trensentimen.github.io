import { postWithBearer } from "./utilities/api.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import getCookie from "./getCookie.js";
import { addInner } from "./utilities/element.js"

const Postdata = () => {
    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/getTopic";

    let id = false;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        if (urlParams.get('id') != '') {
            id = urlParams.get('id');
        }
    }
    const datainjson = {
        "_id": id
    };
    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
    } else {
        console.log("token tidak ada " + result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
        window.location.href = "sentimen.html";
    }
    // post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {

        addInner("judul", result.data[0].topicname)
        addInner("topic", result.data[0].source.value)
        addInner("source", result.data[0].source.source)
        
        addInner("judulInput", result.data[0].topicname)
        addInner("topikInput", result.data[0].source.value)
        const defaultValue = result.data[0].source.source; // Change this value as needed
        document.querySelector(`input[type="radio"][value="${defaultValue}"]`).checked = true;
        // window.location.href = "sentimen.html";
    } else {
        console.log(result.message);
        alert(`parameter bermasalah atau sesi anda sudah habis, silahkan ulangi atau logout dan login ulang`);
        window.location.href = "sentimen.html";
    }
};

Postdata();
