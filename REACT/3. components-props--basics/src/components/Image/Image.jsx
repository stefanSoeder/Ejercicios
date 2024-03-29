const Image = ({imageProps}) => {
  const {
    source="https://res.cloudinary.com/dhu1it9x8/image/upload/v1706558125/libros-de-texto_nuzhc0.png",
    alterna= "libros",
    classi = "logo"
  } = imageProps
    return (
        <img
        src= {source}
        alt= {alterna}
        className= {classi}
      />
    );
  };
  
  export default Image;