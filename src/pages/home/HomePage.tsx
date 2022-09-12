import { FacebookFilled, MailOutlined, PhoneFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button, Header, SectorCard } from '~/shared/components';

import HERO_IMAGE from '~/assets/images/hero-0.jpeg';

const VerticalText = styled.span`
  writing-mode: vertical-lr;
`;

const StyledShadow = styled.div`
  box-shadow: 0 0 40px #fc0404;
  cursor: pointer;
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
                <span className='mb-16'>By joining Dever, we can build great things!</span>
                <Button>Find out more</Button>
              </div>
            </div>
          </div>
          <div className='relative w-1/2'>
            <a
              href='https://www.youtube.com/watch?v=jNIP1hcG2K4'
              target='_blank'
              className='absolute p-5 bg-white rounded-full -left-12 top-1/4'
              rel='noreferrer'
            >
              <StyledShadow className='box-content w-12 h-12 bg-white border-8 rounded-full'>
                <svg
                  className='text-5xl text-[#FC0404]'
                  viewBox='64 64 896 896'
                  focusable='false'
                  data-icon='play-circle'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z'></path>
                </svg>
              </StyledShadow>
            </a>
            <img className='object-cover w-full h-full rounded-tl-xl' src={HERO_IMAGE} alt='Hero' />
          </div>
        </div>
      </section>

      <section className='flex py-16'>
        <div className='flex justify-center w-1/2'>
          <div className='grid grid-cols-2 pb-8 gap-7 w-max'>
            <SectorCard
              title='Training'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti illo tempore debitis, architecto possimus praesentium dicta numquam, soluta ad quas quaerat neque repudiandae, perferendis amet doloremque'
            />
            <SectorCard
              className='translate-y-10'
              title='Sharing'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti illo tempore debitis, architecto possimus praesentium dicta numquam, soluta ad quas quaerat neque repudiandae, perferendis amet doloremque'
            />
            <SectorCard
              title='Community'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti illo tempore debitis, architecto possimus praesentium dicta numquam, soluta ad quas quaerat neque repudiandae, perferendis amet doloremque'
            />
            <SectorCard
              className='translate-y-10'
              title='Project'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti illo tempore debitis, architecto possimus praesentium dicta numquam, soluta ad quas quaerat neque repudiandae, perferendis amet doloremque'
            />
          </div>
        </div>

        <div className='flex flex-col justify-center w-1/2 px-4 pb-32 text-xl text-gray-500'>
          <span className='tracking-widest uppercase'>Our Activities</span>
          <h2 className='text-5xl font-bold'>
            Stop <span className='text-[#049CFC]'>dreaming</span>, Let&apos;t{' '}
            <span className='text-[#049CFC]'>building</span>.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, rerum optio! Eaque
            libero sit cupiditate rem aperiam similique eum assumenda temporibus voluptatem ullam,
            quaerat soluta consectetur maiores alias! Rerum, dignissimos!
          </p>
        </div>
      </section>

      <section className='flex py-10 bg-[#049dfc17]'>
        <div className='flex flex-col items-center justify-center w-1/2 px-4 text-xl text-gray-500'>
          <div>
            <span className='tracking-widest uppercase'>About us</span>
            <h2 className='text-5xl font-bold'>
              How passionate
              <div className='text-[#049CFC]'>we are?</div>
            </h2>
            <p className='max-w-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, rerum optio! Eaque
              libero sit cupiditate rem aperiam similique eum assumenda temporibus voluptatem ullam,
              quaerat soluta consectetur maiores alias! Rerum, dignissimos!
            </p>
          </div>
        </div>

        <div className='w-1/2 p-8'>
          <div>
            <img className='object-cover max-w-2xl aspect-[4/3]' src={HERO_IMAGE} alt='Hero' />
          </div>
        </div>
      </section>
    </>
  );
};
