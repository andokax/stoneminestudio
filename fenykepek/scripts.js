console.log("JavaScript is working on the photos site!");

$(function(){

    let currentPhoto = 0;
     let imagesData = [
         {
             photo: '/fenykepek/fenykep01.jpg',
             title: 'Nyugodt belváros',
             description: 'Lorem ipsum dolor sit, amet consectetur adipisicing molestiae hic sequi excepturi deleniti accusamus eveniet consectetur libero expedita repudiandae temporibus!'
         },
         {
             photo: '/fenykepek/fenykep02.jpg',
             title: 'Múltidéző autóbusz',
             description: 'Lorem ipsum dolor sit amet fugit, minima temporibus autem maiores reiciendis sequi perferendis optio numquam, laboriosam sed corporis atque sapiente odit expedita.'
         },
         {
             photo: '/fenykepek/fenykep03.jpg',
             title: 'Borfesztivál tavasszal',
             description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
         },
         {
            photo: '/fenykepek/fenykep04.jpg',
            title: 'Fertő-tavi bringázás',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep05.jpg',
            title: 'Siófoki víztorony tetején',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep06.jpg',
            title: 'Carlos, a kiskutya',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep07.jpg',
            title: 'Húsvéti pálinka és tojás',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep08.jpg',
            title: 'Zeneszámok között',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep09.jpg',
            title: 'Indusztriális hangulat',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
        {
            photo: '/fenykepek/fenykep10.jpg',
            title: 'Megpihen a Nyugati',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },

     ];
 
     let loadImage = (ind) => {
         $('#photo').attr('src', imagesData[ind].photo);
         $('#photo-title').text(imagesData[ind].title);
         $('#photo-description').text(imagesData[ind].description);
     }
 
     //első kép betöltése az img elembe
     loadImage(currentPhoto);    
 
     //balra mutató nyíl
     $('#la').click(() =>{
         if(currentPhoto>0){
            currentPhoto--;
         }        
         loadImage(currentPhoto);
     });
     //jobbra mutató nyíl
     $('#ra').click(() =>{
         if(currentPhoto<imagesData.length-1){
             currentPhoto++;
         }        
         loadImage(currentPhoto);
     });
 
     console.log(imagesData);
     //thumbnail-ok legenerálása
     imagesData.forEach((item, index) => {
         console.log(item);
         $('#thumbnails').append(`<div class="thumbnail"  data-number="${index}">
                                    
                                     <img src="${item.photo}" data-number="${index}" alt="">
                                 </div>`);
  $('.thumbnail').click((event) => {            
             let ind = parseInt($(event.target).attr('data-number'));            
             loadImage(ind);
           });
     }); 
 
 
 
   }); 
  