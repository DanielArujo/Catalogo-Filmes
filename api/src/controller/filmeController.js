
import { cadastrarFilme, cadastrarImagem } from "../repository/filmeRepository.js";

import { Router } from "express";

const server = Router();


server.post('/filme', async (req, resp) => {
    try {
        const filme = req.body;
        
        if(!filme.usuario){
            throw new Error('Usuario precisa estar logado')
        }

        if(!filme.nome){
            throw new Error('Campo do nome é obrigatorio')
        }

        if(!filme.sinopse){
            throw new Error('Campo da sinopse é obrigatorio')
        }

        if(!filme.avaliacao){
            throw new Error('Campo de avaliação é obrigatorio')
        }

        if(!filme.lancamento){
            throw new Error('A data de lançamento é obrigatoria')
        }

        if(!filme.disponivel){
            throw new Error('é necessario dizer se esta disponivel')
        }

        const response = await cadastrarFilme( filme )

        resp.send(response)

    } catch ( err ){
        resp.status(400).send({
            erro: err.message
        })    
    }
})



server.put('/filme/:id/imagem', async ( req, resp ) => {
    try {
        const { id } = req.params

        const response = await cadastrarImagem( id )

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )


export default server;