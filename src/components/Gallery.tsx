import React, { useRef, useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import Image from '../utils/types';

/* eslint no-var: */

declare var cloudinary: any | HTMLElement;

const Gallery: React.FC = () => {

  const { category } = useParams();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tag, setTag] = useState("w3");
  const [imageCollection, setImageCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // const [category, setCategory] = useState<string | null>('Wedding');

  // useEffect(() => {
  //   setCategory(localStorage.getItem("category"))
  // }, [])

  const myGallery = cloudinary.galleryWidget({
    container: containerRef?.current,
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUDNAME,
    mediaAssets: [{ tag }],
    carouselLocation: 'left'
  });
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUDNAME;

  const fetchImagesByTag = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
      );
      if (!response.ok) throw new Error("Failed to fetch images.");
      const data = await response.json();
      setImageCollection(data.resources);
    } catch (err: unknown) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchImagesByTag();
      myGallery.render()
    
  }, [])

  console.log(imageCollection)

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
      <div ref={containerRef} className='w-full p-5 mt-[40px] mb-[60px]'>HO-HO-HO</div>

      <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Images with Tag: {tag}</h2>
      {loading && <p>Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageCollection.length > 0 ? (
          imageCollection.map((img) => (
            <img
              key={img.public_id}
              src={`https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.jpg`}
              alt={img.public_id}
              className="rounded-lg shadow-md"
            />
          ))
        ) : (
          <p>No images found for tag "{tag}".</p>
        )}
      </div>
    </div>

    </div>
  )
}

export default Gallery;
