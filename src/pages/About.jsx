import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <section>
      <Newsletter />
      <div className='bg-gray-100'>
        <div className='container py-10 '>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='text-gray-800  text-lg font-bold '>
            About Us
          </motion.h1>
          <div className=' block md:grid  grid-cols-3 gap-10 '>
            <div className='col-span-2'>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='text-[14px] py-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores sed possimus illum facilis tempore recusandae voluptatum
                qui omnis explicabo amet vel enim, culpa repudiandae aspernatur,
                minus, sequi deserunt. culpa repudiandae aspernatur, minus,
                sequi deserunt. pariatur rerum! Quis nam eveniet ullam at rerum
                sit, impedit dolorem
              </motion.p>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className='bg-gray-600 text-white p-4 rounded-xl '>
                <p className='text-[14px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  sunt ipsam deleniti nihil culpa provident quo minus ut, ea
                  quisquam quas possimus autem quos natus molestias quod libero
                  pariatur rerum! Quis nam eveniet ullam at rerum sit, impedit
                  doloremque magni assumenda quas inventore porro quasi ipsa
                  suscipit recusandae dicta eligendi? pariatur rerum! Quis nam
                  eveniet ullam at rerum sit, impedit doloremque magni assumenda
                  quas inventore porro quasi ipsa suscipit recusandae dicta
                  eligendi?
                </p>
              </motion.div>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='bg-gray-600 text-white p-4 rounded-xl  md:col-span-1 mt-8 md:mt-auto'>
              <h1 className='font-bold text-xl pb-2'>What We Do</h1>
              <p className='text-[14px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ratione repudiandae recusandae autem eligendi repellat
                voluptates reiciendis odit sequi asperiores perspiciatis nihil,
                consectetur ullam atque, quae corporis suscipit, dolorem aut
                tempore! Libero commodi inventore deleniti?
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
