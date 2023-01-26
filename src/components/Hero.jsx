import React from 'react'

function Hero() {
  return (
    <section className='container px-5 -mt-[65px]  sm:mx-20 sm:px-0 sm:-mt-[70px]'>
        <div className='w-full flex flex-col-reverse items-center justify-center sm:flex-row '>
          <div className='flex flex-col -mt-[140px] sm:mt-0  space-y-6 sm:max-w-[440px] items-center justify-center sm:w-1/2 text-white text-center sm:text-left'>
            <h3 className='text-[24px] sm:text-[40px] sm:pt-24   leading-tight font-bold '>
              <span className='grad text-[36px] sm:text-[46px]'>Dive</span> Into The Depths Of <span className='grad text-[36px] sm:text-[46px]'>Virtual Reality</span> 
            </h3>
            <p className='font-normal text-base leading-5 hidden sm:block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
            <div className='flex items-center justify-center'>
              <div className='button text-sm font-bold text-black px-[69px] py-4 sm:px-11'>
                BUILD YOUR WORLD  
              </div>
              <img src="\arrow-small-right.svg" alt="" className='hidden sm:flex' />
          </div>
          </div>
          <div className='flex items-center justify-center sm:w-1/2 '>
            <img src="\HeroLogo(mobile).svg" alt=""  className='sm:hidden -z-10  w-[300px] ' />
            <img src="\HeroLogo.svg" alt=""  className='sm:flex hidden -z-10 w-[500px] ' />
          
          </div>
          
        </div>
      
    
    </section>
  )
}

export default Hero
