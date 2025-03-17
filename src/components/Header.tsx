import React, {  useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import { NavLink, NavLinkProps } from 'react-router-dom';

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
    <nav className={`p-[15px] fixed top-0 left-0 w-full ${background} border-b-[1px] border-slate-200 border-opacity-20 flex flex-row z-50`}>
       <NavLink to='/'><img src={logo} alt="logo" className='w-[80px] h-[30px] mr-[50px]' /></NavLink>
        <ul className='flex flex-row  text-slate-300'>
            
            <li className='mr-[5px]'>
                <NavLink to='/contact'>Contacts</NavLink>
                
            </li>
            <li>
            <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
      
    </nav>
  )
}

export default Header
