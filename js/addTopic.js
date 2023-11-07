import { postWithBearer } from "./utilities/api.js";
import getCookie from "./getCookie.js";
import { getValue } from "./utilities/element.js"

const PostAddTopic = () => {
    const radioButtons = document.querySelectorAll('input[name="radioOption"]');
    let selectedValue;

    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
        }
    });

    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/addTopic";
    const datainjson = {
        topicname: getValue("topikInput"),
        source: {
            source: selectedValue,
            value: getValue("topikInput")
        }
    };
    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
        alert("Berhasil menambahkan topik")
    } else {
        console.log("token tidak ada " + result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
    }
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        window.location.href = "sentimen.html";
    } else {
        console.log(result.message);
        alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
    }
};

const setCookieWithExpireHour = (cname, cvalue, exhour) => {
    const d = new Date();
    d.setTime(d.getTime() + exhour * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export default PostAddTopic;
