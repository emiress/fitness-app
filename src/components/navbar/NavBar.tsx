'use client'
import React from 'react'
import logo2 from '@/assets/logo2.png'
import { IoIosBody } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import './NavBar.css';
import Authpopup from '../authpopup/Authpopup'

const NavBar = () => {
  const [isloggedin, setIsloggedin] = React.useState<boolean>(false)
  const [showpopup, setShowpopup] = React.useState<boolean>(false)
  return (
    <>
    <nav>
      <div className='navbar-image'>
      <Image src={logo2} alt='logo'
      width={100}
      height={100}
      />
      <p>FITNESS PRO</p>
      </div>
      
      
      <Link href='/'>Home</Link>
       <Link href='/about'>About</Link>
        <Link href='/profile'><IoIosBody></IoIosBody></Link>
        {
          isloggedin ? 
          <button>Logout</button>
          :
          <button onClick={()=>{
            setShowpopup(true)
          }}>
            Login
            </button>
        }

        {
          showpopup && <Authpopup/>
        }
    </nav>
    </>
  )
}

export default NavBar