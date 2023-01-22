import React from 'react'

function Header() {
  return (
    <header className='container mx-5  flex justify-between sm:justify-around sm:mx-20 '>
      <div className='flex pt-6 space-x-3'>
        <img src="public\Logo.svg" alt="" width={69}/>
        <img src="public\LogoText.svg" alt="" width={46} />

      </div>
    </header>
  )
}

export default Header
