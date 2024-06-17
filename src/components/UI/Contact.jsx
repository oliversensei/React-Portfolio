import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const validate = () => {
    const errors = {};
    const namePattern = /^[A-Z][A-Za-z\s]*$/;
    const emailPattern = /^.*@(gmail\.com|yahoo\.com|kld\.edu\.ph)$/;
    const numberPattern = /^\d{11}$/;

    if (!formData.user_name) {
      errors.user_name = 'Name is required';
    } else if (!namePattern.test(formData.user_name)) {
      errors.user_name = 'Name must start with a capital letter and contain only letters and spaces';
    }

    if (!formData.user_email) {
      errors.user_email = 'Email is required';
    } else if (!emailPattern.test(formData.user_email)) {
      errors.user_email = 'Email domain must be @gmail.com, @yahoo.com, or @kld.edu.ph';
    }

    if (!formData.user_number) {
      errors.user_number = 'Number is required';
    } else if (!numberPattern.test(formData.user_number)) {
      errors.user_number = 'Number must be 11 digits';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    } else if (formData.message.length > 200) {
      errors.message = 'Message must be 200 characters or less';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    emailjs
      .sendForm('service_tin5i8m', 'template_zk2c0ok', form.current, {
        publicKey: '77j1tgqTHSqLAUVeS',
      })
      .then(
        () => {
          setStatus('success');
          setTimeout(() => setStatus(''), 5000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('failed');
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id='contact' className='pb-16'>
      <div className='container'>
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
          Get in touch
        </h2>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe
              title='google-maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7730.912305874296!2d120.94556264018583!3d14.342993094453467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d45cf9eb7aa7%3A0x220ab978dcd18b27!2sArea%20G%2C%20Dasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1718305783862!5m2!1sen!2sph'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='border-0 w-full h-full '
            ></iframe>
          </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
            {status === 'submitting' && (
              <div className='mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded font-600'>
                <p>Submitting...</p>
              </div>
            )}
            {status === 'success' && (
              <div className='mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded font-600'>
                <p>Success!</p>
              </div>
            )}
            {status === 'failed' && (
              <div className='mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded font-600'>
                <p>Failed to send message. Please try again.</p>
              </div>
            )}
            <br />
              <div className='mb-5 relative'>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Enter your name'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {errors.user_name && <p className='text-red-500 py-1 '>{errors.user_name}</p>}
              </div>
              <div className='mb-5 relative'>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Enter your email'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {errors.user_email && <p className='text-red-500 py-1'>{errors.user_email}</p>}
              </div>
              <div className='mb-5 relative'>
                <input
                  type='number'
                  name='user_number'
                  placeholder='Enter your number'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  value={formData.user_number}
                  onChange={handleChange}
                />
                {errors.user_number && <p className='text-red-500 py-1'>{errors.user_number}</p>}
              </div>
              <div className='mb-5 relative'>
                <textarea
                  rows={3}
                  name='message'
                  placeholder='Enter your message'
                  className='w-full p-3 focus:outline-none rounded-[5px] border'
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className='text-red-500'>{errors.message}</p>}
              </div>
              <button
                type='submit'
                value='Send'
                className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

  