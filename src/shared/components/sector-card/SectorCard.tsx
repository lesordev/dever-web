import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  title: string;
  description: string;
}

const StyledCard = styled(motion.div)`
  cursor: pointer;
  border-radius: 1.5em;
  box-shadow: 0px 20px 80px 0px rgb(4 156 252 / 20%);
  padding: 2em 1.5em;
  width: 320px;
  height: 420px;
`;

export const SectorCard = ({ className, title, description }: Props) => {
  return (
    <StyledCard className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className='flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-slate-400'>
        image
      </div>
      <h2 className='text-2xl font-bold text-[#049CFC]'>{title}</h2>
      <p>{description}</p>
    </StyledCard>
  );
};
