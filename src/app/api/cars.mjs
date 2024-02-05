


import { PrismaClient } from '@prisma/client';

// Crea una instancia del cliente Prisma
const prisma = new PrismaClient();

// Define la función main como async para poder utilizar await
async function main() {
    // Datos de los autos
    const cars = [
        {
            name: 'Nissan Skyline R34',
            brand: 'Nissan',
            description: 'El Nissan Skyline R34, un ícono de la ingeniería japonesa, fusiona elegancia y rendimiento. Su diseño aerodinámico, líneas agresivas y detalles refinados expresan su carácter deportivo. Equipado con un motor twin-turbo, tracción integral y tecnología avanzada, el R34 ofrece una experiencia de conducción emocionante. Su prestigio en el mundo del tuning lo convierte en un lienzo para la personalización, mientras que su legado en las carreras lo eleva a la categoría de leyenda automotriz. El R34 trasciende el tiempo, capturando la pasión de los entusiastas y dejando una huella indeleble en la historia de los automóviles deportivos.',
            image: 'https://www.frontlinehobbies.com.au/assets/full/A006250.jpg',
            price: 12.00
        },
        {
            name: 'Toyota Supra MK4',
            brand: 'Toyota',
            description: 'El Toyota Supra MK4 es un ícono del rendimiento automotriz japonés. Su diseño aerodinámico y líneas fluidas capturan la esencia deportiva. Equipado con un potente motor turboalimentado, tracción trasera y una suspensión afinada, ofrece una conducción emocionante. La carrocería distintiva y el alerón trasero contribuyen a su estética única. Conocido por su participación en deportes de motor, el Supra MK4 se ha convertido en un lienzo para modificaciones y personalizaciones. Su legado perdura como un símbolo de potencia, estilo y pasión por la conducción deportiva.',
            image: 'https://www.solido.com/wp-content/uploads/2022/05/toyota-supra-mk4-a80-renaissance-red-1993-07.jpg',
            price: 12.00
        },
        {
            name: 'Honda NSX',
            brand: 'Honda',
            description: 'El Honda NSX, también conocido como Acura NSX en algunos mercados, es un superdeportivo japonés que redefine la excelencia en ingeniería. Con un diseño elegante y aerodinámico, este biplaza de motor central destaca por su carrocería de aluminio y fibra de carbono. Equipado con un motor V6 biturbo acoplado a un sistema híbrido Sport Hybrid SH-AWD, el NSX logra un rendimiento excepcional y eficiencia. Su avanzada suspensión y dirección responden con precisión, brindando una experiencia de conducción envolvente. Con herencia en las pistas de carreras, el NSX fusiona el lujo y la tecnología para establecer nuevos estándares en el mundo de los superdeportivos, consolidándose como un referente de innovación y rendimiento.',
            image: 'https://www.super-hobby.es/zdjecia/9/5/3/2248_rd.jpg',
            price: 12.00
        },
        {
            name: 'Mitsubishi Lancer Evo (1995)',
            brand: 'Mitsubishi',
            description: 'El Mitsubishi Lancer Evolution de 1995, comúnmente conocido como Evo III, personifica la combinación perfecta entre rendimiento y practicidad. Con una estética agresiva, el Evo III destaca por su alerón trasero distintivo y tomas de aire funcionales. Equipado con tracción integral, un motor turboalimentado 4G63 y una suspensión ajustada, ofrece una experiencia de conducción emocionante y precisa. Su interior, aunque orientado al rendimiento, ofrece comodidades esenciales. Este modelo estableció las bases para la dominación de Mitsubishi en el mundo del rally, ganándose el respeto por su fiabilidad y agilidad en las competiciones. El Evo III se ha convertido en un ícono en la cultura automotriz, celebrado por su rendimiento en carretera y pista, dejando una huella perdurable en la historia de los autos deportivos compactos.',
            image: 'https://groupe-xpm.com/wp-content/uploads/2022/06/OT382-FL-T-scaled.jpg',
            price: 10.00
        },
        {
            name: 'Subaru Impreza WRX STI (1998)',
            brand: 'Subaru',
            description: 'El Subaru Impreza WRX STI de 1998, un ícono de los deportivos compactos, destaca con su diseño sedán y detalles distintivos como el alerón trasero. Con un motor EJ20 turboalimentado de 2.0 litros, reconocido por su robustez. La tracción integral y la suspensión deportiva brindan una conducción ágil y segura.Protagonista en el rally, ha ganado campeonatos, forjando una leyenda en las pistas. El interior, enfocado en el rendimiento, equilibra comodidad y funcionalidad. Este modelo es adorado rendimiento y versatilidad, consolidándose como un ícono entre los entusiastas del automovilismo.',
            image: 'https://www.sdmodelcartuning.com/wp-content/uploads/2022/05/s1807401.jpg',
            price: 10.00
        },
        {
            name: 'Mazda RX-7 (1992)',
            brand: 'Mazda',
            description: 'El Mazda RX-7 es una obra maestra de ingeniería japonesa, destacando por su diseño elegante y su impresionante rendimiento. Conocido por su distintivo motor rotativo Wankel, el RX-7 ofrece una experiencia de conducción única. Su carrocería aerodinámica, líneas fluidas y faros escamoteables añaden un toque distintivo. La combinación de ligereza, equilibrio y tracción trasera proporciona una agilidad excepcional en las curvas. El RX-7 ha dejado una huella duradera en la cultura automotriz, gracias a su participación en competiciones y su estatus como ícono de los deportivos japoneses. Su legado perdura como un ejemplo de innovación y pasión por el rendimiento, consolidándose como uno de los automóviles más admirados y respetados en el mundo del motor.',
            image: 'https://m.media-amazon.com/images/I/71ZChKEZmmL.jpg',
            price: 10.00
        },
        {
            name: 'Nissan Silvia-S15',
            brand: 'Nissan',
            description: 'El Nissan Silvia S15 es un coupé deportivo japonés que encarna la esencia del rendimiento y el estilo. Con líneas fluidas y proporcionadas, su diseño elegante captura la atención. Equipado con tracción trasera y opciones de motorización turboalimentada, el S15 ofrece una experiencia de conducción emocionante y ágil. Su interior, centrado en el conductor, combina funcionalidad y comodidad. La capacidad de personalización y el legado en el drifting lo han convertido en un ícono en la cultura automotriz. El Silvia S15 es apreciado por su equilibrio, agilidad y su capacidad para brindar emociones fuertes, consolidándose como un clásico moderno en la escena de los autos deportivos japoneses.',
            image: 'https://m.media-amazon.com/images/I/51+-VrHZVXL.jpg',
            price: 12.00
        },
        {
            name: 'Nissan 180sx',
            brand: 'Nissan',
            description: 'El Nissan 180SX, popular en la década de 1990, destaca por su diseño hatchback y agilidad en el mundo del automovilismo. Sus motores emblemáticos incluyen el CA18DET y el SR20DET, ambos turboalimentados. El CA18DET, un 1.8L de cuatro cilindros, y el SR20DET, un 2.0L, son apreciados por su respuesta y modificación fácil. Con tracción trasera, el 180SX es un favorito para el drifting, gracias a su chasis ligero y suspensión equilibrada. Su versatilidad estética y capacidad de personalización lo han convertido en un lienzo para entusiastas del tuning, consolidándose como un ícono en la escena de los autos deportivos japoneses.',
            image: 'https://otto-models.com/1761-large_default/nissan-180sx-s13.jpg',
            price: 8.00
        },
        {
            name: 'Toyota Celica',
            brand: 'Toyota',
            description: 'El Toyota Celica de 1994 es un deportivo compacto que combina elegancia y rendimiento. Su diseño coupé presenta líneas suaves y atléticas, destacando la década de los 90. Equipado con opciones de motorización como el 2.2L 5S-FE o el más potente 2.0L turbo 3S-GTE, ofrece un equilibrio entre eficiencia y desempeño emocionante.La tracción delantera y una suspensión bien ajustada brindan una experiencia de conducción ágil. Su interior ergonómico incluye características modernas para la época. Aunque no se centra en la potencia pura, el Celica de 1994 se destaca por su confiabilidad y estilo.',
            image: 'https://i.ebayimg.com/images/g/hzoAAOSw49xhnO09/s-l1200.webp',
            price: 8.00
        },
        {
            name: 'Mazda MX-5 Miata',
            brand: 'Mazda',
            description: 'El Mazda MX-5, también conocido como Miata, es un icónico descapotable que ha cautivado a los entusiastas desde su debut en 1989. Su diseño clásico de dos plazas, capó largo y cola corta encarna la esencia del roadster. El Miata ofrece la experiencia de conducción al aire libre con un toque moderno. Bajo el capó, se encuentra un motor de cuatro cilindros que destaca por su equilibrio y respuesta. La tracción trasera y una suspensión afinada contribuyen a su agilidad en las curvas. El interior minimalista se centra en la conexión entre el conductor y la carretera.',
            image: 'https://hobbiesngames.com.au/cdn/shop/products/28_064bc7d2-35a3-48f7-950d-07cda801df3f_800x.jpg',
            price: 8.00
        }
    ]

    try {
        // Utiliza Prisma para crear los autos en la base de datos
        const createdCars = await prisma.car.createMany({
            data: cars,
        });

        // Logea los autos creados
        console.log('Autos creados:', createdCars);
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir
        console.error('Error al crear los autos:', error);
    } finally {
        // Cierra la conexión con la base de datos
        await prisma.$disconnect();
    }
}

// Ejecuta la función main
main();
