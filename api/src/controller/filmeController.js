
import { cadastrarFilme } from "../repository/filmeRepository.js";

import { Router } from "express";

const server = Router();


server.post('/filme', async (req, resp) => {
    try {
        const filme = req.body;
        
        const response = await cadastrarFilme( filme )

        resp.send(response)

    } catch ( err ){
        resp.status(400).send({
            erro: err.message
        })    
    }
})


export default server;