const listaProductos = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProducto = (nombre, imgUrl, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      imgUrl,
      descripcion,
      precio,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fue posible crear el producto");
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarProducto = (nombre, descripcion, imgUrl, precio, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, imgUrl, id }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

export const productosServicios = {
  listaProductos,
  crearProducto,
  detalleProducto,
  actualizarProducto,
  eliminarProducto,
};
