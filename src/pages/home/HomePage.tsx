import {
  CaretRightFilled,
  FacebookFilled,
  MailOutlined,
  PhoneFilled,
  PlayCircleFilled,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button, Header } from '~/shared/components';

import HERO_IMAGE from '~/assets/images/hero-0.jpeg';

const VerticalText = styled.span`
  writing-mode: vertical-lr;
`;

export const HomePage = () => {
  return (
    <>
      <section className='flex flex-col h-screen'>
        <Header />
        <div className='flex flex-grow'>
          <div className='flex w-1/2'>
            <div className='flex flex-col justify-between h-full px-10 py-4'>
              <span />
              <div className='flex flex-col text-[#049CFC] gap-6 text-xl'>
                <motion.a
                  className='cursor-pointer'
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                >
                  <FacebookFilled />
                </motion.a>
                <motion.a
                  className='cursor-pointer'
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                >
                  <MailOutlined />
                </motion.a>
                <motion.a
                  className='cursor-pointer'
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                >
                  <PhoneFilled />
                </motion.a>
              </div>
              <div className='flex flex-col items-center gap-6'>
                <div className='w-[2px] h-40 bg-[#049CFC] opacity-30' />
                <VerticalText className='uppercase text-[#049CFC]'>Scroll down</VerticalText>
              </div>
            </div>
            <div className='flex items-center justify-center flex-grow pb-20'>
              <div className='flex flex-col max-w-xl text-xl text-gray-600'>
                <span> 👋 Hi, we are</span>
                <h1 className='text-6xl font-bold text-[#049CFC] mb-2'>Dever,</h1>
                <span>
                  We are a community of students who love Information Technology and its related
                  things.
                </span>
                <span className='mb-8'>By joining Dever, we can build great things!</span>
                <Button>Find out more</Button>
              </div>
            </div>
          </div>
          <div className='relative w-1/2 overflow-hidden rounded-tl-xl'>
            <div className='absolute bg-white rounded-full'>
              <PlayCircleFilled className='text-6xl' />
            </div>
            <img className='object-cover w-full h-full' src={HERO_IMAGE} alt='Hero' />
          </div>
        </div>
      </section>
    </>
  );
};
