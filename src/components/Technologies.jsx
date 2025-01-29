import { motion } from 'framer-motion';
import technologies from '../utils';

const Technologies = () => {
  return (
    <section className='bg-black pb-2'>
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='text-white text-2xl md:text-3xl lg:text-4xl text-center py-8'>
        Technologies
      </motion.h1>
      <div className='container block md:flex justify-around items-center  '>
        {technologies.map((tech) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            key={tech}
            className='bg-white shadow-lg shadow-white rounded-xl text-center flex flex-col justify-items-center w-full md:w-[30%] my-8'>
            <img
              src={tech.img}
              alt={tech.title}
              className='py-5 mx-auto w-[120px] '
            />
            <h2 className='text-[18px] font-bold text-gray-900 '>
              {tech.title}
            </h2>
            <p className='text-[15px] text-gray-900 py-5 px-4'>{tech.desc}</p>
            <button className='text-white bg-red-500 py-2 px-5 text-center rounded-xl w-40 mx-auto mb-4 hover:bg-gray-600 transition-all duration-500 cursor-pointer'>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
