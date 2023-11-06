import { postWithBearer } from "./utilities/api.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import getCookie from "./getCookie.js";
import { addInner } from "./utilities/element.js"
import { card } from "./temp/table.js";

const Postdata = () => {
    const target_url = "https://us-central1-trens-project.cloudfunctions.net/getAllTopic";
    const datainjson = {};

    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
    } else {
        console.log("token tidak ada "+result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
    }
    // post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        let isiRow = (value) => {
            console.log(value)
            let content =
                card.replace("#JUDUL#", value.topicname)
                    .replace("#SOURCE#", value.source.source)
                    .replace("#LOVE#", value.program_studi ? value.program_studi : "0")
                    .replace("#VIEW#", value.fakultas ? value.fakultas : "0")
            addInner("listTopic", content);
        }

        result.data.forEach(isiRow)

        window.location.href = "sentimen.html";
    } else {
        console.log(result.message);
        alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
    }
};

Postdata();
