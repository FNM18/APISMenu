DROP TABLE IF EXISTS Opiniones;

CREATE TABLE Opiniones(
	ID int NOT NULL AUTO_INCREMENT,
    Hamburguesa varchar(25),
    Calificación int,
    Comentario varchar(255),
    Fecha DATE,
    PRIMARY KEY (ID)
);

INSERT INTO opiniones (Hamburguesa, Calificación, Comentario, Fecha) VALUES
('bbq', 4, 'amo el bbq', '2021/01/25'),
('bbq', 3, 'Jamás había probado una hamburguesa con aros de cebolla empanizados, pero funciona bastante bien ', '2021/01/02'),
('bbq', 3, 'Me gustan los ingredientes de esta hamburguesa pero en vez de carne me gustaría que fuera de pollo empanizado', '2021/01/13'),
('bbq', 5, 'la salsa bbq esta wooooow', '2021/01/13'),

('chicken', 4, 'No suelo comer hamburguesas de pollo pero esta es la excepción, es deliciosa y la carne esta bien cocinada, el pollo no parece plastico', '2021/01/13'),
('chicken', 4, 'Muy buena, el pollo y el tocino super crujientes, el aderezo también increíble ', '2021/01/5'),

('chili', 4, 'barata y economica buen diferenciador', '2021/02/6'),
('chili', 5, 'No sé que tiene el chilli, pero mezclado con los quesos 10/10', '2021/05/2'),
('chili', 5, 'Yummy', '2021/02/25'),

('chili-fries', 4, 'Delicioso! A buen precio ', '2021/02/10'),
('chili-fries', 5, 'Esta perfecta si quieres algo más ligero, además las papás estan muy ricas!', '2021/02/10'),
('chili-fries', 5, 'Deliciosas', '2021/04/1'),
('chili-fries', 5, 'Muy buenas. Preferible no pedirlas con la hamburguesa de chili a menos que seas un fan extremo del chili', '2021/04/4'),

('deluxe', 5, '¡La mejor hamburguesa que he comido!', '2021/04/7'),
('deluxe', 1, 'Sabe demasiado a Chile. Pica mucho y no me dejó disfrutar del resto de ingredientes. ', '2021/04/2'),
('deluxe', 4, 'Un clasico, dificil ir mal con esta hamburguesa', '2021/03/2'),

('regia', 4, 'Le pone una buena cantidad de aguacate', '2021/03/25'),
('regia', 4, 'Suculenta', '2021/03/31'),
('regia', 5, 'Buen tamaño, me gusto ', '2021/03/31'),
('regia', 5, 'Un sabor justo para su precio', '2021/03/30'),
('regia', 5, 'Esta deliciosa!! Y el guacamole lo hacen en el momento', '2021/04/30'),
('regia', 5, 'Buenísima!!! La carne está muy sabrosa, las papas crujientes, sin duda mi favorita', '2021/04/30'),
('regia', 3, 'Una hamburguesa simple pero rica', '2021/01/30'),
('regia', 2, '¿Lleva tortilla?', '2021/01/3'),

('street', 5, 'La mejor de todas', '2021/01/31'),
('street', 2, 'No le pongan pepinillo', '2021/01/17'),
('street', 1, 'la street está dos trensas', '2021/01/14'),

('teriyaki', 5, 'Mi favorita del menú!!!! Deben probarla', '2021/01/14'),
('teriyaki', 4, 'Dudaba de la salsa teriyaki, pero despues de probarla me convencio su sabor', '2021/01/13')
;