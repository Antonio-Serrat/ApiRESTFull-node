const express = require('express')
const app = express();
const PORT = process.env.PORT | 8080
const productsRouter = require("./routes/products")


app.use(express.json())
app.use("/api/productos", productsRouter);



const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`)
})

server.on("error", (err) => {
    console.log(err)
})