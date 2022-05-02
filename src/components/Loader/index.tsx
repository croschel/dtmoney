import React from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/css';
import { Container } from './styles';

interface GenericLoaderProps {
  size?: 'small' | 'medium' | 'large'
}

export const GenericLoader: React.FC<GenericLoaderProps> = ({ size = 'small' }) => {
  let componentSize = 25;
  switch (size) {
    case 'medium':
      componentSize = 50;
      break;
    case 'large':
      componentSize = 100;
      break;
    default:
      break;
  }
  return (
    <Container>
      <ClipLoader css={css`padding: 0`} color="#5429cc" size={componentSize} />
    </Container>
  );
};
