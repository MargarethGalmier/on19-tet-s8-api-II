const express = require("express")

const app = express()
const port = 3000
const produtos = require("./model/produtos.json")

app.use(express.json())

//this lists all products trough a GET route
app.get("/produtos", (req, res) => {
    res.json(listaProd);
  });

//- this exposes a GET route and receives the product ID, returning only it
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)

//this adds a new product to the list
  app.post("/produtos", (req, res) => {
    const body = req.body;
  
    listaProd.push(body);
  
    res.json(listaProd);
  });

app.get("/produtos", (req, res) => {
    const FilterName = req.query.name
    const FilterValue = req.query.value
    const ChosenProduct = produtos.filter((item) => {
    if (FilterName) {
    return item.name.includes(FilterName)
    }
    if (FilterValue) {
    return item.value <= FilterValue
    }
    return item
})
    res.json(ChosenProduct)
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const ChosenProduct = produtos.filter((item) => item.id == id)
    res.json(ChosenProduct)
})

app.post("/produtos", (req, res) => {
    const body = req.body
    produtos.push(body)
    res.json(produtos)
    console.log(body);
})

app.listen(port, () => {
    console.log("API is listening on door 3000.");
})
})
