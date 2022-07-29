import { productosServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, precio, imgUrl, id) => {
  const productoItem = document.createElement("div");
  const contenido = `
  <div class="producto-edicion">
    <img class="producto-img" src="${imgUrl}" alt="imagen producto">
    <button class="icono-eliminar" id="${id}"><img class="iconito" src="img/basurero.png" alt="eliminar"></button>
    <a class="icono-editar" href="../editar-producto.html?id=${id}"><img class="iconito" src="img/lapiz.png" alt="editar"></a>
  </div>
  <p class="producto-descripcion">${nombre}</p>
  <p class="producto-precio">$ ${precio}</p>
  <p class="producto-numero">id#: ${id}</p>
  `;
  productoItem.innerHTML = contenido;
  productoItem.classList.add("producto-item");
  const btn = productoItem.querySelector("button");
  btn.addEventListener("click", () => {
    const confirmacion = confirm("Estas seguro de eliminar el producto?")
    if(confirmacion){
      const id = btn.id;
      productosServicios
      .eliminarProducto(id)
      .then((respuesta) => respuesta)
      .catch((err) => err);
    }return
  });

  return productoItem;
};

const productos = document.querySelector("[data-producto]");

const render = async () => {
  try {
    const listaProductos = await productosServicios.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(
          elemento.nombre,
          elemento.precio,
          elemento.imgUrl,
          elemento.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
