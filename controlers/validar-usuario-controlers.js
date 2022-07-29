import { usuarios } from "../servicios/cliente-servicios.js";


 const email = "andres94.af@gmail.com";
 const contraseña = "Andres12345"
 const form = document.querySelector("[data-form-login]")

 form.addEventListener("submit", (evento)=>{
  evento.preventDefault()
  const mail = document.querySelector("[data-form-email]")
  const pass = document.querySelector("[data-form-contraseña]")

  if(mail.value===email && pass.value===contraseña){
    alert("Se logueo correctamente!")
    window.location.href = "../productos.html"
  }else{
    alert("usuario o contraseña incorrectos. Intente de nuevo")
    mail.value = "";
    pass.value = "";
  }
 })