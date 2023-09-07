import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #99d2e8;
  border-radius: 8px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.span`
  color: #000;
  margin-left: auto;
`;
