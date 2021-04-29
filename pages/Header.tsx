import * as React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Side>
        <Logo>MS.comMS.comM</Logo>
      </Side>
      <Nav>
        <NavLink>Borp 1</NavLink>
        <NavLink>Borp 1</NavLink>
        <NavLink>Borp 1</NavLink>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  padding: 15px 300px;
  display: flex;
  align-items: baseline;
`;

const Side = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  color: purple;
  font-size: 24px;
`;

const Nav = styled.div`
  display: flex;
  gap: 48px;
`;

const NavLink = styled.div``;
