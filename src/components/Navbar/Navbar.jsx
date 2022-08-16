import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
`;

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 10%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Nav = styled.ul`
  display: flex;

  & li {
    list-style: none;
    margin: 0 1rem;
  }

  & a {
    color: #fff;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Menu = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  & div {
    margin: 0 1.4rem;
    height: 2rem;
    width: 1px;
    background-color: #fff;
    opacity: 0.5;
  }

  /* svg가 요소 중간에 떠있다. 왜 그럴까? */
  & svg {
    margin: 0 2rem;
    font-size: 2rem;
    display: none;
  }

  & section {
    display: none;
  }
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      {/* 로고 사이드 */}
      <ImgBox>
        <Image src={images.gericht} alt="" className="logo" />
      </ImgBox>

      {/* 네비게이션 사이드 */}
      <Nav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Landing</a>
        </li>
      </Nav>

      {/* 로그인 & 회원가입 사드 */}
      <Menu>
        <p>Log in / Registeration</p>
        <div></div>
        <p>Book Table</p>
        <section>
          <GiHamburgerMenu />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Landing</a>
            </li>
          </ul>
        </section>
      </Menu>
    </Wrapper>
  </Container>
);

export default Navbar;
