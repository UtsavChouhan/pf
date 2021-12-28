import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const HeaderContainer = styled.div`
background-image: linear-gradient(#97CAEF, #97CAEF, #EBEEFC);
// background-color: white;
min-height: 100px;
`;
const Title = styled.p`
display: inline;
font-size: 28px;
left: 64px;
position: absolute;
font-family: "Lucida Console", monospace;
color: #5F6366;
`;

export const Header = () => {

  return(
    <>
      <HeaderContainer >
        <img src="/logo.png" width={80} />
        <Title>PathFinder</Title>

      </HeaderContainer>
    </>
  )
}