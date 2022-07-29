export const usuarios = () => fetch("tp://localhost:3000/cliente").then(respuesta => respuesta.json())

