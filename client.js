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