const regiones = [
        {
          nombre: "Tarapacá",
          imagen: "https://mediaim.expedia.com/destination/1/b7abb369686aecf9c6d852e470c32ea3.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
          atractivosTuristicos: ["Valle de la Luna", "Catedral de San Marcos"]
        },
        {
          nombre: "Antofagasta",
          imagen: "https://antofaturismo.cl/wp-content/uploads/2021/01/Parque-BRasil-de-Antofagasta.jpg",
          atractivosTuristicos: ["Parque Nacional Pan de Azúcar", "Mina La Negra"]
        },
        {
          nombre: "Atacama",
          imagen: "https://www.fundacionaquae.org/wp-content/uploads/2016/03/atacama.jpg",
          atractivosTuristicos: ["Valle de la Luna", "Salar de Atacama"]
        },
        {
          nombre: "Coquimbo",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["La Serena", "Isla Damas"]
        },
        {
          nombre: "Valparaiso",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Cerro Alegre", "Cerro Concepción"]
        },
        {
          nombre: "O'Higgins",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Rancagua", "Cajón del Maipo"]
        },
        {
          nombre: "Maule",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Talca", "Parque Nacional Lauca"]
        },
        {
          nombre: "Ñuble",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Chillán", "Termas de Chillán"]
        },
        {
          nombre: "Biobío",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Concepción", "Parque Nacional Puyehue"]
        },
        {
          nombre: "La Araucanía",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Temuco", "Parque Nacional Conguillío"]
        },
        {
          nombre: "Los Rios",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Valdivia", "Panguipulli"]
        },
        {
          nombre: "Los Lagos",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Puerto Montt", "Parque Nacional Vicente Pérez Rosales"]
          
        },
        {
          nombre: "Los Lagos",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Puerto Montt", "Parque Nacional Vicente Pérez Rosales"]
          
        },
        {
          nombre: "Los Lagos",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Puerto Montt", "Parque Nacional Vicente Pérez Rosales"]
          
        },
        {
          nombre: "Los Lagos",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Puerto Montt", "Parque Nacional Vicente Pérez Rosales"]
          
        },
        {
          nombre: "Los Lagos",
          imagen: "https://i3.visitchile.com/img/GalleryContent/392/Coquimno.jpg",
          atractivosTuristicos: ["Puerto Montt", "Parque Nacional Vicente Pérez Rosales"]
          
        },
    ]
    
// LO MISMO PERO EN JQUERY
// $( document ).ready(function() {
    
//     console.log( "Pagina se cargo. Estamos ready!" );

//     // definir las acciones cuando el mouse est'e sobre el elemnto
//     $("area").hover(function () {
//         console.log('this -->', this);
//         console.log('$(this).index() -->', $(this).index());

//         console.log('regiones[] -->', regiones[ $(this).index() ] );

//         const regionData = regiones[ $(this).index() ];

//         $('.card__border').html(`<img src="${regionData.imagen}" class="card-img-top shadow" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Región: ${regionData.nombre}</h5>
//           <p class="card-text" id="atractivos">Atractivos: ${regionData.atractivos} </p>
//         </div>`);
//     });
    

// });



// Vanilla JavaScript equivalente
document.addEventListener('DOMContentLoaded', function() {
  console.log( "Pagina se cargo. Estamos ready!" );

  //selecciona las etiquetas html area y las guarda en constante areas
  const areas = document.querySelectorAll('area');

  areas.forEach(area => { //recorre el array creado por queryselector 
      area.addEventListener('mouseover', function() {//agrega un evento mouseover a cada elemento del array
          // console.log('this -->', this);
          // console.log('$(this).index() -->', Array.from(areas).indexOf(this));

          // console.log('regiones[] -->', regiones[ Array.from(areas).indexOf(this) ] );

          const regionData = regiones[ Array.from(areas).indexOf(this) ]; /*guarda las propiedades de las regiones
          declaradas en el primer array de objetos dentro de la constante regiones*/

          //selecciona los elementos con clase card__border y les agrega una imagen de acuerdo a la propiedad del arreglo
          document.querySelector('.card__border').innerHTML = `<img src="${regionData.imagen}" class="card-img-top shadow" alt="...">
           
          <div class="card-body">
            <h5 class="card-title">Región: ${regionData.nombre}</h5>
            <p class="card-text" id="atractivos">Atractivos: ${regionData.atractivosTuristicos} </p>
          </div>`;
      }); 
  }); 
}); 