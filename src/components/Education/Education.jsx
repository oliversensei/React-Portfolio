import React from 'react';
import { educationData, experienceData } from '../../assets/data/educationData';

const Card = ({ title, description, secondDescription, logoSrc }) => {
  return (
    <div className='bg-white p-4 rounded shadow cursor-pointer ease-in duration-150 group'>
      <div className="flex items-center mb-3">
        <img src={logoSrc} alt="Logo" className="w-8 h-8 mr-2" />
        <h3 className='text-primaryColor font-[700] mb-0 group-hover:font-[600] text-xl'>
          {title}
        </h3>
      </div>
      <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7'>
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </p>
      <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7' dangerouslySetInnerHTML={{ __html: secondDescription }} />
    </div>
  );
};

const Education = () => {
  return (
    <section className='container mt-10'>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div data-aos='fade-right' data-aos-delay='300' data-aos-duration='700'>
          <h2 className='text-headingColor font-bold text-2xl mb-4'>Education</h2>
          <div className='grid grid-cols-1 gap-4'>
            {educationData.map((edu, index) => (
              <Card
                key={index}
                title={edu.title}
                description={edu.description}
                secondDescription={edu.secondDescription}
                logoSrc={edu.logoSrc}
              />
            ))}
          </div>
        </div>
        <div data-aos='fade-left' data-aos-delay='300' data-aos-duration='700'>
          <h2 className='text-headingColor font-bold text-2xl mb-4'>Experience</h2>
          <div className='grid grid-cols-1 gap-4'>
            {experienceData.map((exp, index) => (
              <Card
                key={index}
                title={exp.title}
                description={exp.description}
                secondDescription={exp.secondDescription}
                logoSrc={exp.logoSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;