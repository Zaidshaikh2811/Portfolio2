import React from "react";
import styled from "styled-components";
import { links } from "../Utils/Links";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Wrapper>
        {links.map((value) => {
          return (
            <StyledNavLink
              key={value.id}
              activeClassName="active"
              className="NavLink heebo-medium"
              to={value.link}
            >
              {value.title}
            </StyledNavLink>
          );
        })}
      </Wrapper>
      <Outlet></Outlet>
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: x-large;
  color: black; /* You can set the color to your desired value */
  margin: 10px 15px; /* Adjust the margin as needed */
  .active {
    color: green;
  }
`;
const Wrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export default Header;
