import React from 'react'

function Header() {
  return (
    <header className='container mx-5   sm:mx-20 '>
      <div className='flex justify-between sm:hidden'>
        <div className='flex pt-6 space-x-3'>
          <img src="public\Logo.svg" alt="" width={69}/>
          <img src="public\LogoText.svg" alt="" width={46} />
        </div>
      </div>

      <div className='hidden sm:flex sm:justify-around'>
        <div className='flex pt-6 space-x-4'>
          <img src="public\Logo.svg" alt="" width={102}/>
          <img src="public\LogoText.svg" alt="" width={76} />
        </div>
        <div className='flex space-x-10 justify-center items-center text-white text-xs'>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">TECHNOLOGIES</a>
          <a href="#">HOW TO</a>
        </div>
        <div className='flex space-x-8 justify-center items-center'>
          <div className='px-9 py-3 bg-transparent text-white rounded-full border-2 text-xs'>
            Contact Us
          </div>
          <div className='button'>
            JOIN HYDRA
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
