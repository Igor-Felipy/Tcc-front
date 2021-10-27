import styled from "styled-components"
import React from "react";

export default function TotalWrapper(props) {
    return (
        <Total>
            {props.children}
        </Total>
    )
}

const Total = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    max-width : {

    }
`;