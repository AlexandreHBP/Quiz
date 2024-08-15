const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;

// Middleware para parsing de JSON
app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'ale',
    password: 'Senha@1234',
    database: 'quiz_db'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

// Rota para adicionar uma nova pergunta
app.post('/quiz', (req, res) => {
    const { question, option_1, option_2, option_3, option_4, correct_number } = req.body;

    if (!question || !option_1 || !option_2 || !option_3 || !option_4 || !correct_number) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    const sql = 'INSERT INTO quiz (question, option_1, option_2, option_3, option_4, correct_number) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [question, option_1,option_2, option_3, option_4, correct_number], (err, result) => {
        if (err) {
            console.error('Erro ao inserir pergunta:', err);
            return res.status(500).json({ error: 'Erro ao inserir pergunta' });
        }

        res.status(201).json({ message: 'Pergunta adicionada com sucesso!', id: result.insertId });
    });
});

// Rota para listar todas as perguntas
app.get('/quiz', (req, res) => {
    const sql = 'SELECT * FROM quiz';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar perguntas:', err);
            return res.status(500).json({ error: 'Erro ao buscar perguntas' });
        }

        res.status(200).json(results);
    });
});

// Rota para atualizar uma pergunta por ID
app.put('/quiz/:id', (req, res) => {
    const { id } = req.params;
    const { question, option_1, option_2, option_3, option_4, correct_number } = req.body;

    if (!question || !option_1 || !option_2 || !option_3 || !option_4 || !correct_number) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    const sql = 'UPDATE quiz SET question = ?, option_1 = ?, option_2 = ?, option_3 = ?, option_4 = ?, correct_number = ? WHERE id = ?';
    db.query(sql, [question, option_1, option_2, option_3, option_4, correct_number, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar pergunta:', err);
            return res.status(500).json({ error: 'Erro ao atualizar pergunta' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pergunta não encontrada' });
        }

        res.status(200).json({ message: 'Pergunta atualizada com sucesso!' });
    });
});

// Rota para deletar uma pergunta por ID
app.delete('/quiz/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM quiz WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar pergunta:', err);
            return res.status(500).json({ error: 'Erro ao deletar pergunta' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pergunta não encontrada' });
        }

        res.status(200).json({ message: 'Pergunta deletada com sucesso!' });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
