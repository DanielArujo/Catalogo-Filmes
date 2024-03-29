
import usuarioController from './controller/usuarioController.js'
import filmeController from './controller/filmeController.js'


import 'dotenv/config'

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors())
server.use(express.json())

//Api enviando a imagem como resposta
server.use('/storage/capaFilmes' , express.static('storage/capaFilmes'));

//Endpoints
server.use(usuarioController);
server.use(filmeController);


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));