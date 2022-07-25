
import { alterarFilme, cadastrarFilme, cadastrarImagem, deletarFilme, listarPorId, listarPorNome, listarTodosFilmes } from '../repository/filmeRepository.js';

import { Router } from 'express';
import multer from 'multer';

const server = Router();
const local = multer({ dest: 'storage/capaFilmes' })


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

        if(filme.disponivel === undefined){
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



server.put('/filme/:id/imagem', local.single('capa') , async ( req, resp ) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const response = await cadastrarImagem( imagem, id )
        if( response != 1 ) {
            throw new Error ( "Algo deu errado na inserção da imagem" )
        } else {
            resp.sendStatus(201).send();
        }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )


server.get('/filme/', async (req, resp) => {
    try {

        const response = await listarTodosFilmes();

        resp.send(response)
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/filme/busca', async (req, resp) => {
    try {

        const { nome } = req.query;

        const response = await listarPorNome(nome);

        if(response.length === 0){
            resp.status(404).send([])
        } else {
            resp.send(response)
        }

        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/filme/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        
        const response = await listarPorId(id);

        if(response.length === 0){
            resp.status(404).send([])
        } else {
            resp.send(response)
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.put('/filme/:id', async (req, resp) => {
    try {

        const { id } = req.params;
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

        if(filme.disponivel === undefined ){
            throw new Error('é necessario dizer se esta disponivel')
        }

        const response = await alterarFilme(id, filme)

        if( response != 1 ) {
            throw new Error ( "Algo deu errado na alteração do filme" )
        }  else {
            resp.sendStatus(201).send();
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )



server.delete('/filme/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const response = await deletarFilme( id );

        if( response != 1 ) {
            throw new Error ( "Algo deu errado na remoção do filme" )
        } else {
            resp.sendStatus(201).send();
        }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;