import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import Image from '../utils/types';

const Gallery: React.FC = () => {

  const { category } = useParams();

    const images: Image[] = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];

  return (
    <div className='py-[70px] z-0'>

      <h2>{category}</h2>
      
      <ImageGallery items={images}/>
    </div>
  )
}

export default Gallery;
