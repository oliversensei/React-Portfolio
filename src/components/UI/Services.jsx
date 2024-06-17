import React from 'react';
import { servicesData, techStack } from '../../assets/data/servicesData';

const Services = () => {
  return (
    <section id='services'>
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
            What do I help
          </h2>
          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
            I am here to assist you with any questions or tasks you have. Let me know how I can make your day easier.
          </p>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>
              
              {servicesData.map((service, index) => (
                <div key={index} className={`mt-6 sm:mt-0 sm:mb-12 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
                      <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                        <div
                          data-aos={service.aos}
                          data-aos-duration={service.aosDuration}
                          className='bg-white p-4 rounded shadow hover:bg-primaryColor cursor-pointer ease-in duration-150 group'
                        >
                          <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                            {service.title}
                          </h3>
                          <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                    -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                      <figure>
                        <img src={service.imgUrl} alt={service.title} />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12" data-aos='zoom-in' data-aos-delay='300'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center text-3xl text-primaryColor">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.imgUrl} alt={tech.name} className="w-20 h-20 mb-2"/>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;


