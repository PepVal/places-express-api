CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    username VARCHAR(255),
    avatar VARCHAR(255)
);
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type INT,
    -- 1: IMAGE | 2: VIDEO | 3: AUDIO
    description VARCHAR(255),
    content TEXT,
    likes INTEGER,
    saved INTEGER,
    createdAt DATE,
    id_user INTEGER,
    FOREIGN KEY (id_user) REFERENCES users (id)
);
CREATE TABLE interactions (
    id_user INTEGER,
    id_post INTEGER,
    type INT,
    --  1: LIKE | 2: SAVE
    PRIMARY KEY (id_user, id_post, type),
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_post) REFERENCES post (id)
);
INSERT INTO users (name, username, avatar)
VALUES (
        'José Ochoa',
        'pepval',
        'https://randomuser.me/api/portraits/men/60.jpg'
    ),
    (
        'Nadir Mendes',
        'bluedog815',
        'https://randomuser.me/api/portraits/men/32.jpg'
    ),
    (
        'Wendolin Bustos',
        'bigrabbit648',
        'https://randomuser.me/api/portraits/men/76.jpg'
    ),
    (
        'Herbert Nguyen',
        'sadbird955',
        'https://randomuser.me/api/portraits/men/3.jpg'
    ),
    (
        'Joan Navarro',
        'silverostrich926',
        'https://randomuser.me/api/portraits/men/35.jpg'
    ),
    (
        'Martha Robinson',
        'smallelephant975',
        'https://randomuser.me/api/portraits/women/90.jpg'
    ),
    (
        'Vickie Rogers',
        'beautifulladybug792',
        'https://randomuser.me/api/portraits/women/59.jpg'
    ),
    (
        'Radmila Galka',
        'blackzebra833',
        'https://randomuser.me/api/portraits/women/95.jpg'
    ),
    (
        'Darlene Gilbert',
        'tinyladybug695',
        'https://randomuser.me/api/portraits/women/0.jpg'
    ),
    (
        'Bobby Henry',
        'ticklishbutterfly344',
        'https://randomuser.me/api/portraits/men/30.jpg'
    ),
    (
        'Linda Tucker',
        'crazyswan239',
        'https://randomuser.me/api/portraits/women/31.jpg'
    );
INSERT INTO posts (
        type,
        description,
        content,
        likes,
        saved,
        id_user,
        createdAt
    )
VALUES (
        1,
        'Una impresionante vista panorámica de un exuberante paisaje natural. Las majestuosas montañas se elevan hacia el cielo, envueltas en una suave bruma que añade un toque de misterio. El sol se asoma tímidamente entre las nubes.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Fbeach-418742_1280.jpg?alt=media&token=fb4f5a3e-0757-4d8d-b806-477535e4e3b5',
        3000,
        10,
        1,
        '10/05/2023'
    ),
    (
        2,
        'Un emocionante encuentro con la realeza de la sabana: leones majestuosos en su hábitat natural, mostrando su fuerza, gracia y poderío en una danza salvaje que cautiva y revela la esencia indomable de la vida salvaje.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fvideos%2F190301_1_25_11_preview.mp4?alt=media&token=71d274ba-7138-4dc9-ade9-92a4a0da0ada',
        1059862,
        556213,
        1,
        '20/03/2023'
    ),
    (
        3,
        'Mi canción favorita',
        'https://youtu.be/k3zimSRKqNw',
        15628921,
        98455,
        1,
        '10/01/2022'
    ),
    (
        2,
        'Una guía práctica para la salud: en este video, aprende la importancia de la desinfección de manos y cómo realizarla correctamente, asegurando una higiene óptima y protección contra gérmenes. ¡Un paso fundamental para cuidar de ti y de los demás!',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fvideos%2F200314%20-%20Work%20Life_Hand%20Sanitiser_04_4k_003_preview.mp4?alt=media&token=70692332-aa9a-487c-97ee-51d847e69e76',
        5000,
        1230,
        2,
        '20/04/2023'
    ),
    (
        1,
        'Un paisaje cautivador: montañas imponentes se alzan sobre valles exuberantes, mientras un sol radiante ilumina un río que serpentea entre ellos, creando un escenario de belleza indescriptible y despertando una sensación de asombro ante la grandeza de la naturaleza.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Fbeach-gcf340d7a0_1280.jpg?alt=media&token=5269637a-f6ac-48ec-b774-18566d0c3272',
        50000,
        5000,
        3,
        '20/04/2023'
    ),
    (
        1,
        'Un lienzo natural deslumbrante: montañas escarpadas, un cielo enérgico y un río cristalino se entrelazan en armonía, ofreciendo una vista que despierta la imaginación y suscita una profunda conexión con la belleza inigualable de la naturaleza.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Ffield-g8987bc136_1280.jpg?alt=media&token=3985e5ae-8c4f-4290-ac65-a3c36efeac80',
        100,
        50,
        4,
        '14/08/2022'
    ),
    (
        1,
        'Un espectáculo visual cautivador: montañas majestuosas se alzan entre un cielo azul vívido, mientras un río serpenteante serena el paisaje y una exuberante vegetación pinta de verde cada rincón, creando una sinfonía de colores que inspira calma y asombro.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Ftree-g27ea1c563_1280.jpg?alt=media&token=49065647-334b-4f7b-9213-78c6ca9b6a52',
        100000,
        30000,
        5,
        '14/12/2022'
    ),
    (
        1,
        'Un horizonte cautivador: montañas abrazadas por nubes, un río serpenteante y una belleza natural que deja sin aliento.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Fmaldives-g652d9622c_1280.jpg?alt=media&token=28124383-b129-460d-ab75-996a1c8718ad',
        5,
        0,
        6,
        '06/08/2022'
    ),
    (
        1,
        'Un escenario impresionante: montañas imponentes, cielo azul claro y un río sereno dibujan un paisaje de serenidad.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Froad-ga805dc77b_1280.jpg?alt=media&token=651d07de-4822-423a-8f26-f75a103ad24f',
        8789,
        562,
        7,
        '07/01/2023'
    ),
    (
        2,
        'El poder de la sinergia: este video destaca la importancia del trabajo en equipo, mostrando cómo la colaboración, la comunicación y la confianza mutua pueden lograr resultados extraordinarios.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fvideos%2F200314%20_Work%20Life_02_%204k_058_preview.mp4?alt=media&token=7bcb89bd-5b58-42c5-8bdd-5cb230208864',
        10562,
        1230,
        8,
        '04/02/2022'
    ),
    (
        1,
        'Un paraíso natural: montañas majestuosas, un río serpenteante y una exuberante vegetación crean un paisaje de ensueño.',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fimages%2Ftrain-g0ec124d5b_1280.jpg?alt=media&token=49af9112-6afa-4d6a-b1b6-a341164170d7',
        12360,
        5621,
        9,
        '17/02/2023'
    ),
    (
        2,
        'I love dev ♥',
        'https://firebasestorage.googleapis.com/v0/b/el-planeta-96973.appspot.com/o/android-project%2Fvideos%2F_import_609113a1be0e89.39394997_preview.mp4?alt=media&token=e5d16217-9370-47e3-8aeb-e880dbd2baa8',
        556123,
        4512,
        10,
        '11/10/2022'
    );

SELECT posts.*,
    GROUP_CONCAT(DISTINCT interactions.type) AS interaction_types,
    users.name AS user_name,
    users.avatar AS user_avatar
FROM posts
    INNER JOIN users ON posts.id_user = users.id
    LEFT JOIN interactions ON posts.id = interactions.id_post
    AND interactions.id_user = 1
GROUP BY posts.id
ORDER BY posts.id ASC;