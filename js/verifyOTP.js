import { post } from "./utilities/api.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { showLoadingModal, hideLoadingModal } from "./utilities/loading.js"
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const verifyOTP = () => {
    showLoadingModal()
    const email = getCookie("email")

    if(!email){
        alert("Email tidak ditemukan")
        hideLoadingModal()
        document.href = "sendOTP.html"
        return
    }

    const target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/verifyOtp";
    const datainjson = {
        email: email,
        otp: getValue("otp")
    };

    post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        setCookie("email", getValue("email"));
        setCookie("otp", getValue("otp"));
        hideLoadingModal()
        alert(`Kode OTP benar`);
        window.location.href = "resetPassword.html";
    } else {
        hideLoadingModal()
        alert(`Kode OTP salah`);
    }
};

const setCookie = (cname, cvalue) => {
    document.cookie = `${cname}=${cvalue};path=/`;
};



window.verifyOTP = verifyOTP;
