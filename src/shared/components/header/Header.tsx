import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DEVER_LOGO from '~/assets/images/dever-logo.png';
import { navItems } from '~/shared/enums/header.enum';
import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <header className='h-24 flex justify-between items-center px-8 py-4'>
      <div>
        <img className='w-10 h-10' src={DEVER_LOGO} alt='Dever Logo' />
      </div>

      <nav className='flex gap-8 text-xl'>
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            className='relative hover:text-[#049CFC] duration-150'
            to={item.href}
            onClick={() => setActive(idx)}
          >
            <AnimatePresence>
              {active === idx && (
                <motion.div
                  className='absolute h-6 w-6 bg-[#94d0f5] -z-10 rounded-full -left-2 top-0'
                  layoutId='nav-item'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
