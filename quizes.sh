curl --location 'localhost:3000/quizes' \
--header 'Content-Type: application/json' \
--data '[{
    "question": "Qual comando SQL é usado para selecionar dados de uma tabela?",
    "option_1": "SELECT",
    "option_2": "UPDATE",
    "option_3": "DELETE",
    "option_4": "INSERT",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Como você seleciona todas as colunas de uma tabela chamada \"clientes\"?",
    "option_1": "SELECT ALL FROM clientes;",
    "option_2": "SELECT * FROM clientes;",
    "option_3": "SELECT clientes;",
    "option_4": "SELECT FROM clientes;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para atualizar dados existentes em uma tabela?",
    "option_1": "INSERT",
    "option_2": "ALTER",
    "option_3": "UPDATE",
    "option_4": "SELECT",
    "correct_number": 3,
    "user_id": "ale_sql"
  }, {
    "question": "Como você insere um novo registro na tabela \"usuarios\" com os valores \"John\" e \"Doe\" nas colunas \"nome\" e \"sobrenome\"?",
    "option_1": "INSERT INTO usuarios (nome, sobrenome) VALUES (\"John\", \"Doe\");",
    "option_2": "INSERT usuarios (nome, sobrenome) VALUES (\"John\", \"Doe\");",
    "option_3": "ADD INTO usuarios VALUES (\"John\", \"Doe\");",
    "option_4": "INSERT INTO usuarios VALUES (\"John\", \"Doe\");",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para deletar dados de uma tabela?",
    "option_1": "REMOVE",
    "option_2": "DELETE",
    "option_3": "DROP",
    "option_4": "TRUNCATE",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Como você renomeia uma tabela chamada \"clientes\" para \"consumidores\"?",
    "option_1": "RENAME clientes TO consumidores;",
    "option_2": "ALTER TABLE clientes RENAME TO consumidores;",
    "option_3": "CHANGE clientes TO consumidores;",
    "option_4": "RENAME TABLE clientes TO consumidores;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para criar uma nova tabela?",
    "option_1": "CREATE TABLE",
    "option_2": "NEW TABLE",
    "option_3": "MAKE TABLE",
    "option_4": "ADD TABLE",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Como você adiciona uma nova coluna \"email\" à tabela \"clientes\"?",
    "option_1": "ADD COLUMN email TO clientes;",
    "option_2": "ALTER TABLE clientes ADD COLUMN email;",
    "option_3": "INSERT COLUMN email INTO clientes;",
    "option_4": "MODIFY TABLE clientes ADD email;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Como você remove uma coluna \"idade\" de uma tabela \"usuarios\"?",
    "option_1": "REMOVE COLUMN idade FROM usuarios;",
    "option_2": "ALTER TABLE usuarios DROP COLUMN idade;",
    "option_3": "DELETE COLUMN idade FROM usuarios;",
    "option_4": "MODIFY TABLE usuarios DROP idade;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Como você seleciona registros únicos da coluna \"cidade\" em uma tabela \"enderecos\"?",
    "option_1": "SELECT ALL cidade FROM enderecos;",
    "option_2": "SELECT DISTINCT cidade FROM enderecos;",
    "option_3": "SELECT UNIQUE cidade FROM enderecos;",
    "option_4": "SELECT DISTINCT * FROM enderecos;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para criar um índice em uma tabela?",
    "option_1": "CREATE INDEX",
    "option_2": "NEW INDEX",
    "option_3": "MAKE INDEX",
    "option_4": "ADD INDEX",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Como você retorna a contagem total de registros em uma tabela \"pedidos\"?",
    "option_1": "SELECT COUNT() FROM pedidos;",
    "option_2": "SELECT COUNT(*) FROM pedidos;",
    "option_3": "SELECT COUNT(ALL) FROM pedidos;",
    "option_4": "SELECT TOTAL() FROM pedidos;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para combinar registros de duas tabelas?",
    "option_1": "COMBINE",
    "option_2": "JOIN",
    "option_3": "MERGE",
    "option_4": "UNITE",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Como você seleciona registros de \"clientes\" com a cidade \"São Paulo\"?",
    "option_1": "SELECT * FROM clientes WHERE cidade = \"São Paulo\";",
    "option_2": "SELECT * FROM clientes WHERE cidade IS \"São Paulo\";",
    "option_3": "SELECT * FROM clientes WITH cidade = \"São Paulo\";",
    "option_4": "SELECT * FROM clientes HAVING cidade = \"São Paulo\";",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para remover todas as linhas de uma tabela sem excluir a tabela?",
    "option_1": "DELETE",
    "option_2": "DROP",
    "option_3": "TRUNCATE",
    "option_4": "CLEAR",
    "correct_number": 3,
    "user_id": "ale_sql"
  }, {
    "question": "Como você seleciona as 5 primeiras linhas de uma tabela \"produtos\"?",
    "option_1": "SELECT FIRST 5 FROM produtos;",
    "option_2": "SELECT TOP 5 * FROM produtos;",
    "option_3": "SELECT * FROM produtos LIMIT 5;",
    "option_4": "SELECT * FROM produtos WHERE ROWNUM <= 5;",
    "correct_number": 3,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para combinar registros de duas tabelas sem duplicação de registros repetidos?",
    "option_1": "INNER JOIN",
    "option_2": "LEFT JOIN",
    "option_3": "UNION",
    "correct_number": 3,
    "user_id": "ale_sql"
  }, {
    "question": "Como você exclui um banco de dados chamado \"empresa\"?",
    "option_1": "DROP DATABASE empresa;",
    "option_2": "DELETE DATABASE empresa;",
    "option_3": "REMOVE DATABASE empresa;",
    "option_4": "TRUNCATE DATABASE empresa;",
    "correct_number": 1,
    "user_id": "ale_sql"
  }, {
    "question": "Qual comando SQL é usado para modificar a estrutura de uma tabela existente?",
    "option_1": "MODIFY TABLE",
    "option_2": "ALTER TABLE",
    "option_3": "CHANGE TABLE",
    "option_4": "UPDATE TABLE",
    "correct_number": 2,
    "user_id": "ale_sql"
  }, {
    "question": "Como você seleciona todas as colunas de uma tabela \"clientes\", mas sem registros duplicados?",
    "option_1": "SELECT * FROM clientes;",
    "option_2": "SELECT DISTINCT * FROM clientes;",
    "option_3": "SELECT UNIQUE * FROM clientes;",
    "option_4": "SELECT ALL DISTINCT * FROM clientes;",
    "correct_number": 2,
    "user_id": "ale_sql"
  }]'
