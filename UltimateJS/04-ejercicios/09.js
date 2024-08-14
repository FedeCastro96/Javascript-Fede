const productos = []

const agregarProducto = () => {
    const id= prompt ('ingrese el código del producto')
    const nombre = prompt ('ingrese el nombre del producto')

    const producto = {id: id, nombre:nombre}

    productos.push(producto)
}


agregarProducto();
agregarProducto();
agregarProducto();
console.log(productos);
  