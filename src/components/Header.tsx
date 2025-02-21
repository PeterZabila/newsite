import React, {  useEffect, useState} from 'react'

const Header: React.FC = () => {
const [background, setBackground] = useState('bg-transparent');
useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 500) {
            setBackground('bg-white');
        } else {
            setBackground('bg-transparent')
        }
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
}, [])

  return (
    <nav className={`pl-[15px] fixed top-0 left-0 w-full ${background} border-b-[1px] border-slate-100 flex flex-row`}>
        <div className='mr-[5px]'>LOGO</div>
        <ul className='flex flex-row  text-slate-300'>
            <li className='mr-[5px]'>
                Contacts
            </li>
            <li>
                About
            </li>
        </ul>
      
    </nav>
  )
}

export default Header
