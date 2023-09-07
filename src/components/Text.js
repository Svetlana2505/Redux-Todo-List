import styled from 'styled-components';

const StyledText = styled.h2`
  color: ${({ color }) => color || '#23b1e8'};
  font-size: ${({ fontSize }) => fontSize || '10px'};
`;

export const Text = props => {
  return <StyledText {...props} />;
};
