import React from 'react';
import catalogue from '../constants';

const Catalogue: React.FC = () => {
  return (
    <div className='w-full p-[15] ml-auto mr-auto'>
    
            <div>
            
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                <img src="https://vogueadria.com/wp-content/uploads/2025/01/winter-issue2.png.webp" loading="lazy" data-method="imageLazyLoad" className="w-full h-auto" alt="two"/>
                
                <img src="https://vogueadria.com/wp-content/uploads/2025/02/somatske-vjezbe-neurofit-rutina-vertical.jpg.webp" loading="lazy" data-method="imageLazyLoad" className="w-full h-auto" alt="one"/>

                <img src="https://vogueadria.com/wp-content/uploads/2025/02/IMG_2093_11zon-scaled.jpg.webp" loading="lazy" data-method="imageLazyLoad" className="w-full h-auto" alt="three"/>

                <img src="https://vogueadria.com/wp-content/uploads/2025/01/Bojana-Nikitovic.jpg.webp" loading="lazy" data-method="imageLazyLoad" className="w-full h-auto" alt="three"/>
            </div>

                
            </div>
    </div>
  )
}

export default Catalogue
