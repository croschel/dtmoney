import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const NewTransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  red: '#e52e40',
  green: '#33cc95',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid ${({ isActive, activeColor }) => (isActive ? transparentize(0.7, colors[activeColor]) : '#d7d7d7')};
  border-radius: 0.25rem;
  background: ${({ isActive, activeColor }) => (isActive ? transparentize(0.9, colors[activeColor]) : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    border-color: ${({ activeColor }) => transparentize(0.5, colors[activeColor])};
  }

  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
