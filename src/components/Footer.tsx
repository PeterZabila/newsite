import React from 'react';
import logoBlack from '../assets/logoBlack.png'

const categories: string[] = ["About", "Contacts", "Wedding", "LoveStory", "Portrait"]

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col pt-[88px] pr-[15px] pb-[29px] pl-[15px] bg-black text-white'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-b-[1px] border-slate-400 border-opacity-80 mr-[20px] mb-[20px]'>
    
    <div>
        <img src={logoBlack} alt="logo footer" className='w-[120px] h-[60px] mb-[50px] hover:scale-110 transition-all duration-500'/>
        <p className='w-[300px] mb-[20px]'>We are grateful for taking your time visiting our website, where you can choose the service you're lookig for. We are always glad to meet your demands at the highest level of service standarts.</p>
    </div>
    <div>
        <ul>
            {categories.map((category: string) => <li key={category} className='mb-[15px] text-xl htransition-transform duration-300 transform hover:scale-110'>{category}</li>)}
        </ul>
    </div>

</div>
    
      <h3 className='ml-auto mr-auto'>&#169; Petro Zabila Photography All rights reserved 2025</h3>
    
    </footer>
  )
}

export default Footer
