// script.js
function SendMail() {
    var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    message : document.getElementById("message").value,
    }
    emailjs.send("service_s5kgutf","template_jo2yazr", params).then(function (res) {
        alert("Success! " + res.status);
    })
}