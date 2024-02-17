import React from "react";
import styled from "styled-components";
import { links } from "../Utils/Links";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="link">
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
        </div>
        <div className="hamburger">
          {/* <GiHamburgerMenu /> */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
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
  margin-top: 10px;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: end;
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 700px) {
    .link {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
export default Header;
