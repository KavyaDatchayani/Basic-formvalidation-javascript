const fmessage = document.getElementById("firstname");
const emessage = document.getElementById("emailmessage");
const fName = document.getElementById("fname")
const mail = document.getElementById("email")
const pw = document.getElementById("password")
const pwmessage = document.getElementById("pwmessage")
const cw = document.getElementById("cpassword")
const cwmessage = document.getElementById("cwmessage")
const submit = document.getElementById("submitbtn")
const validatemessage = document.getElementById("validatem")


function validateForm() {
    let ifvalid = true

    let minlength = 8

    if (fName.value.length < minlength) {
        fmessage.innerText = "Name should be more then 8 characters";
        ifvalid = false;
    } else {
        fmessage.innerText = "";

    }

    if (mail.value[0] == mail.value[0].toUpperCase()) {
        emessage.innerText = "Email Id should not start with caps"
        ifvalid = false;
    } else if (!mail.value.endsWith("@gmail.com")) {
        emessage.innerText = "Email id should end with @gmail.com"
        ifvalid = false;
    } else {
        emessage.innerText = ""

    }

    function containsUppercase(str) {
        for (let char of str) {
            if (char >= 'A' && char <= 'Z') {
                return true;
            }
        }
        return false;
    }
    if (pw.value.length < 8) {
        pwmessage.innerText = "Password should be more than 8 characters"
        ifvalid = false;
    } else if (pw.value.length > 20) {
        pwmessage.innerText = "Password should not be more than 20 characters"
        ifvalid = false;
    } else if (!containsUppercase(pw.value)) {
        pwmessage.innerText = "Password should contain atleast one Caps"
        ifvalid = false;
    } else {
        pwmessage.innerText = ""

    }


    if (pw.value !== cw.value) {
        cwmessage.innerText = "Password Mismatch"
        ifvalid = false;
    } else {
        cwmessage.innerText = ""

    }

    submit.disabled = !ifvalid;
    if (ifvalid) {
        validatemessage.innerText = "";
    }


}


fName.addEventListener("change", validateForm);
pw.addEventListener("change", validateForm);
mail.addEventListener("change", validateForm);
cw.addEventListener("change", validateForm);


