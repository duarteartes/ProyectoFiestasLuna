
/* Tabla: Años */
CREATE TABLE IF NOT EXISTS anios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    anio INT NOT NULL UNIQUE
);

/* Tabla: Fiestas (Mayo o Monlora) EJEMPLO: 'mayo' o 'monlora' */
CREATE TABLE IF NOT EXISTS fiestas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    anio_id INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    texto_comision TEXT,
    FOREIGN KEY (anio_id) REFERENCES anios(id)
);

/* Tabla: Eventos (generales o religiosos) EJEMPLO: 'general', 'religioso' */
CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(50),
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);

/* Tabla: Noticias */
CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    fecha DATETIME NOT NULL,
    mensaje TEXT NOT NULL,
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);

/* Tabla: Saludos EJEMPLO: 'general', 'religioso' */
CREATE TABLE IF NOT EXISTS saludos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    autor VARCHAR(100),
    cargo VARCHAR(100),
    mensaje TEXT,
    categoria VARCHAR(50),
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);

/* Tabla: Pregoneros */
CREATE TABLE IF NOT EXISTS pregoneros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    texto TEXT,
    imagen_url VARCHAR(255),
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);

/* Tabla: Damas */
CREATE TABLE IF NOT EXISTS damas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    nombre VARCHAR(100),
    imagen_url VARCHAR(255),
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);

/* Tabla: Colaboradores */
CREATE TABLE IF NOT EXISTS colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fiesta_id INT NOT NULL,
    nombre VARCHAR(100),
    logo_url VARCHAR(255),
    web_url VARCHAR(255),
    FOREIGN KEY (fiesta_id) REFERENCES fiestas(id)
);