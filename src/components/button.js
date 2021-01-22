import React  from 'react';
import styled from "styled-components"

export default function Button(props) {
    return(
        <div>
    <StyledButton onClick={props.getDataBtn}>Get picture of the day</StyledButton>
    </div>
    )
};

const StyledButton = styled.button`
&:hover {
    color: ${(pr) => pr.theme.buttonColor};
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;   
}
transition: all 0.5s ease-in-out;
`;
