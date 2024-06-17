import React,{useRef, useEffect} from 'react'

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/* ===== LOGO =====*/}
        <div className='flex items-center gap-[10px]'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
            O
          </span>
          <div className='leading-[20px]'>
            <h2 className='text-xl text-smallTextColor font-[700]'>Oliver</h2>
            <p className='text-smallTextColor text-[14px] font-[500]'>
              personal
            </p>
          </div>
        </div>
        {/* ===== LOGO END=====*/}
        {/* ===== MENU START =====*/}
        <div className="menu" onClick={toggleMenu} ref={menuRef}>
          <ul className='flex items-center gap-10'>
            <li><a onClick={handleClick} className='text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] 
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300' href="#about">About</a></li>
            <li><a onClick={handleClick} className='text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] 
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300' href="#services">Services</a></li>
            <li><a onClick={handleClick} className='text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] 
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300' href="#portfolio">Portfolio</a></li>
            <li><a onClick={handleClick} className='text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] 
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300' href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* ===== MENU END =====*/}

        {/* ===== MENU RIGHT =====*/}
        <div className="flex items-center gap-4">
          <a 
            href="tel:09948698974" 
            className='flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 
            rounded-md max-h-10 hover:bg-smallTextColor hover:text-white hover:font-medium ease-in duration-300'
            aria-label="Let's Talk 09948698974"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-5 h-5" 
            >
              <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path>
            </svg> 
            Let's Talk
          </a>
          <span 
            onClick={toggleMenu}
            className='text-2xl text-smallTextColor md:hidden cursor-pointer'
          >
            <i className='ri-menu-line'></i>
          </span>
        </div>
        {/* ===== MENU END =====*/}

      </div>
    </div>
  </header>
  );
};

export default Header
