import { productosServicios } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector("[data-nombre]");
  const imgUrl = document.querySelector("[data-imgUrl]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  productosServicios.detalleProducto(id).then((prod) => {
    nombre.value = prod.nombre;
    imgUrl.value = prod.imgUrl;
    precio.value = prod.precio;
    descripcion.value = prod.descripcion;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector("[data-nombre]").value;
  const imgUrl = document.querySelector("[data-imgUrl]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  productosServicios
    .actualizarProducto(nombre, descripcion, imgUrl, precio, id)
    .then(() => {
      window.location.href = "../productos.html";
    });
});
