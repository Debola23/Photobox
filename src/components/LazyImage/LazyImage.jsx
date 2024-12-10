import React, { useState } from 'react';
import './LazyImage.css'

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
    />
  );
};

export default LazyImage;