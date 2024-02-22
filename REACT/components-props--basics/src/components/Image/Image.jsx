const Image = ({imageProps}) => {
  return (
      <img src={imageProps.src} alt={imageProps.alt} className={imageProps.className}/>
  );
};

export default Image;