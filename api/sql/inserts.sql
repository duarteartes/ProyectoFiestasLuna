USE fiestas_luna;

-- Insertar años 2024 y 2025
INSERT INTO anios (anio) VALUES
    (2024),
    (2025)
;

-- Insertar fiestas de mayo y monlora para 2024 (anio_id = 1)
INSERT INTO fiestas (anio_id, tipo, texto_comision) VALUES
    (1, 'mayo',
        'En el encierro de Reses Bravas se prohíbe la participación de menores de 16 años según
        Decreto 71/2023 del Gobierno de Aragón. En el encierro de Minibueyes los menores de 16 años
        deberán ir acompañados de un adulto'
    ),
    (1, 'monlora',
        'La comisión informa a todos los vecinos y vecinas que desde el pasado 17 de Octubre de 2001 está
        vigente el Decreto 226/2001, de 18 de Septiembre del Gobierno de Aragón por el que se aprueba el
        Reglamento de Festejos Taurinos Populares, que en su artículo 4. Participantes y espectadores, dice,
        entre otras cosas, lo siguiente:
        *Tienen la condición de participantes, todas aquellas personas que toman parte en un festejo taurino
        popular sin cometidos específicos propios de la organización y la de espectadores las que están
        presenciando el mismo.
        *Los participantes y espectadores deberán observar las condiciones y reglas establecidas por la
        autoridad competente para la celebración de los festejos destinados a prevenir accidentes, evitar el
        maltrato de las reses y facilitar el correcto desarrollo del espectáculo.
        *La autoridad local competente, evitará mediante el recurso a las Fuerzas y Cuerpos de Seguridad si fuere
        preciso, que en los festejos tomen parte activa personas que por sus condiciones físicas o psíquicas,
        puedan exponerse a un peligro excesivo o porten cualquier instrumento con el que puedan causar malos tratos
        a las reses u ocasionar situaciones de riesgo para los espectadores.
        LA COMISIÓN SE RESERVA EL DERECHO DE MODIFICAR, ALTERAR O SUPRIMIR ALGUNO DE LOS ACTOS QUE FIGURAN EN
        ESTE PROGRAMA, SI FUERE NECESARIO POR CUALQUIER CIRCUNSTANCIA.
        LOS MENORES DE 16 AÑOS TIENEN PROHIBIDA LA PARTICIPACIÓN EN LOS ACTOS CON RESES'
    )
;

-- Insertar fiestas de mayo y monlora para 2025 (anio_id = 2)
INSERT INTO fiestas (anio_id, tipo, texto_comision) VALUES
    (2, 'mayo',
        'Se recuerda que según el reglamento de festejos taurinos: Los menores de 16 años no podrán
        participar en los encierros y en la suelta de vaquillas en la plaza. Sí podrán hacerlo en el acto
        programado exclusivamente para ellos "Encierro de Minibueyes"'
    ),
    (2, 'monlora', 'Texto de la comisión de fiestas de septiembre 2025...')
;

-- Insertar eventos (MAYO 2024)
INSERT INTO eventos (fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria) VALUES
    (1, '2024-04-27', '11:00:00', '13:00:00', 'Encierro de Reses Bravas', 'Por el recorrido de costumbre', 'general'),
    (1, '2024-04-27', '18:00:00', '20:00:00', 'Encierro de Reses Bravas', 'Por el recorrido de costumbre', 'general'),
    (1, '2024-04-27', '20:00:00', NULL, 'Ronda de bares con la Charanga Patchanga', NULL, 'general'),
    (1, '2024-04-28', '11:00:00', '12:30:00', 'Encierro de Minibueyes', 'Plaza Mayor y por el recorrido de costumbre', 'general'),
    (1, '2024-04-28', '16:00:00', '19:00:00', 'Hinchables infantiles', 'En la Plaza Mayor', 'general'),
    (1, '2024-04-30', '23:30:00', '03:30:00', 'Disco-Móvil "El Regano"', 'En la Casa de Cultura', 'general'),
    (1, '2024-05-01', '08:00:00', '23:00:00', 'Romería al Santuario de Monlora', 'Celebraremos y comeremos todos juntos', 'religioso')
;

-- Insertar eventos (MONLORA 2024)
INSERT INTO eventos (fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria) VALUES
-- 31 Agosto 2024
    (2,
        '2024-08-31',
        '15:30:00',
        NULL,
        'Campeonato de Giñote "Jesús Aznar"',
        'Los interesados en participar podrán apuntarse en el bar de la Casa de Cultura. Sólo podrán participar mayores de 16 años',
        'general'
    ),
    (2,
        '2024-08-31',
        '21:00:00',
        NULL,
        'Imposición del Pañuelo de Fiestas',
        'A los niños nacidos en 2023',
        'general'
    ),
    (2,
        '2024-08-31',
        '22:00:00',
        NULL,
        'Presentación de las Damas de Honor 2024',
        'En la Plaza Mayor. A continuación la banda municipal nos amenizará con su música',
        'general'
    ),
    (2,
        '2024-08-31',
        '00:30:00:00',
        '06:00:00',
        'Sesión de DJ Luis',
        'En la Casa de Cultura. Organizado por la SOCRYD',
        'general'
    ),
-- 1 Septiembre 2024
    (2,
        '2024-09-01',
        '09:00:00',
        NULL,
        'Almuerzo Popular',
        'Organizado por la Sociedad de Cazadores "Virgen de Monlora" en la caseta del tiro',
        'general'
    ),
    (2,
        '2024-09-01',
        '10:00:00',
        NULL,
        'Recorrido de Caza Local',
        'En el campo de tiro',
        'general'
    ),
    (2,
        '2024-09-01',
        '12:00:00',
        NULL,
        'El Show de Pepín Banzo',
        'Por las calles de nuestra localidad, una mezcla de música, magia y humor. 12:00h Barrio de La Corona. 13:00h Barrio La Nava. 16:30h Casas Baratas. 17:15h Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-01',
        '18:15:00',
        NULL,
        'Fiesta de la Espuma',
        'En la Plaza Mayor patrocinada por CAMPUSPORT 5 VILLAS. Llevar bañador gafas de buceo y calzado que no resbale, tipo chancleta para la seguridad de todos los participantes',
        'general'
    ),
    (2,
        '2024-09-01',
        '19:00:00',
        NULL,
        'Chocolatada',
        'realizada por la Asociación de Mujeres "Virgen del Alba" en la Plaza Mayor',
        'general'
    ),
-- 7 Septiembre 2024
    (2,
        '2024-09-07',
        '11:30:00',
        NULL,
        'Concentración de Peñas',
        'En la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-07',
        '11:45:00',
        NULL,
        'Pregón de Fiestas 2024',
        'En la Plaza Mayor, a cargo de la Cooperativa Textil San José Artesano que celebra su 50 Aniversario. Chupinazo oficial a cargo de la peña El Follón que celebra su 25 aniversario. Seguidamente pasacalles encabezado por las Damas 2024, los Cabezudos y la Charanga Patxanga por las calles de la localidad',
        'general'
    ),
    (2,
        '2024-09-07',
        '14:00:00',
        '15:30:00',
        'Ronda de Bares',
        'Con los Gavilanes del Arba',
        'general'
    ),
    (2,
        '2024-09-07',
        '15:30:00',
        '17:00:00',
        'Actuación Disco Agua',
        'En la Avenida Goya',
        'general'
    ),
    (2,
        '2024-09-07',
        '18:30:00',
        NULL,
        'Salida de la Virgen de Monlora',
        'Comenzará uno de los actos más emotivos de nuestras fiestas con la salida de la Virgen de Monlora de su Santuario hacia Luna',
        'general'
    ),
    (2,
        '2024-09-07',
        '20:30:00',
        NULL,
        'Recibimiento de nuestra patrona',
        'En la Casa de la Música. A continuación la acompañaremos en procesión por el recorrido de costumbre hasta la Plaza Mayor donde se realizará la Ofrenda de Flores',
        'general'
    ),
    (2,
        '2024-09-07',
        '22:30:00',
        NULL,
        'Actuación de Mario Funes',
        'En la Avenida Goya',
        'general'
    ),
    (2,
        '2024-09-07',
        '00:00:00',
        '06:30:00',
        'Macrosesión DJ',
        'En el Pabellón con DJ Catalín (música 80/90), grupo ZIRO y DJ Sote',
        'general'
    ),
-- 8 Septiembre 2024
    (2,
        '2024-09-08',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de Cabezudos y amenizado por la Banda Municipal. Salida de la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-08',
        '11:30:00',
        NULL,
        'Solemne Misa Mayor',
        'En la Parroquia con la participación de la Coral Municipal que nos deleitará con su repertorio. Al finalizar Vino Español en la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-08',
        '17:00:00',
        NULL,
        'Café-Concierto con Villa y Sus Dorados',
        'En el pabellón "Jesús Colón" organizado por la SOCRYD',
        'general'
    ),
    (2,
        '2024-09-08',
        '20:00:00',
        NULL,
        'Acto Mariano',
        'En honor a nuestra Virgen de Monlora y a continuación Procesión por el recorrido de costumbre',
        'general'
    ),
    (2,
        '2024-09-08',
        '22:30:00',
        NULL,
        'Inicio de la Ronda Jotera',
        'A cargo de la Agrupación Local de Jota. El recorrido comenzará en la Casa de la Música, pasando por C/Miguel Servet, Plaza España, Barrio La Nava, C/Mayor y terminar en Plaza Mayor, para rondar a las Damas de este año',
        'general'
    ),
    (2,
        '2024-09-08',
        '01:00:00',
        '05:00:00',
        'Sesión de Baile con DJ Luis',
        'En la Casa de Cultura',
        'general'
    ),
-- 9 Septiembre 2024
    (2,
        '2024-09-09',
        '09:00:00',
        NULL,
        'Migas Populares',
        'En Abarros para comenzar el primer día de festejos taurinos. Se solicita colaboración',
        'general'
    ),
    (2,
        '2024-09-09',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de Cabezudos y amenizado por la Charanga Patxanga. Salida de Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-09',
        '11:00:00',
        '13:00:00',
        'Primer Encierro de Reses Bravas',
        'Por las calles de costumbre a cargo de la Ganadería Maylin. Se recuerda la prohibición de participar en este tipo de festejos a los menores de 16 años',
        'general'
    ),
    (2,
        '2024-09-09',
        '16:30:00',
        NULL,
        'Café-Concierto con Orquesta Doche',
        'En el Pabellón "Jesús Colón" organizado por la SOCRYD',
        'general'
    ),
    (2,
        '2024-09-09',
        '18:30:00',
        '20:30:00',
        'Suelta de Vaquillas',
        'En la Plaza de toros. Por la misma ganadería, animada por la Charanga Patxanga',
        'general'
    ),
    (2,
        '2024-09-09',
        '00:30:00',
        '04:00:00',
        'Sesión de Baile con la Orquesta Dolche',
        'En el Pabellón "Jesús Colón"',
        'general'
    ),
-- 10 Septiembre 2024
    (2,
        '2024-09-10',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de cabezudos y amenizado por la charanga Patxanga. Salida de Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-10',
        '14:00:00',
        NULL,
        'Tradicional Rancho Popular',
        'En el pabellón "Jesús Colón". Se recuerda que se necesita colaboración',
        'general'
    ),
    (2,
        '2024-09-10',
        '16:30:00',
        NULL,
        'Café-Concierto',
        'Con el grupo "Emociones a la carta en el Pabellón',
        'general'
    ),
    (2,
        '2024-09-10',
        '18:30:00',
        NULL,
        'Disco Movil Infantil',
        'Para los más peques, en la Casa de Cultura',
        'general'
    ),
    (2,
        '2024-09-10',
        '22:00:00',
        NULL,
        'Actuación de Ana María Puente "La Pelirroja"',
        'La voz de la Copla, en la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-10',
        '00:30:00',
        '05:30:00',
        'Sesión de Baile',
        'En la Casa de Cultura con Discomóvil Exceso',
        'general'
    ),
-- 11 Septiembre 2024
    (2,
        '2024-09-11',
        '09:00:00',
        NULL,
        'Migas Populares',
        'En Abarros. Se necesita colaboración',
        'general'
    ),
    (2,
        '2024-09-11',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de cabezudos y amenizado por la Charanga Patxanga. Salida de Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-11',
        '11:00:00',
        '13:00:00',
        'Encierro de Reses Bravas',
        'Par las calles de costumbre a cargo de Ganadería Maylin. Se recuerda la prohibición de participar en este tipo de festejos a los menores de 16 años',
        'general'
    ),
    (2,
        '2024-09-11',
        '18:00:00',
        '20:00:00',
        'Suelta de vaquillas',
        'En la Plaza de Toros, animado por la Charanga Patxanga',
        'general'
    ),
    (2,
        '2024-09-11',
        '22:30:00',
        NULL,
        'Espectáculo "Recordando lo mejor"',
        'En la Casa de Cultura',
        'general'
    ),
    (2,
        '2024-09-11',
        '00:30:00',
        '05:30:00',
        'Macrosesión de baile',
        'En la Casa de Cultura con Discomóvil Atomik + Show Cool Bros',
        'general'
    ),
-- 12 Septiembre 2024
    (2,
        '2024-09-12',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de cabezudos y amenizado por la charanga Patxanga. Salida de Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-12',
        '14:30:00',
        NULL,
        'Comida Interpeñas',
        'En el Pabellón "Jesús Colón". Los tickets habrá que sacarlos previamente por 10€. Seguidamente Recorrido de Peñas con la Charanga Patxanga',
        'general'
    ),
    (2,
        '2024-09-12',
        '18:00:00',
        NULL,
        'Actuación Tributo a las Grandes Voces',
        'Con Alfonso Cebrián (Nino Bravo, Camilo Sexto, Raphael...) en la Casa de Cultura',
        'general'
    ),
    (2,
        '2024-09-12',
        '19:00:00',
        '22:00:00',
        'Hinchables',
        'Para los más pequeños en la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-12',
        '22:00:00',
        NULL,
        'Espectáculo Tributo a Estopa',
        'Por el grupo "Demonios" en la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-12',
        '00:00:00',
        '04:00:00',
        'Actuación de "Disco Food Truck"',
        'En la Plaza Mayor',
        'general'
    ),
-- 13 Septiembre 2024
    (2,
        '2024-09-13',
        '10:00:00',
        NULL,
        'Pasacalles',
        'Con salida de cabezudos y amenizado por la Charanga Patxanga. Salida de Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-13',
        '11:00:00',
        NULL,
        'Campeonato de Futbolín',
        'En la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-13',
        '14:30:00',
        NULL,
        'Comida "Asociación de Jubilados"',
        'En el Pabellón "Jesús Colón". Sacar ticket en el Hogar del Jubilado',
        'general'
    ),
    (2,
        '2024-09-13',
        '16:30:00',
        NULL,
        'Café-Concierto con el grupo "Sí me lo sé"',
        'En el Pabellón "Jesús Colón"',
        'general'
    ),
    (2,
        '2024-09-13',
        '18:15:00',
        '20:15:00',
        'Becerrada Popular',
        'En la Plaza de Toros',
        'general'
    ),
    (2,
        '2024-09-13',
        '22:00:00',
        NULL,
        'Espectáculo "Antología de la Jota del Ebro"',
        'En la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-13',
        '23:30:00',
        NULL,
        'Hoguera',
        'En Santiago',
        'general'
    ),
    (2,
        '2024-09-13',
        '00:30:00',
        '02:30:00',
        'Espectáculo "Rumbas ¡Olé!"',
        'En el Pabellón "Jesús Colón"',
        'general'
    ),
    (2,
        '2024-09-13',
        '02:30:00',
        '06:00:00',
        'Discomóvil',
        'Tras rodar las bolas de Bingo',
        'general'
    ),
-- 14 Septiembre 2024
    (2,
        '2024-09-14',
        '09:00:00',
        NULL,
        'Migas Populares',
        'En Abarros para comenzar bien el día',
        'general'
    ),
    (2,
        '2024-09-14',
        '09:30:00',
        NULL,
        'Pasacalles',
        'Con salida de cabezudos y amenizado por la Charanga Patxanga',
        'general'
    ),
    (2,
        '2024-09-14',
        '11:00:00',
        '13:00:00',
        'Encierro de Reses Bravas',
        'De la ganadería Maylin por el recorrido de costumbre, amenizado por la Charanga Patxanga',
        'general'
    ),
    (2,
        '2024-09-14',
        '18:00:00',
        '20:00:00',
        'Nuevamente Encierro',
        'Por las calles de la localidad',
        'general'
    ),
    (2,
        '2024-09-14',
        '22:00:00',
        NULL,
        'Entrega de Trofeos',
        'En la Plaza Mayor amenizado por la Banda Municipal de Música',
        'general'
    ),
    (2,
        '2024-09-14',
        '00:00:00',
        NULL,
        'Gran Espectáculo Pirotécnico',
        'En las inmediaciones de la Plaza de Toros. Se recomienda guardar la distancia de seguridad y respetar la señalización de los lugares desde los que se podrá contemplar',
        'general'
    ),
    (2,
        '2024-09-14',
        '00:30:00',
        NULL,
        'Concierto a cargo del grupo "Bunkers 77"',
        'En la Casa de Cultura',
        'general'
    ),
    (2,
        '2024-09-14',
        '01:00:00',
        '07:00:00',
        'Macrodiscomovil',
        'En el Pabellón "Jesús Colón" a cargo de Macro DJ Elastik y DJ Denisse organizado por la SOCRYD',
        'general'
    ),
-- 15 Septiembre 2024
    (2,
        '2024-09-15',
        '11:00:00',
        NULL,
        'Acto de Hermanamiento con Arzaq',
        'Por su 20 aniversario, en la Plaza Mayor',
        'general'
    ),
    (2,
        '2024-09-15',
        '12:00:00',
        NULL,
        'Misa y Despedida de nuestra Patrona',
        'Hasta la Casa de la Música y Traca de Fin de Fiestas',
        'general'
    ),
    (2,
        '2024-09-15',
        '17:30:00',
        NULL,
        'Concierto de la Banda de La Cartuja',
        'En la Iglesia Parroquial de Santiago y San Miguel',
        'general'
    ),

-- RELIGIOSOS
    (2,
        '2024-09-07',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-07',
        '18:30:00',
        NULL,
        'Salida del Monasterio de Monlora',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-07',
        '20:30:00',
        NULL,
        'Recibimiento de la Virgen',
        'En La casa de la Música y seguidamente subida a la Plaza Mayor en procesión para realizar la Ofrenda de Flores a nuestra Patrona',
        'religioso'
    ),
    (2,
        '2024-09-08',
        '09:00:00',
        NULL,
        'Misa Saludando a la Virgen',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-08',
        '11:30:00',
        NULL,
        'Misa Mayor',
        'Celebrada en la Iglesia Parroquial',
        'religioso'
    ),
    (2,
        '2024-09-08',
        '20:30:00',
        NULL,
        'Acto Mariano en Honor a Nuestra Patrona',
        'Y seguidamente procesión por las calles de costumbre',
        'religioso'
    ),
    (2,
        '2024-09-09',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-10',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-11',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-12',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-13',
        '09:30:00',
        NULL,
        'Misa',
        NULL,
        'religioso'
    ),
    (2,
        '2024-09-14',
        '10:00:00',
        NULL,
        'Misa en Santiago',
        '"Día del Cristo"',
        'religioso'
    ),
    (2,
        '2024-09-15',
        '12:00:00',
        NULL,
        'Misa Dominical',
        'Y seguidamente despedida de nuestra Virgen de Monlora hasta la Casa de la Música. Subida al Santuario',
        'religioso'
    )
;

-- Insertar eventos (MAYO 2025)
INSERT INTO eventos (fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria) VALUES
    (3, '2025-04-30', '00:00:00', NULL, 'Discomóvil Stuttgart', 'Organizado por la SOCRYD', 'general'),
    (3, '2025-05-01', '08:00:00', '23:00:00', 'Romería al Santuario de Monlora', 'Celebraremos y comeremos todos juntos', 'religioso'),
    (3, '2025-05-02', '16:45:00', '17:30:00', 'Encierro de Minibueyes', 'Menores de 16 años. Por la Calle Mayor, seguidamente se irá con los carretones hasta la plaza', 'general'),
    (3, '2025-05-02', '18:00:00', '20:00:00', 'Vaquillas en la plaza', 'Mayores de 16 años', 'general'),
    (3, '2025-05-02', '00:00:00', NULL, 'Grupo Boulevar', 'Organizado por la SOCRYD', 'general'),
    (3, '2025-05-03', '11:00:00', '13:00:00', 'Suelta de Vaquillas', 'Por el recorrido de costumbre', 'general'),
    (3, '2025-05-03', '14:00:00', '17:30:00', 'Comida de Interpeñas', 'En la Calle Mayor', 'general'),
    (3, '2025-05-03', '18:00:00', '20:00:00', 'Suelta de Vaquillas', 'Por el recorrido de costumbre', 'general'),
    (3, '2025-05-03', '01:00:00', NULL, 'Super Boom Circus + Macrodiscomovil DREAMS', 'Organizado por la SOCRYD', 'general'),
    (3, '2025-05-04', '11:00:00', '14:00:00', 'Hinchables infantiles', 'En la Plaza Mayor', 'general')
;

-- Insertar eventos (LUNA 2025)
INSERT INTO eventos (fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria) VALUES
    (4, '2025-09-27', '11:00:00', '13:00:00', 'Encierro', 'recorrido', 'general')
;

-- Noticias para MAYO 2024
INSERT INTO noticias (fiesta_id, fecha, mensaje) VALUES
    (1, '2024-04-27 10:30:00', 'Debido al viento, el encierro infantil se retrasa a las 12:00.'),
    (1, '2024-04-28 14:00:00', 'Se ruega puntualidad para el acto del homenaje a los mayores.'),
    (1, '2024-04-30 19:00:00', 'La discomóvil arrancará a las 00:00 en vez de las 23:30 por ajustes técnicos.')
;

-- Noticias para MONLORA 2024
INSERT INTO noticias (fiesta_id, fecha, mensaje) VALUES
    (2, '2024-09-06 18:00:00', 'Cambio de ubicación: el concierto nocturno se celebrará en el Pabellón Municipal.'),
    (2, '2024-09-07 12:00:00', 'La misa se celebrará en la ermita por previsión de lluvias.'),
    (2, '2024-09-08 09:00:00', 'Recordamos que el acceso a la plaza estará restringido desde las 17:00.')
;

-- Noticias para MAYO 2025
INSERT INTO noticias (fiesta_id, fecha, mensaje) VALUES
    (3, '2025-04-28 09:00:00', 'Añadido nuevo evento: Masterclass de Zumba a las 11:00 en la Plaza Mayor.'),
    (3, '2025-04-29 16:30:00', 'La entrega de trofeos del campeonato de guiñote se adelanta a las 18:00.'),
    (3, '2025-04-30 20:00:00', 'El castillo de fuegos artificiales se traslada al aparcamiento del campo de fútbol.')
;

-- Saludos para MONLORA 2024
INSERT INTO saludos (fiesta_id, autor, cargo, mensaje, categoria) VALUES
    (2,
        'Luis Miguel Casajús Ciudad',
        'Alcalde del Ayuntamiento de Luna',
        'Queridos vecinos y vecinas: Es un honor para mí dirigirme a vosotros en esta ocasión tan especial en la que
        celebramo nuestras tan queridas fiestas patronales. Estas fiestas son una oportunidad maravillosa para
        reforzar nuestros lazos como comunidad, recordar nuestras tradiciones y disfrutar juntos de todas las
        actividades programadas con todo esmero y cariño por la concejalía de festejos y todas las asociaciones
        y personas que han colaborado en la elaboración del programa de festejos 2024. Celebremos con orgullo nuestras
        tradiciones y cutlura bajo el manto protector de nuestra patrona la Virgen de Monlora, que estos días estará
        más cerca de nosotros acompañándonos en cada acto. Aprovechemos este tiempo para compartir momentos inolvidables
        con amigos, familiares, y con todos aquellos que nos visiten estos días. Que estas fiestas estén llenas de
        alegría, de diversión, unidad y también de respeto a todos y cada uno de nosotros. Os deseo unas felices fiestas',
        'general'
    ),
    (2,
        'Juan Antonio Soro Borao',
        'Concejal de Fiestas del Ayuntamiento de Luna',
        'Os vuelvo a saludar desde estas páginas cuando llegan las fiestas. Unos días que todos esperamos con ilusión,
        después de un verano muy caluroso, aunque al fin, bueno para el campo. Deseamos que os guste el programa que
        hemos preparado, intentando llegar a todas las personas. Agradecer el esfuerzo a todos los trabajadores
        municipales, asociaciones y personas que han colaborado en la elaboración de estas fiestas. En un año con
        muchos aniversarios especiales, banda de música, coral municipal y grupo de jota, en especial el 50
        aniversario de la cooperativa San José Artesano, pregoneras de estas fiestas 2024. También se cumplen 20 años
        del hermanamiento con Arzaq. La peña El Follón, que lanza el cohete de inicio de fiestas, también cumplen 25
        años. Sólo queda decir, que disfrutéis de estos días, pasadlo bien y tratad de ser felices. Felices fiestas',
        'general'
    ),
    (2,
        'Mosen Antonio Auría',
        'Párroco de Luna',
        'Días de saludos, de vernos, de celebrar y de vivir las fiestas del año 2024 - y siempre será más fiesta si
        esta fiesta llega a todos y en especial a los que por lo que sea se sienten tristes - los enfermos, los
        mayores y a todos los que nos rodean haciéndolos cercanos a ellos porque al mismo tiempo nos hacen felices a
        nosotros y todo bajo la presencia de la Virgen de Monlora nuestra patrona. Estemos seguro que de cada uno de
        nosotros es precioso ante sus ojos y que nada de lo que habita en nuestros corazones es ajeno a ella. Dejémonos
        alcanzar por su dulcísima mirada y recibamos la consoladora caricia de su sonrisa diciéndole: Protege nuestra
        vida entre tus brazos, bendice y refuerza todo deseo de bien y reaviva y alimenta la fe, sostiene e ilumina la
        esperanza, guíanos a todos hacia el bien. Deseando veros en estos días nos deseamos y os deseo unas felices
        fiestas',
        'religioso'
    )
;

-- Colaboradores para MONLORA 2024
INSERT INTO colaboradores (fiesta_id, nombre, logo_url, web_url) VALUES
    (2, 'Cooperativa Agraria Santiago y San Miguel ', 'assets/logos/logo.png', NULL),
    (2, 'Clínica Dental Las Fuente Norte', 'assets/logos/logo.png', NULL),
    (2, 'Foto Estudio Video Navarro', 'assets/logos/logo.png', NULL),
    (2, 'Excavaciones y Movimientos de tierra Llera Lasobras ', 'assets/logos/logo.png', NULL),
    (2, 'Conta XXI Asesoría de Empresas', 'assets/logos/logo.png', NULL),
    (2, 'Sociedad de Cazadores Virgen de Monlora', 'assets/logos/logo.png', NULL),
    (2, 'Carnicería - Chacinería Hermanas Villacampa ', 'assets/logos/logo.png', NULL),
    (2, 'Bar La Cultural', 'assets/logos/logo.png', NULL),
    (2, 'Panadería - Repostería José Antonio Castillo Nocito', 'assets/logos/logo.png', NULL),
    (2, 'Espectáculos Arbués ', 'assets/logos/logo.png', NULL),
    (2, 'Peña El Follón', 'assets/logos/logo.png', NULL),
    (2, 'Peña El Escobizo', 'assets/logos/logo.png', NULL),
    (2, 'La Bombonera de Luna - Bar de Copas', 'assets/logos/logo.png', NULL),
    (2, 'Hermandad de Monlora', 'assets/logos/logo.png', NULL),
    (2, 'Berma. Construcciones y Reformas', 'assets/logos/logo.png', NULL),
    (2, 'Lunaventura. Ecodiversión', 'assets/logos/logo.png', NULL),
    (2, 'Pinturas Arlam S.C.', 'assets/logos/logo.png', NULL),
    (2, 'Neumáticos Luna', 'assets/logos/logo.png', NULL),
    (2, 'Lasaosa Sorigué', 'assets/logos/logo.png', NULL),
    (2, 'Muveteca. Centro de Fisioterapia', 'assets/logos/logo.png', NULL),
    (2, 'Reformas Calvero Diez', 'assets/logos/logo.png', NULL),
    (2, 'Clínica Dental Lasierra Mendieta', 'assets/logos/logo.png', NULL),
    (2, 'Correduría de Seguros Tomás Samper', 'assets/logos/logo.png', NULL),
    (2, 'Talleres Gallur Romea', 'assets/logos/logo.png', NULL),
    (2, 'Agrotenbre S.L.', 'assets/logos/logo.png', NULL),
    (2, 'Construcciones y Reformas Duarte', 'assets/logos/logo.png', NULL),
    (2, 'Laborda S.C.', 'assets/logos/logo.png', NULL),
    (2, 'UNA Nutrición', 'assets/logos/logo.png', NULL),
    (2, 'Cooperativa San José Artesano', 'assets/logos/logo.png', NULL),
    (2, 'Servicios Funerarios Mémora', 'assets/logos/logo.png', NULL),
    (2, 'NSD Arquitectura', 'assets/logos/logo.png', NULL),
    (2, 'Asociación de Mujeres Virgen del Alba', 'assets/logos/logo.png', NULL),
    (2, 'Bar El Collerón', 'assets/logos/logo.png', NULL),
    (2, 'Funeraria Vinue', 'assets/logos/logo.png', NULL),
    (2, 'Instalaciones David Alvarez', 'assets/logos/logo.png', NULL),
    (2, 'Peluquería Alicia', 'assets/logos/logo.png', NULL),
    (2, 'Global Solutions Tecnol', 'assets/logos/logo.png', NULL),
    (2, 'Correduría de Seguros Toribio Marteles', 'assets/logos/logo.png', NULL),
    (2, 'Fontanería ADE', 'assets/logos/logo.png', NULL),
    (2, 'Gasóleos Virgen de La Oliva', 'assets/logos/logo.png', NULL),
    (2, 'Exclusivas Samper', 'assets/logos/logo.png', NULL),
    (2, 'Restaurante El Regano', 'assets/logos/logo.png', NULL),
    (2, 'Hsenser Hogar', 'assets/logos/logo.png', NULL),
    (2, 'Antonio Villa', 'assets/logos/logo.png', NULL),
    (2, 'Taxi Juan Carlos Lasierra Apilluelo', 'assets/logos/logo.png', NULL),
    (2, 'Taller Mecánico Puello', 'assets/logos/logo.png', NULL),
    (2, 'Carpintería Hermanos Casbas', 'assets/logos/logo.png', NULL),
    (2, 'Agro Ramón', 'assets/logos/logo.png', NULL),
    (2, 'La Barbería Cesar Gay Gimenez', 'assets/logos/logo.png', NULL),
    (2, 'Gallizo', 'assets/logos/logo.png', NULL),
    (2, 'Albañilería Cortes Lucea S.L.', 'assets/logos/logo.png', NULL),
    (2, 'CD Luna', 'assets/logos/logo.png', NULL),
    (2, 'Serviluna S.C.V', 'assets/logos/logo.png', NULL)
;