CREATE DATABASE IF NOT EXISTS quiz_db;

USE quiz_db;

CREATE TABLE IF NOT EXISTS quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    option_1 TEXT NOT NULL,
    option_2 TEXT NOT NULL,
    option_3 TEXT NOT NULL,
    option_4 TEXT NOT NULL,
    correct_number INT NOT NULL
);


INSERT INTO quiz (question, option_1, option_2, option_3, option_4, correct_number) VALUES
('Qual é a capital da França?', 'Berlim', 'Madri', 'Paris', 'Roma', 3),
('Qual planeta é conhecido como o Planeta Vermelho?', 'Terra', 'Marte', 'Júpiter', 'Vênus', 2),
('Qual é o maior mamífero?', 'Elefante', 'Baleia', 'Tubarão', 'Dinossauro', 2),
('Qual é o menor número primo?', '1', '2', '3', '5', 2),
('Em que ano terminou a Segunda Guerra Mundial?', '1941', '1942', '1944', '1945', 4),
('Qual é o ponto de ebulição da água?', '90°C', '100°C', '110°C', '120°C', 2),
('Qual é o símbolo químico do ouro?', 'Au', 'Ag', 'Fe', 'Pb', 1),
('Quem escreveu "Hamlet"?', 'Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen', 2),
('Qual é a velocidade da luz?', '299.792 km/s', '300.000 km/s', '150.000 km/s', '1.000.000 km/s', 1),
('Qual elemento tem o número atômico 1?', 'Hélio', 'Oxigênio', 'Hidrogênio', 'Carbono', 3),
('Qual é o maior oceano?', 'Atlântico', 'Índico', 'Ártico', 'Pacífico', 4),
('Qual é o principal ingrediente do guacamole?', 'Tomate', 'Batata', 'Abacate', 'Cebola', 3),
('Quem pintou a Mona Lisa?', 'Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet', 3),
('Qual é a capital do Japão?', 'Pequim', 'Tóquio', 'Seul', 'Bangkok', 2),
('Qual órgão bombeia sangue pelo corpo?', 'Fígado', 'Cérebro', 'Coração', 'Pulmão', 3),
('Qual é a língua mais falada no mundo?', 'Espanhol', 'Inglês', 'Mandarim', 'Hindi', 3),
('Qual país é conhecido como a Terra do Sol Nascente?', 'China', 'Coreia do Sul', 'Índia', 'Japão', 4),
('Quem desenvolveu a teoria da relatividade?', 'Isaac Newton', 'Galileu Galilei', 'Albert Einstein', 'Nikola Tesla', 3),
('Qual é a substância natural mais dura?', 'Ouro', 'Ferro', 'Diamante', 'Platina', 3),
('Qual é o menor país do mundo?', 'Mônaco', 'Vaticano', 'San Marino', 'Liechtenstein', 2),
('Qual é o rio mais longo do mundo?', 'Amazonas', 'Nilo', 'Yangtzé', 'Mississippi', 2),
('Quem foi o primeiro homem a pisar na lua?', 'Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong', 'Michael Collins', 3),
('Qual é o maior deserto do mundo?', 'Saara', 'Gobi', 'Ártico', 'Antártico', 1),
('Qual é a capital do Canadá?', 'Toronto', 'Vancouver', 'Montreal', 'Ottawa', 4),
('Quem descobriu a penicilina?', 'Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Joseph Lister', 2),
('Qual é o menor planeta do nosso sistema solar?', 'Marte', 'Terra', 'Mercúrio', 'Vênus', 3),
('Qual é o maior continente?', 'África', 'Ásia', 'Europa', 'Austrália', 2),
('Qual é o maior osso do corpo humano?', 'Crânio', 'Fêmur', 'Costela', 'Úmero', 2),
('Qual é o menor oceano?', 'Atlântico', 'Índico', 'Ártico', 'Pacífico', 3),
('Qual é a capital da Austrália?', 'Sydney', 'Melbourne', 'Perth', 'Canberra', 4),
('Qual gás é mais abundante na atmosfera da Terra?', 'Oxigênio', 'Dióxido de Carbono', 'Nitrogênio', 'Hidrogênio', 3),
('Qual é o animal terrestre mais rápido?', 'Leão', 'Guepardo', 'Leopardo', 'Tigre', 2),
('Quem inventou o telefone?', 'Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi', 1),
('Qual planeta está mais próximo do Sol?', 'Terra', 'Vênus', 'Mercúrio', 'Marte', 3),
('Qual é a montanha mais alta do mundo?', 'K2', 'Kangchenjunga', 'Lhotse', 'Monte Everest', 4),
('Quem é conhecido como o Pai dos Computadores?', 'Charles Babbage', 'Alan Turing', 'John von Neumann', 'Bill Gates', 1),
('Qual país é o maior em área territorial?', 'Estados Unidos', 'China', 'Canadá', 'Rússia', 4),
('Qual é o principal ingrediente do chocolate?', 'Leite', 'Cacau', 'Açúcar', 'Manteiga', 2),
('Qual é o ponto de congelamento da água?', '0°C', '32°F', '100°C', '212°F', 1);
