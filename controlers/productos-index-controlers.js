import { productosServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, precio, imgUrl, id) => {
  const productoItem = document.createElement("div");
  const contenido = `
  <img class="producto-img" src="${imgUrl}" alt="imagen producto">
  <p class="producto-descripcion">${nombre}</p>
  <p class="producto-precio">$ ${precio}</p>
  <a class="producto-link" href="../producto-ampliado.html?id=${id}">Ver producto</a>
  `;
  productoItem.innerHTML = contenido;
  productoItem.classList.add("producto-item")
  
  return productoItem
};

const productos = document.querySelector("[data-producto]")

const render = async ()=>{
  try{
    const listaProductos = await productosServicios.listaProductos()
    listaProductos.forEach(elemento => {
      productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.imgUrl, elemento.id))
    });
  }catch(err){
    console.log(err)
  }
}

render()