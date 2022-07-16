USE catalogoFilmesDB;

-- carga inicial de usuario adm

INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
	 VALUES	('admin', 'admin@admin.com', '1234');
     
     
     
-- caso de uso 1: efetuar login

SELECT 	id_usuario		id,
		nm_usuario		nome,
		ds_email		email
  FROM	tb_usuario
  WHERE ds_email 		= 'admin@admin.com'
	AND ds_senha		= '1234';

-- caso de uso 2: cadastrar novo filme

INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel, img_filme)
	 VALUES (1, 'Piratas do Caribe 5', 'Esse nao é tao bom', 7.6, '2010-08-15', true, '/storage/images/pc.jpg');
     
     
-- caso de uso 3: alterar filme

UPDATE 	tb_filme
   SET 	nm_filme		= 'Piratas do Caribe',
		ds_sinopse		= 'Esse é o melhor',
        vl_avaliacao	= 9.7,
        dt_lancamento	= '2003-08-29',
        bt_disponivel	= true,
        img_filme		= '/storage/images./pc1.jpg'
 WHERE	id_filme		= 2;
 

-- caso de uso 4: deletar filme

DELETE FROM tb_filme
	  WHERE id_filme 	= 1;
      
      
-- caso de uso 5: consultar todos os filme

SELECT	id_filme		id,
		nm_filme		nome,
        vl_avaliacao	avaliacao,
        dt_lancamento	lancamento,
        bt_disponivel 	disponivel
 FROM 	tb_filme;
 
 
 -- caso de uso 6: consultar filme por nome

SELECT	id_filme		id,
		nm_filme		nome,
        vl_avaliacao	avaliacao,
        dt_lancamento	lancamento,
        bt_disponivel 	disponivel
 FROM 	tb_filme
WHERE	nm_filme	LIKE '%p%';


 -- caso de uso 7: consultar filme por id

SELECT	id_filme		id,
		nm_filme		nome,
        ds_sinopse		sinopse,
        vl_avaliacao	avaliacao,
        dt_lancamento	lancamento,
        bt_disponivel 	disponivel,
        img_filme		imagem
 FROM 	tb_filme
WHERE	id_filme	= 2;