

import { con } from "./connection.js";

export async function cadastrarFilme (filme){
    const comando = 
    `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
         VALUES (?, ?, ?, ?, ?, ?)
    `

    const [response] = await con.query(comando, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])

    filme.id = response.insertId;

    return filme;
}


export async function cadastrarImagem (imagem, id){
    const comando = 
    `   UPDATE 	    tb_filme
        SET 	    img_filme		= ?
        WHERE	    id_filme		= ?
    `;

    const [response] = await con.query(comando, [imagem, id])
    
    return response.affectedRows;
}