import React from 'react'

import hero from '../assets/hero.jpg'

const Hero: React.FC = () => {
  return (
    <div className='w-full bg-slate-500 h-[300]'>
      {/* <img src={hero} alt="hero image" className='w-full' /> */}
      <img src="https://vogueadria.com/wp-content/uploads/2025/01/2560x1090-slider.jpg.webp" className="w-full h-full" alt="hero image"></img>
    </div>
  )
}

export default Hero
