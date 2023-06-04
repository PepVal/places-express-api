interface IPlaces {
  id: number;
  name: string;
  description: string;
  picture: string;
  address: string;
  province: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export const FakePlaces: IPlaces[] = [
  {
    id: 1,
    name: 'Iglesia de San Francisco',
    description:
      'La Iglesia de San Francisco es una iglesia católica ubicada en el Centro histórico de Cuenca (Ecuador) en la calle Padre Aguirre y Presidente Córdova. Esta iglesia es uno de los más destacados templos que embellecen la urbe. La comunidad religiosa franciscana junto con la comunidad de dominicos (Iglesia de Santo Domingo), tiene a su cargo el adoctrinamiento de los indígenas de la región: Paute, Gualaceo, Molleturo y Paccha',
    address: 'Cuenca (Ecuador)',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Iglesia_de_San_Francisco_desde_la_esquina_de_las_calles_Padre_Aguirre_y_Presidente_C%C3%B3rdova.jpg/400px-Iglesia_de_San_Francisco_desde_la_esquina_de_las_calles_Padre_Aguirre_y_Presidente_C%C3%B3rdova.jpg',
    province: 'Azuay',
    location: {
      latitude: -2.898642784278529,
      longitude: -79.00636924130475,
    },
  },
  {
    id: 2,
    name: 'Reserva Buenaventura, Fundación Jocotoco',
    description:
      'En esta reserva habitan aves como el Perico de Orcés, el Pájaro Paraguas Longuipéndulo, el Mosquero Real del Pacífico, el Oro Tapaculo, el Gavilán Dorsigrís. Además, la reserva protege mamíferos como el Mono Capuchino Blanco del Occidente, el Perezoso de dos dedos de Occidente, el Oso Hormiguero y el Tigrillo Chico Manchado y el Coatí.',
    address: 'Piñas (Ecuador)',
    picture:
      'https://www.jocotoco.org.ec/dct/tmp_adjuntos/noEn/000/005/_F5A4643,%20BU%202018,%20Tucan%20de%20Swainson,%20Chestnut-mandibled%20Toucan,%20Doug%20Wechsler,%20web%201200x800.jpg',
    province: 'El Oro',
    location: {
      latitude: -3.6538749931135532,
      longitude: -79.76809320943309,
    },
  },
  {
    id: 3,
    name: 'Museo de las Culturas Aborígenes',
    description:
      'El Museo de las Culturas Aborígenes en un museo ubicado en Cuenca, Ecuador. Ocupa una antigua posada de arrieros y recuas. La colección tiene 8000 piezas arqueológicas que abarca desde la época paleolítica y neolítica hasta los incas',
    address: 'Cuenca (Ecuador)',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Museo_de_las_Culturas_Abor%C3%ADgenes_-_interior.jpg/400px-Museo_de_las_Culturas_Abor%C3%ADgenes_-_interior.jpg',
    province: 'Azuay',
    location: {
      latitude: -2.9026083028728924,
      longitude: -79.00219225351454,
    },
  },
  {
    id: 4,
    name: 'Volcán Cotopaxi',
    description:
      'El Cotopaxi tiene una elevación de 5.897 msnm es el segundo de más altura del país (siendo precedido por el Chimborazo) y uno de los volcanes activos más altos del mundo. Está situado 50 km al sur de Quito. El Cotopaxi es uno de los más bellos volcanes nevados de Los Andes. En sus alrededores se encuentran caminos y espacios para disfrutar a plenitud de la serranía ecuatoriana.',
    address: 'Cuenca (Ecuador)',
    picture:
      'https://es.wikipedia.org/wiki/Volc%C3%A1n_Cotopaxi#/media/Archivo:V%C3%B3lcan_Cotopaxi.jpg',
    province: 'Cotopaxi',
    location: {
      latitude: -0.6622091888712305,
      longitude: -78.438718403064,
    },
  },
  {
    id: 5,
    name: 'Volcán Chimborazo',
    description:
      'El Chimborazo, con sus imponentes 20.560 pies de altura sobre las tierras costeras a un lado, y sobre la selva amazónica al otro, el Chimborazo es el pico más alto del Ecuador y el decimoséptimo del mundo. Una curiosidad acerca del Chimborazo es que su cima constituye el punto más lejano de la superficie terrestre con respecto al centro del planeta. La parte superior del monte Chimborazo está completamente cubierta por glaciares, con brazos al noreste que bajan a 4.600 msnm. Su glaciar es la fuente de agua para la población de las provincias ecuatorianas de Bolívar y Chimborazo.',
    address: 'Guano (Ecuador)',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Volc%C3%A1n_Chimborazo_desde_Riobamba.jpg/275px-Volc%C3%A1n_Chimborazo_desde_Riobamba.jpg',
    province: 'Chimborazo',
    location: {
      latitude: -1.4134988691074968,
      longitude: -78.86426486360027,
    },
  },
  {
    id: 6,
    name: 'Parque Nacional El Cajas',
    description:
      'El Parque Nacional El Cajas está situado en los Andes, al sur del Ecuador, en la provincia de Azuay, a 33 km al noroccidente de la ciudad de Cuenca. Los accesos más comunes al parque inician todos en Cuenca: Desde allí, la vía Colectora Cuenca-Puerto Inca, también llamada vía Cuenca-Molleturo, atraviesa en Control de Surocucho en poco más de 30 minutos de viaje; más adelante, esta misma carretera pasa a orillas de la laguna La Toreadora donde están el Centro Administrativo y de Información del Parque. Siguiendo de largo hacia Molleturo, por esta vía se conoce el sector norte del Cajas y se serpentea entre varias lagunas mayores y menores.',
    address: 'Cuenca (Ecuador)',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Ecuador_cajas_national_park.jpg/1024px-Ecuador_cajas_national_park.jpg',
    province: 'Azuay',
    location: {
      latitude: -2.8486904838315343,
      longitude: -79.25377415016969,
    },
  },
  {
    id: 7,
    name: 'Isla Baltra',
    description:
      'La isla Baltra, nombre cuyo origen se desconoce, fue bautizada como Seymour Sur en honor al marino y aristócrata británico Lord Hugh Seymour) es una isla, que forma parte del archipiélago de las Islas Galápagos. Baltra es una Isla plana y seca, rodeada de arrecifes y unas pocas playas. Tiene algo de vegetación como algunos Cactus Opuntia y otros árboles pequeños.',
    address: 'Islas Baltra (Ecuador)',
    picture:
      'https://img.goraymi.com/2018/06/06/395f26135535f8377ee1c0b93c5cffee_xl.jpg',
    province: 'Galápagos',
    location: {
      latitude: -0.4662655662944973,
      longitude: -90.28375170725624,
    },
  },
  {
    id: 8,
    name: 'Mitad del Mundo',
    description:
      'El monumento a la Mitad del Mundo, ubicado a una hora de Quito, es un homenaje a la Misión Geodésica Francesa que visitó el país en el siglo XVIII para determinar la forma de la Tierra. Al visitar este monumento, podrá poner un pie en el hemisferio norte y otro en el hemisferio sur, además de experimentar con algunos fenómenos que solo tienen lugar en plena línea equinoccial.',
    address: 'Quito (Ecuador)',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mitad_del_Mundo_01.jpg/275px-Mitad_del_Mundo_01.jpg',
    province: 'Pichincha',
    location: {
      latitude: -0.002115776380566475,
      longitude: -78.45583735960884,
    },
  },
];
