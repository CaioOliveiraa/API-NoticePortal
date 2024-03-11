const express = require('express');
const posts = require('../model/posts');
const cors = require('cors')
const router = express.Router();

const options ={
    origin: ["http://localhost:5000", "notice-portal.vercel.app"] //coloco o dominio na whitelist de dominios que podem fazer requisições para o meu backend
}

router.use(cors()) //permite que outros dominios faças fetchs para o meu backend.

router.get("/all", (req, res) => {
    // Passando o objeto para string
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)

    res.send("Post adicionado")
})

router.delete("/delete", (req, res) => {
    const delId = req.query.id;

    posts.delPost(delId);

    res.send("Post apagado com sucesso")
    
})

module.exports = router;