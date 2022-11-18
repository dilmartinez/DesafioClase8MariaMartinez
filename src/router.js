const express = require("express");
const Container = require("../container/productos");

//creando el router
const router = express.Router();
const container = new Container();

//asignando rutas
router.get("/", (_req, res) => {
  const productos = container.getAll();
  res.send(productos);
});

router.get("/:id", (req, res) => {
  //sacar los parametros del id
  const id = req.params.id;
  const product = container.getById(parseInt(id));
  res.send(product);
});

router.post("/", (req, res) => {
  const obj = req.body;
  const newObj = container.create(obj);
  res.send(newObj);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  const updateObj = container.updateById(parseInt(id), obj);
  res.send(updateObj);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id; // get id
  const product = container.getById(id); //  get product by id

  if (product) {
    container.delete(id); // borrrar producto
    res.json(product);
  } else {
    res.json({ error: "producto no encontrado" }); // return error
  }
});

module.exports = router;
