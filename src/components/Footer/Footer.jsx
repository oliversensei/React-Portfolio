import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80, 
      behavior: 'smooth', 
    });
  };

  

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[16px] text-white font-semibold mb-5 md:text-[1.5rem]'>
              I specialize in web development and am passionate about creating user-friendly, innovative websites.
            </h2>
            <a
              href="#contact"
              onClick={handleClick}
              className='bg-primaryColor text-white font-semibold flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] w-[40%]'>
              <i className='ri-mail-line'></i> Hire me
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Ready to take your project to the next level? Let's discuss how I can help you achieve your goals.
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follow me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor group relative'>
                <a href="https://www.youtube.com/" className='text-gray-300 font-[500] text-[18px] hover:text-white'>
                  <i className='ri-youtube-line'></i>
                </a>
                <span className='absolute left-1/2 transform -translate-x-1/2 -top-10 bg-smallTextColor text-white text-[12px] p-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>Youtube</span>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor group relative'>
                <a href="https://github.com/JohnOliver1212/JohnOliver1212" className='text-gray-300 font-[500] text-[18px] hover:text-white'>
                  <i className='ri-github-fill'></i>
                </a>
                <span className='absolute left-1/2 transform -translate-x-1/2 -top-10 bg-smallTextColor text-white text-[12px] p-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>Github</span>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor group relative'>
                <a href="https://www.facebook.com/Martillosjohn" className='text-gray-300 font-[500] text-[18px] hover:text-white'>
                  <i className='ri-facebook-line'></i>
                </a>
                <span className='absolute left-1/2 transform -translate-x-1/2 -top-10 bg-smallTextColor text-white text-[12px] p-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>Facebook</span>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-primaryColor group relative'>
                <a href="https://www.instagram.com/john_0liverrr/" className='text-gray-300 font-[500] text-[18px] hover:text-white'>
                  <i className='ri-instagram-line'></i>
                </a>
                <span className='absolute left-1/2 transform -translate-x-1/2 -top-10 bg-smallTextColor text-white text-[12px] p-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>Instagram</span>
              </span>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <ul className='flex flex-wrap justify-center sm:justify-center gap-4 sm:gap-10'>
            <li><a className='text-gray-400 font-[600] hover:bg-primaryColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300' href="#about" onClick={handleClick}>About</a></li>
            <li><a className='text-gray-400 font-[600] hover:bg-primaryColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300' href="#services" onClick={handleClick}>Services</a></li>
            <li><a className='text-gray-400 font-[600] hover:bg-primaryColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300' href="#portfolio" onClick={handleClick}>Portfolio</a></li>
            <li><a className='text-gray-400 font-[600] hover:bg-primaryColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300' href="#contact" onClick={handleClick}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='bg-[#1b1e29] py-5 mt-14'>
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block ">
              <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>O</span>
                <div className="leading-[20px]">
                  <h2 className='text-gray-200 font-[500] text-[18px]'>Oliver</h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>Personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>
              <i className="ri-copyright-line"></i> Copyright {year} developed by Oliver - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
