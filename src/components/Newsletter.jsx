import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className='bg-gray-600'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className='container  md:flex  justify-between items-center w-full text-center'>
        <h1 className='text-white md:text-2xl text-3xl font-bold py-4 pt-8'>
          Subscribe To Our Newsletter
        </h1>
        <form className='py-10 block sm:flex pt-10 '>
          <input
            type='email'
            placeholder='Enter your Email'
            className='bg-transparent text-white border-2 border-cyan-700 py-2 px-4 rounded-xl outline-none mr-7 w-full sm:w-auto'
          />
          <button
            className='text-white rounded-xl py-2  text-center bg-red-500 cursor-pointer hover:bg-white hover:text-red-500 transition-all duration-500 ease-in mt-4 sm:mt-0 w-full sm:w-auto sm:px-10'
            type='submit'>
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
