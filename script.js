fuction sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("BI-QbmaWFu1RIaSA2","template_fdiazno",parms).then(alert("Email Sent!!"))
}
