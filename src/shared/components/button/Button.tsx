import styled from '@emotion/styled';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

const StyledButton = styled.button`
  cursor: pointer;
  box-shadow: 0.3em 0.3em 0 #0464ac;
  transition: 300ms;
  &:hover {
    box-shadow: 0.3em -0.3em 0 #0464ac;
    transform: translateY(-5px);
  }
`;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <StyledButton
      className={classNames(
        'border-none w-max text-white bg-[#049CFC] rounded-lg px-5 py-3',
        className,
      )}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
