import { postWithBearer } from "./utilities/api.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import getCookie from "./getCookie.js";
import { addInner } from "./utilities/element.js"

const Postdata = () => {
    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/getTopic";
    const datainjson = {};

    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
    } else {
        console.log("token tidak ada " + result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
    }
    // post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        const inputMapping = [
            { id: "judulInput", "path": "topicname" },
            { id: "topikInput", "path": "source.value" },
            { id: "radioOption", "path": "source.source" }
        ]


        inputMapping.forEach(({ id, path }) => {
            const inputElement = document.getElementById(id);
            const value = getNestedValue(result.data, path);
            // console.log(`Value at path ${path}:`, value);
            inputElement.value = value;
        })

        // window.location.href = "sentimen.html";
    } else {
        console.log(result.message);
        alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
    }
};
function getNestedValue(obj, path) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    return value;
}

Postdata();