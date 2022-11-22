import React, { useState } from "react"

import Logo from "../assets/img/logo/logo-warna-nyamping.png"
import Cart from "../assets/img/icon/cart.png"
import Points from "../assets/img/icon/points.png"
import Profil from "../assets/img/icon/profil.png"

// import dari react-boostrap
import Nav from "react-bootstrap/Nav"

const NavbarComp = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Partner", link: "/partner" },
    { name: "About Us", link: "/about Us" },
    { name: "Blog", link: "/blog" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-[#F3F3F3] flex justify-between h-16 fixed w-full'>
      <div onClick={() => setOpen(!open)} className='text-[#10A3B3] text-3xl absolute right-0 top-5 cursor-pointer md:hidden'>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <ul
        className={`md:flex md:items-center gap-5 absolute items-center justify-center bg-[#F3F3F3] md:static md:z-auto z-[-1] left-0 lg:h-full lg:ml-10 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in-out ${
          open ? "top-16" : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className='text-white md:my-0 my-5'>
            <a className='text-[#10A3B3] no-underline' href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* <Link to=''>Home</Link>
        <Link to=''>Partner</Link>
        <Link to=''>About us</Link>
        <Link to=''>Blog</Link> */}
      <div className='flex'>
        <img src={Logo} width='130' height='20' alt='' />
      </div>
      <div className='flex items-center pr-10 sm:pr-20 md:pr-20'>
        <Nav.Link to=''>
          <img className='mr-4' src={Cart} width='30' height='30' alt='' />
        </Nav.Link>
        <Nav.Link to=''>
          <img className='mr-6' src={Points} width='100' alt='' />
        </Nav.Link>
        <Nav.Link to=''>
          <img src={Profil} width='30' height='30' alt='' />
        </Nav.Link>
      </div>
    </nav>
  )
}

export default NavbarComp
