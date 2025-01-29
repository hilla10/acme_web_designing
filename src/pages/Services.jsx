import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';
import { services } from '../utils';

const Services = () => {
  return (
    <section>
      <Newsletter />
      <div className='container'>
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='text-gray-900 text-2xl font-bold py-4'>
          Services
        </motion.h1>
        <div className='grid md:grid-cols-3  justify-items-center gap-5 '>
          <div className='md:col-span-2'>
            {services.map((service) => (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2 }}
                key={service.id}
                className='bg-red-500 text-white p-4 mb-2'>
                <h1 className='font-bold text-lg'>{service.title}</h1>
                <p className='text-[15px]'>{service.desc}</p>
                <h5 className='text-white py-6 text-center'>
                  {' '}
                  Pricing: {service.price}
                </h5>
              </motion.div>
            ))}
          </div>
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className='md:col-span-1 bg-gray-600 text-white p-5 h-[400px] rounded-md w-full'>
            <div className='flex flex-col py-2'>
              <label className='mb-2'>Name</label>
              <input
                type='text'
                placeholder='Name'
                className='bg-white text-gray-500 p-2 rounded-lg'
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className='mb-2'>Email</label>
              <input
                type='text'
                placeholder='Email Address'
                className='bg-white text-gray-500 p-2 rounded-lg'
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className='mb-2'>Message</label>
              <textarea className='h-[100px] bg-white text-gray-500 p-2 rounded-lg'></textarea>
            </div>
            <button
              type='submit'
              className='bg-red-500 text-white rounded-md px-5 py-1.5 my-2 ml-4'>
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Services;
