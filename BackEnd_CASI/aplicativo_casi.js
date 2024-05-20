// IMPORTAÇÕES DE MÓDULOS

const express = require('express');
const { engine } = require('express-handlebars');
const fileupload = require('express-fileupload');
const mysql = require('mysql2');
const filesystem = require('fs');

// CRIAÇÃO DE OBJETOS

const aplicativo = express();

// HABILITAÇÃO DO UPLOAD DE ARQUIVOS

aplicativo.use(fileupload());

// ADIÇÃO DO BOOTSTRAP

aplicativo.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// ADIÇÃO DO CSS

aplicativo.use('/css', express.static('./css'));

// REFERÊNCIA DA PASTA DE IMAGENS

aplicativo.use('/imagens', express.static('./imagens'));

// CONFIGURAÇÃO DO EXPRESS-HANDLEBARS

aplicativo.engine('handlebars', engine({
    helpers: {
        // Função auxiliar para verificar igualdade
        condicionalIgualdade: function (parametro1, parametro2, options) {
            return parametro1 === parametro2 ? options.fn(this) : options.inverse(this);
        }
    }
}));
aplicativo.set('view engine', 'handlebars');
aplicativo.set('views', './views');

// MANIPULAÇÃO DE DADOS VIA ROTAS

aplicativo.use(express.json());
aplicativo.use(express.urlencoded({extended:false}));

// CONFIGURAÇÃO DE CONEXÃO DO BANCO DE DADOS

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'banco_casi'
});

// TESTE DE CONEXÃO DO BANCO DE DADOS

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Sucesso na conexão com o banco de dados!');
});

// CRIAÇÃO DE ROTAS PARA O SISTEMA DO CASI (CENTRO ACADÊMICO DE SISTEMAS DE INFORMAÇÃO)

aplicativo.get('/usuarios_comuns', function(requisicao, resposta){
    // Criação do comando SQL
    let sql = `SELECT * FROM usuarios_comuns`;

    // Execução de comando SQL
    conexao.query(sql, function(retorno_falha, retorno_sucesso){
        resposta.render('banco_dados', {usuarios_comuns:retorno_sucesso});
    });   
});

aplicativo.get('/usuarios_administradores', function(requisicao, resposta){
    // Criação do comando SQL
    let sql = `SELECT * FROM usuarios_administradores`;

    // Execução de comando SQL
    conexao.query(sql, function(retorno_falha, retorno_sucesso){
        resposta.render('banco_dados', {usuarios_administradores:retorno_sucesso});
    });   
});

aplicativo.get('/usuarios_super_administradores', function(requisicao, resposta){
    // Criação do comando SQL
    let sql = `SELECT * FROM usuarios_super_administradores`;

    // Execução de comando SQL
    conexao.query(sql, function(retorno_falha, retorno_sucesso){
        resposta.render('banco_dados', {usuarios_super_administradores:retorno_sucesso});
    });   
});

aplicativo.get('/postagens', function(requisicao, resposta){
    // Criação do comando SQL
    let sql = `SELECT * FROM postagens`;

    // Execução de comando SQL
    conexao.query(sql, function(retorno_falha, retorno_sucesso){
        resposta.render('banco_dados', {postagens:retorno_sucesso});
    });   
});

aplicativo.get('/comentarios', function(requisicao, resposta){
    // Criação do comando SQL
    let sql = `SELECT * FROM comentarios`;

    // Execução de comando SQL
    conexao.query(sql, function(retorno_falha, retorno_sucesso){
        resposta.render('banco_dados', {comentarios:retorno_sucesso});
    });   
});

aplicativo.post('/cadastrar_usuario_comum', function(requisicao, resposta){
    
    try{
        // Obtenção dos dados para cadastro
        let nome = requisicao.body.nome;
        let cpf = requisicao.body.cpf;
        let email = requisicao.body.cpf;
        let nome_usuario = requisicao.body.nome_usuario;
        let senha = requisicao.body.senha;

        // Validação dos dados
        if(nome == '' || cpf == '' || isNaN(cpf) || email == '' || nome_usuario == '' || senha == ''){
            resposta.redirect('/falha_cadastro_usuario_comum');
        }else{
            // Criação do comando SQL
            let sql = `INSERT INTO usuarios_comuns (nome, cpf, email, nome_usuario, senha) VALUES ('${nome}', '${cpf}', '${email}', '${nome_usuario}', '${senha}')`;

            // Execução do comando SQL
            conexao.query(sql, function(retorno_falha, retorno_sucesso){
                if(retorno_falha) throw retorno_falha;

                console.log(retorno_sucesso);
            })

            // Retorno para a rota principal
            resposta.redirect('/sucesso_cadastro_usuario_comum');
        }
    }catch(erro){
        resposta.redirect('/falha_cadastro_usuario_comum');
    }
});

aplicativo.post('/cadastrar_usuario_administrador', function(requisicao, resposta){
    
    try{
        // Obtenção dos dados para cadastro
        let nome = requisicao.body.nome;
        let cpf = requisicao.body.cpf;
        let email = requisicao.body.cpf;
        let nome_usuario = requisicao.body.nome_usuario;
        let senha = requisicao.body.senha;

        // Validação dos dados
        if(nome == '' || cpf == '' || isNaN(cpf) || email == '' || nome_usuario == '' || senha == ''){
            resposta.redirect('/falha_cadastro_usuario_administrador');
        }else{
            // Criação do comando SQL
            let sql = `INSERT INTO usuarios_administradores (nome, cpf, email, nome_usuario, senha) VALUES ('${nome}', '${cpf}', '${email}', '${nome_usuario}', '${senha}')`;

            // Execução do comando SQL
            conexao.query(sql, function(retorno_falha, retorno_sucesso){
                if(retorno_falha) throw retorno_falha;

                console.log(retorno_sucesso);
            })

            // Retorno para a rota principal
            resposta.redirect('/sucesso_cadastro_usuario_administrador');
        }
    }catch(erro){
        resposta.redirect('/falha_cadastro_usuario_administrador');
    }
});

aplicativo.post('/cadastrar_usuario_super_administrador', function(requisicao, resposta){
    
    try{
        // Obtenção dos dados para cadastro
        let nome = requisicao.body.nome;
        let cpf = requisicao.body.cpf;
        let email = requisicao.body.cpf;
        let nome_usuario = requisicao.body.nome_usuario;
        let senha = requisicao.body.senha;

        // Validação dos dados
        if(nome == '' || cpf == '' || isNaN(cpf) || email == '' || nome_usuario == '' || senha == ''){
            resposta.redirect('/falha_cadastro_usuario_super_administrador');
        }else{
            // Criação do comando SQL
            let sql = `INSERT INTO usuarios_super_administradores (nome, cpf, email, nome_usuario, senha) VALUES ('${nome}', '${cpf}', '${email}', '${nome_usuario}', '${senha}')`;

            // Execução do comando SQL
            conexao.query(sql, function(retorno_falha, retorno_sucesso){
                if(retorno_falha) throw retorno_falha;

                console.log(retorno_sucesso);
            })

            // Retorno para a rota principal
            resposta.redirect('/sucesso_cadastro_usuario_super_administrador');
        }
    }catch(erro){
        resposta.redirect('/falha_cadastro_usuario_super_administrador');
    }
});

aplicativo.post('/cadastrar_postagem', function(requisicao, resposta){
    
    try{
        // Obtenção dos dados
        let identificador = requisicao.body.identificador;
        let conteudo = requisicao.body.conteudo;
        let comentario =  requisicao.body.comentario;

        // Validação dos dados
        if(conteudo == '' || comentario == ''){
            resposta.redirect('/falha_cadastro_postagem');
        }else{
            // Criação do comando SQL
            let sql = `INSERT INTO postagens (conteudo, comentario) VALUES ('${conteudo}', '${comentario}')`;

            // Execução do comando SQL
            conexao.query(sql, function(retorno_falha, retorno_sucesso){
                if(retorno_falha) throw retorno_falha;

                console.log(retorno_sucesso);
            });

            // Retorno para a rota principal
            resposta.redirect('/sucesso_cadastro_postagem');
        }
    }catch(erro){
        resposta.redirect('/falha_cadastro_postagem');
    };

});

aplicativo.post('/cadastrar_comentario', function(requisicao, resposta){

    try{
        // Obtenção dos dados
        let identificador = requisicao.body.identificador;
        let texto = requisicao.body.texto;
        let autor = requisicao.body.autor;
        let destinatario = requisicao.body.destinatario;
        
        // Validação dos dados
        if(texto == '' || autor == '' || destinatario == ''){
            resposta.redirect('/falha_cadastro_comentario');
        }else{
            // Criação do comando SQL
            let sql = `INSERT INTO comentarios (texto, autor, destinatario) VALUES ('${texto}', '${autor}', '${destinatario}')`;

            // Execução do comando SQL
            conexao.query(sql, function(retorno_falha, retorno_sucesso){
                if(retorno_falha) throw retorno_falha;

                console.log(retorno_sucesso);
            });

            // Retorno para a rota principal
            resposta.redirect('/sucesso_cadastro_comentario');
        };
    }catch(erro){
        resposta.redirect('/falha_cadastro_comentario');
    };
});

/*
CRIAR ROTAS PARA ALTERAÇÃO

[...]
*/

aplicativo.get('/remover_administrador/:identificador', function(requisicao, resposta){
    try{
        // Criação do comando SQL
        let sql = `DELETE FROM usuarios_administradores WHERE identificador = ${requisicao.params.identificador}`;

        // Execução do comando SQL
        conexao.query(sql, function(retorno_falha, retorno_sucesso){
            if(retorno_falha) throw retorno_falha;

            console.log('Sucesso na remoção do usuário administrador!');
        });

        // Retorno para a rota principal
        resposta.redirect('/sucesso_remocao_usuario_administrador');
    }catch{
        resposta.redirect('/falha_remocao_usuario_administrador');
    };
});

aplicativo.get('/remover_super_administrador/:identificador', function(requisicao, resposta){
    try{
        // Criação do comando SQL
        let sql = `DELETE FROM usuarios_super_administradores WHERE identificador = ${requisicao.params.identificador}`;

        // Execução do comando SQL
        conexao.query(sql, function(retorno_falha, retorno_sucesso){
            if(retorno_falha) throw retorno_falha;

            console.log('Sucesso na remoção do usuário super administrador!');
        });

        // Retorno para a rota principal
        resposta.redirect('/sucesso_remocao_usuario_super_administrador');
    }catch{
        resposta.redirect('/falha_remocao_usuario_super_administrador');
    };
});

aplicativo.get('/remover_postagem/:identificador', function(requisicao, resposta){
    try{
        // Criação do comando SQL
        let sql = `DELETE FROM postagens WHERE identificador = ${requisicao.params.identificador}`;

        // Execução do comando SQL
        conexao.query(sql, function(retorno_falha, retorno_sucesso){
            if(retorno_falha) throw retorno_falha;

            console.log('Sucesso na remoção da postagem!');
        });

        // Retorno para a rota principal
        resposta.redirect('/sucesso_remocao_postagem');
    }catch{
        resposta.redirect('/falha_remocao_postagem');
    };
});

aplicativo.get('/remover_comentario/:identificador', function(requisicao, resposta){
    try{
        // Criação do comando SQL
        let sql = `DELETE FROM comentarios WHERE identificador = ${requisicao.params.identificador}`;

        // Execução do comando SQL
        conexao.query(sql, function(retorno_falha, retorno_sucesso){
            if(retorno_falha) throw retorno_falha;

            console.log('Sucesso na remoção do comentário!');
        });

        // Retorno para a rota principal
        resposta.redirect('/sucesso_remocao_comentario');
    }catch{
        resposta.redirect('/falha_remocao_comentario');
    };
});

// CRIAÇÃO DE SERVIDOR
aplicativo.listen(8080);