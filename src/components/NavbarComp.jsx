import React from "react"
import { Nav } from "react-bootstrap"

import Logo from "../assets/img/logo/logo-warna-nyamping.png"
import Cart from "../assets/img/icon/cart.png"
import Points from "../assets/img/icon/points.png"
import Profil from "../assets/img/icon/profil.png"

const NavbarComp = () => {
  return (
    <div className='bg-[#F3F3F3] flex justify-between h-16'>
      <div className='text-[#10A3B3] flex items-center gap-4 font-medium pl-10'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#link'>Partner</Nav.Link>
        <Nav.Link href='#link'>About us</Nav.Link>
        <Nav.Link href='#link'>Blog</Nav.Link>
      </div>
      <div className='flex'>
        <img src={Logo} width='150' height='20' alt='' />
      </div>
      <div className='flex items-center pr-10'>
        <Nav.Link href='#link'>
          <img className='mr-4' src={Cart} width='30' height='30' alt='' />
        </Nav.Link>
        <Nav.Link href='#link'>
          <img className='mr-6' src={Points} width='100' alt='' />
        </Nav.Link>
        <Nav.Link href='#link'>
          <img src={Profil} width='30' height='30' alt='' />
        </Nav.Link>
      </div>
    </div>
  )
}

export default NavbarComp
