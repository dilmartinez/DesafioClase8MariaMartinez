const ERROR = { error: "producto no encontrado" };

class Productos {
  constructor() {
    this.productos = []; //array de productos
  }
  // CRUD create read update delete. Metodos

  getAll() {
    //todos los productos
    return this.productos; // lista de productos
  }

  getById(id) {
    //buscar obj por el id
    const obj = this.productos.find((producto) => producto.id === id);
    if (obj) {
      return obj;
    } else {
      return ERROR;
    }
  }
  //crear producto
  create(obj) {
    const arrayOfIds = this.productos.map((product) => product.id);
    const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
    const id = maxId + 1;
    const newObj = { id, ...obj };
    this.productos.push(newObj);
    return newObj;
  }

  getNextId() {
    return this.productos.length + 1; // conseguir siguiente id
  }

  // agregar un producto
  add(producto) {
    this.productos.push(producto); // agregar producto
  }

  save(producto) {
    this.productos.push(producto); // guardar producto
  }

  //actualizar producto
  updateById(id, obj) {
    const foundObj = this.productos.find((product) => product.id === id);
    if (foundObj) {
      const filteredproductos = this.productos.filter(
        (product) => product.id !== id
      );
      const newObj = { id, ...obj };
      this.productos = [...filteredproductos, newObj];
      return newObj;
    } else {
      return ERROR;
    }
  }

  delete(id) {
    let index = this.productos.findIndex((producto) => producto.id === id); // get product by id
    this.productos.splice(index, 1); // borrar producto
  }
}

module.exports = Productos; // export class
