import { productosServicios } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const imgUrl = document.querySelector("[data-imgUrl]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;

  productosServicios
    .crearProducto(nombre, imgUrl, precio, descripcion)
    .then((respuesta) => {
      window.location.href = "../index.html";
      alert("El producto se creo correctamente");
    })
    .catch((err) => console.log(err));
});
