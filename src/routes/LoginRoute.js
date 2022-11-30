const express = require('express')
const router = express.Router()
const loginService = require('./../services/LoginService')


router.post('', async (req, res) => {
    try {
        const resposta = await loginService.autenticar(req.body)
        console.log(resposta)
        res.json(resposta)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})

module.exports = router