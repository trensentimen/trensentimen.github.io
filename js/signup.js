import { post } from "./utilities/api.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const PostSignUp = () => {
    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/register";
    const datainjson = {
        email: getValue("email"),
        password: getValue("password"),
        name: getValue("name")
    };
    console.log(datainjson);
    post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    console.log(result);
    if (result.status === true) {
        alert(`Berhasil Masuk ${result.message}`);
        window.location.href = "login.html";
    } else {
        alert(`Gagal Signup, ` + result.message );
    }
};

window.PostSignUp = PostSignUp;
