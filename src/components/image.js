import React from 'react';
import styled from 'styled-components'

export default function Image(props) {
  return (
      <div>
          <h3>{props.image.date}</h3>
    <StyledImage src= {props.image.url} alt='' />
    <h2>{props.image.title}</h2>
    <StyledText>{props.image.explanation}</StyledText>
    </div>
  )
};

const StyledText = styled.p`
  display:flex;
  justify-content:space-between;
`;

const StyledImage = styled.img`
  width:100%;
}
`;