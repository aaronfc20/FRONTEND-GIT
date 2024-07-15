const allProductsData = {
    allProductsData: [
      {
        id: 1,
        discount: 50,
        img: "/img/flash-deals/ram.jpg",
        name: "MEMORIA RAM HP",
        price: 120,
        desc: "a memoria RAM para laptops es un tipo de memoria volátil, esencial para almacenar datos temporales y ejecutar aplicaciones eficientemente. Se presenta principalmente en formato SO-DIMM y varía en capacidad (4 GB a 64 GB) y velocidad (2133 MHz a 4266 MHz o más).",
        serie: "Por: MARCA HP - Serie: S1 SERIES",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 2,
        discount: 40,
        img: "/img/flash-deals/pc.jpg",
        name: "ASUS ROG MONITOR",
        price: 2000,
        desc: "Los monitores ASUS ROG (Republic of Gamers) están diseñados específicamente para ofrecer una experiencia de juego superior con características avanzadas y tecnología de punta. Estos monitores se destacan por sus altas tasas de refresco, baja latencia, y alta resolución, ideales para jugadores exigentes.",
        serie: "Por: ASUS - Serie: PG329Q-W",
        caracteristicas: {
          Modelo: "PG329Q-W",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 3,
        discount: 40,
        img: "/img/flash-deals/NIN.jpg",
        name: "Consola Nintendo Switch ",
        price: 1399,
        desc: "La Nintendo Switch es una consola de videojuegos híbrida lanzada por Nintendo en marzo de 2017. Diseñada para funcionar tanto como una consola de sobremesa conectada a un televisor, como una portátil, ofrece una versatilidad única en el mercado de videojuegos.",
        serie: "Por: Nintendo - Serie: Mario kart",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 4,
        discount: 40,
        img: "/img/flash-deals/flash-4.png",
        name: "Smart Watch Black",
        price: 50,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit, neque vitae egestas porta, eros neque vestibulum purus, at pretium nulla tellus sed mauris. Aliquam nec lacus non metus bibendum faucibus. Etiam vulputate leo nec ante consectetur, sed vulputate dui vestibulum. Quisque porta augue sapien, et lobortis odio molestie mattis. Aliquam erat volutpat. Morbi semper lacus et augue aliquam pretium. Sed interdum risus eu sem gravida malesuada. Suspendisse efficitur elementum ex, sed varius tortor auctor eu. Ut interdum posuere lacus, sed tristique erat blandit et. Nulla ac odio ullamcorper, vestibulum urna sed, tristique turpis. Pellentesque maximus porttitor molestie. Nunc consequat.",
        serie: "Por: HASBRO - Serie: Avengers Endgame",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 5,
        discount: 50,
        img: "/img/flash-deals/sony.jpg",
        name: "Audífonos Playstation PS5",
        price: 200,
        desc: "Para disfrutar al máximo de los juegos en la PlayStation 5 (PS5), los audífonos recomendados incluyen el Sony Pulse 3D Wireless Headset, que ofrece audio 3D y conectividad inalámbrica con hasta 12 horas de batería, y el SteelSeries Arctis 7P+, con sonido nítido y hasta 30 horas de batería. .",
        serie: "Por: Sony - Serie: 2024",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 6,
        discount: 50,
        img: "/img/flash-deals/mando.jpg",
        name: "Smart Glasses",
        price: 300,
        desc: "El DualShock 4 para PS4 destaca por su diseño ergonómico y sus funciones avanzadas, incluyendo un panel táctil que ofrece nuevas formas de interactuar con los juegos, un botón SHARE para capturar y compartir fácilmente momentos de juego, y un altavoz incorporado para efectos de sonido adicionales..",
        serie: "Por: SONY - Serie: DualShock 4",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 7,
        img: "/img/flash-deals/juego.jpg",
        name: "Amazon Asistende de voz",
        price: 229,
        discount: "25",
        desc: "Los asistentes de voz de Amazon son parte de su línea de productos Echo, que incluye dispositivos como Echo Dot, Echo Show y Echo Studio. Estos asistentes de voz están impulsados por la inteligencia artificial de Alexa, que permite a los usuarios realizar una variedad de tareas utilizando comandos de voz..",
        serie: "Por: Amazon - Serie: 2020",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 8,
        img: "/img/flash-deals/aire.jpg",
        name: "Gear Gamer Bases Laptops",
        price: 59,
        discount: "10",
        desc: "Las bases para laptops de Gear Gamer® son accesorios diseñados para mejorar la comodidad y la experiencia de uso al trabajar o jugar en una laptop. Estas bases suelen ofrecer varias características para mejorar la ventilación y el rendimiento térmico de la laptop.",
        serie: "Por: Gear Gamer - Serie: Air",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 9,
        img: "/img/flash-deals/gear.jpg",
        name: "Gear Webcams",
        price: "109",
        discount: "50 ",
        desc: "Gear® ofrece una variedad de webcams diseñadas para satisfacer las necesidades de diferentes usuarios, desde aquellos que necesitan una solución básica para videoconferencias hasta aquellos que requieren alta definición para streaming o contenido creativo. ",
        serie: "Por: Gear - Serie: WebCam",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      {
        id: 10,
        img: "/img/flash-deals/video.jpg",
        name: "Tarjetas Gráficas NVIDIA",
        price: "2850",
        discount: "10 ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit, neque vitae egestas porta, eros neque vestibulum purus, at pretium nulla tellus sed mauris. Aliquam nec lacus non metus bibendum faucibus. Etiam vulputate leo nec ante consectetur, sed vulputate dui vestibulum. Quisque porta augue sapien, et lobortis odio molestie mattis. Aliquam erat volutpat. Morbi semper lacus et augue aliquam pretium. Sed interdum risus eu sem gravida malesuada. Suspendisse efficitur elementum ex, sed varius tortor auctor eu. Ut interdum posuere lacus, sed tristique erat blandit et. Nulla ac odio ullamcorper, vestibulum urna sed, tristique turpis. Pellentesque maximus porttitor molestie. Nunc consequat.",
        serie: "Por: Serie - Serie: 16Gb GDDR6 128-bit",
        caracteristicas: {
          Modelo: "7EH99AA#ABM",
          Capacidad: "16GB",
          Tipo: "DDR4",
          Voltaje: "1.2V",
          Velocidad: "2666 MHZ",
          Latencia: "CL 19",
          Número_de_módulos: "1",
          Formato: "SO-DIMM"
        }
      },
      
    ],
  };
  
  export default allProductsData;
  