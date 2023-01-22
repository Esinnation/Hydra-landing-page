import React from 'react'

function Header() {
  return (
    <header className='container px-5  sm:px-20 '>
      <div className='flex justify-between sm:hidden'>
        <div className='flex pt-6 space-x-3'>
          <img src="\Logo.svg" alt="" width={69}/>
          <img src="\LogoText.svg" alt="" width={46} />
        </div>
      </div>

      <div className='hidden sm:flex sm:justify-around'>
        <div className='flex pt-6 space-x-4'>
          <img src="\Logo.svg" alt="" width={102}/>
          <img src="\LogoText.svg" alt="" width={76} />
        </div>
        <div className='flex space-x-10 justify-center items-center text-white text-xs font-bold'>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">TECHNOLOGIES</a>
          <a href="#">HOW TO</a>
        </div>
        <div className='flex space-x-8 justify-center items-center font-bold'>
          <div className='px-9 py-3 bg-transparent text-white rounded-full border-2 text-xs'>
            Contact Us
          </div>
          <div className='button py-3 px-9 '>
            JOIN HYDRA
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
