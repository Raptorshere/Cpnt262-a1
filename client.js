const imageArray = [
  {
    src: "images/image-2.jpg",
    alt: "description"
  }
];

imageArray.map((image) => {
  return <img src={image.src}
  alt={image.alt} />;
});

'HI ${NAME}'

// SIDENAV
$(document).ready(function(){
  $('.sidenav').sidenav();


// SWAP ICON ON CLICK
// Source: https://stackoverflow.com/a/34254979/751570
$('.dark-toggle').on('click',function(){
  if ($(this).find('i').text() == 'brightness_4'){
      $(this).find('i').text('brightness_high');
  } else {
      $(this).find('i').text('brightness_4');
  }
});


});