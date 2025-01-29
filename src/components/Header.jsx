import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section className='bg-img flex justify-items-center flex-col'>
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='text-center text-2xl sm:text-3xl md:text-5xl  font-bold text-white pt-24 '>
        Affordable Professional Websites
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.4 }}
        className='py-4 text-white text-center  text-lg md:w-[750px] w-96 mx-auto'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
        accusantium tempore impedit quae, culpa, commodi vero sint quod modi at
        animi numquam soluta? Minus a facere, tempore repellat, sequi fugit
        voluptatem modi veniam unde vero dolores? Aut delectus distinctio eaque.
      </motion.p>
    </section>
  );
};

export default Header;
