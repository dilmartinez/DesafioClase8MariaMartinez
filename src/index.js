const express = require("express");
//importar el router para usarlo en el index.
const router = require("./router");

const PORT = 8080;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/productos", router);

//config puerto
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//config error
server.on("error", (error) => {
  console.log(`Error corriendo el servidor ${error}`);
});
