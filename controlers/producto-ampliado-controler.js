import { productosServicios } from "../servicios/productos-servicios.js";

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const productos = document.querySelector("[data-producto1]")
  productosServicios.detalleProducto(id).then((prod) => {
    productos.appendChild(nuevoProducto(prod.nombre, prod.precio, prod.descripcion, prod.imgUrl))
  });
};
obtenerInformacion();

const nuevoProducto = (nombre, precio,descripcion, imgUrl) => {
  const productoItem = document.createElement("div");
  const contenido = `
  <div class="producto1-imagen">
  <img class="producto1-img" src="${imgUrl}" alt="imagen producto" data-img>
</div>
<div class="producto1-info">
  <h1 class="producto1-titulo" data-titulo>${nombre}</h1>
  <p class="producto1-precio" data-precio>$ ${precio}</p>
  <p class="producto1-descripcion" data-desc>${descripcion}</p>
  <button class="boton__azul" id="comprar-ahora">Comprar ahora</button>
</div>
  `;
  productoItem.innerHTML = contenido;
  productoItem.classList.add("producto1")
  
  return productoItem
};

//  crea seccion de otros productos

const masProducto = (nombre, precio, imgUrl, id) => {
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
      productos.appendChild(masProducto(elemento.nombre, elemento.precio, elemento.imgUrl, elemento.id))
    });
  }catch(err){
    console.log(err)
  }
}

render()