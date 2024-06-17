import React from 'react';
import CountUp from 'react-countup';
import heroData from '../../assets/data/heroData';

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.currentTarget.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({ top: location - 80, left: 0, behavior: 'smooth' });
  };

  return (
    <section className='pt-0' id='about'>
      <div className="container pt-14">
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* Hero Left Content */}
          <div className='w-full md:basis-1/2'>
            <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
              Hello, Welcome
            </h5>
            <h1
              data-aos='fade-up'
              data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
            >
              I'm {heroData.name} <br /> {heroData.jobTitle}
            </h1>
            <div
              data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay='200'
              className='flex items-center gap-6 mt-7'
            >
              <a href="#contact" onClick={handleClick}>
                <button className='bg-primaryColor text-white font-[600] text-[15px] flex items-center gap-2 hover:bg-smallTextColor easi-in duration-300 py-1 px-4 rounded-[8px]'>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg> Hire me
                </button>
              </a>
              <a href="#portfolio" onClick={handleClick} 
              className='text-smallTextColor font-[600] text-[15px] border-b border-solid border-primaryColor hover:bg-primaryColor hover:text-white 
              py-1 px-4 rounded-[8px] transition duration-300'>
                <i className="ri-briefcase-line"></i> See Portfolio 
              </a>                  
            </div>
            <p
              data-aos='fade-left'
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
            >
              <svg className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z"></path>
              </svg>
              {heroData.description}
            </p>
            <p
              data-aos='fade-left'
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
            >
              <a 
                href={`mailto:${heroData.email}`} 
                className='flex items-center gap-2 text-headingColor hover:bg-smallTextColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300'
              >
                <svg 
                  className='w-5 h-5' 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg> 
                {heroData.email}
              </a>

            </p>
            <p
              data-aos='fade-left'
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
            >
            <a 
              href={heroData.cvLink} 
              download 
              className='flex items-center gap-2 text-headingColor hover:bg-smallTextColor hover:text-white py-2 px-4 rounded-[8px] transition duration-300'
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className='w-5 h-5' 
              >
                <path d="M9 2.00318V2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L9 2.00318ZM5.82918 8H9V4.83086L5.82918 8ZM11 4V9C11 9.55228 10.5523 10 10 10H5V20H19V4H11Z"/>
              </svg>
              Download CV
            </a>

            </p>
            <div className='flex items-center gap-9 mt-14'>
              <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
              {heroData.socialLinks.map(({ href, icon, label }) => (
                <span key={href} className='group relative'>
                  <a href={href} className='text-smallTextColor text-[18px] font-[600] hover:bg-smallTextColor hover:text-white py-1 px-2 rounded-[8px] transition duration-300'>
                    <i className={icon}></i>
                  </a>
                  <span className='absolute left-1/2 transform -translate-x-1/2 -top-10 bg-primaryColor text-white text-[12px] p-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>{label}</span>
                </span>
              ))}
            </div>
          </div>
          {/* Hero Left Content End */}

          {/* Hero Image */}
          <div className='basis-1/2 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
              <img
                data-aos='zoom-out-right'
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
                src={heroData.image}
                alt={heroData.name}
              />
            </figure>
          </div>
          {/* Hero Image End */}

          {/* Hero Content Right */}
          <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
            {heroData.statistics.map((stat, index) => (
              <div key={index} className="mb-10">
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={stat.end} duration={2} suffix={stat.suffix} />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>{stat.label}</h4>
              </div>
            ))}
          </div>
          {/* Hero Content Right End */}
        </div>
      </div>
    </section>
  );
}

export default Hero;



