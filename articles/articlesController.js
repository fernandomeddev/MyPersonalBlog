const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA DE artigos")
})

router.get("/admin/articles/new",(req, res) => {
    res.send("ROTA PARA CRIAR UMA NOVA Artigo!")
})

module.exports = router;