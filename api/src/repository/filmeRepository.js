

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


export async function listarTodosFilmes(){

    const comando = 
    `   SELECT	id_filme		id,
                nm_filme		nome,
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel 	disponivel,
                id_usuario      usuario
        FROM 	tb_filme
    `;

    const [response] = await con.query(comando);
    return response;
}



export async function listarPorNome(nome){

    const comando = 
    `   SELECT	id_filme		id,
                nm_filme		nome,
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel 	disponivel,
                id_usuario      usuario
        FROM 	tb_filme
        WHERE	nm_filme	LIKE ?
    `;

    const [response] = await con.query(comando, [`%${ nome }%`]);
    return response;
}



export async function listarPorId(id){

    const comando = 
    `   SELECT	id_filme		id,
                nm_filme		nome,
                ds_sinopse		sinopse,
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel 	disponivel,
                img_filme		imagem,
                id_usuario      usuario
        FROM 	tb_filme
        WHERE	id_filme	    = ? 
    `;

    const [response] = await con.query(comando, [id]);
    return response[0];
}


export async function alterarFilme(id, filme){

    const comando = 
    `   UPDATE 	    tb_filme
        SET 	    nm_filme		= ?,
                    ds_sinopse		= ?,
                    vl_avaliacao	= ?,
                    dt_lancamento	= ?,
                    bt_disponivel	= ?
        WHERE	    id_filme		= ?`

    const [response] = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id])

    return response.affectedRows;
}



export async function deletarFilme(id){

    const comando = 
    `DELETE FROM    tb_filme
     WHERE          id_filme 	= ?`;

    const [response] = await con.query(comando, [id])
    return response.affectedRows;

}

