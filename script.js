fuction sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_dnnwurd","template_hmtuh4u",parms).then(alert("Email Sent!!"))
}
