module.exports = app => {
    const items = require("../controllers/item.controller.js");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    // Creación de un nuevo articulos
    router.post("/", upload.single('file'), items.create);

    // Recuperar todos los articulos
    router.get("/", items.findAll); 

    // Recuperar un articulos por su id
    router.get("/:id", items.findOne);

    // Actualizamos un articulos por su id
    router.put("/:id", items.update);

    // Eliminamos un articulos
    router.delete ("/:id", items.delete);

    // Eliminamos todos los articulos
    router.delete("/", items.deleteAll);    

    app.use('/api/items', router);
};