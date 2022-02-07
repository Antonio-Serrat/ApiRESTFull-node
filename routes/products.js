const route = require('color-convert/route');
const express = require('express');
const { Router } = express;

const router = Router();
let id = 0;
const products = [];

router.post("/", (req, res) => {
    const {title, price, thumbnail} = req.body;
    id +=1;
    products.push({id, title, price, thumbnail});
    res.status(201).send(JSON.stringify(id))
})

router.get("/", (req, res) => {
    res.send(products)
})

router.get("/:id", (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    !product ? res.status(404).send({error: "Producto no encontrado"}) : res.status(200).send(product)
})

router.put("/:id", (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    const productUpdate = req.body;
    if(product) {
        productUpdate.tittle != null ? product.title = productUpdate.title : product.title = product.title;
        productUpdate.price != null ? product.price = productUpdate.price : product.price = product.price;
        productUpdate.thumbnail != null ? product.thumbnail = productUpdate.thumbnail : product.thumbnail = product.thumbnail;

        res.status(203).send("Producto actualizado")
    }else{
        res.status(404).send("No se enconto el producto")
    }
})

router.delete("/:id", (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    if(product){
        let i = products.indexOf(product)
        products.splice(i, 1)
        res.status(202).send("Se borro con exito el producto") 
    }else {
        res.status(404).send("No se encontro el producto")
    }
})


module.exports = router;