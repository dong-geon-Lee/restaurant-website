import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 8rem;
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

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const Menu = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  /* svg가 요소 중간에 떠있다. 왜 그럴까? */
  & svg {
    margin: 0rem;
    font-size: 2rem;
    display: none;
    z-index: 3;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      display: block;
    }
  }

  & .close {
    position: absolute;
    top: 3%;
    right: 4%;
  }

  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Line = styled.div`
  margin: 0 1.4rem;
  height: 2rem;
  width: 1px;
  background-color: #fff;
  opacity: 0.5;
`;

export const Overlay = styled.section`
  display: none;

  @media screen and (max-width: 950px) {
    display: flex;
  }
`;

export const OverlayList = styled.ul`
  display: none;
  list-style: none;

  @media screen and (max-width: 950px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 3;
    /* 간단하게 애니메이션 컴포넌트 만들고 넣어주기만 하면 된다. */
    animation: ${Modal} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    & li {
      margin: 1rem 0;
      color: #dcca87;
      font-weight: 700;
      font-size: 1.6rem;
      transition: 0.5s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const Modal = keyframes`
    0% {
      transform: translateX(-25%);
    }

    100% {
      transform: translateX(0);
    }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
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
          <Right>
            <p>Log in / Registeration</p>
            <Line></Line>
            <p>Book Table</p>
          </Right>

          <Overlay>
            {!toggle && <GiHamburgerMenu onClick={() => setToggle(true)} />}

            <OverlayList toggle={toggle} className="slide-right">
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

              {toggle && (
                <MdOutlineRestaurantMenu
                  onClick={() => setToggle(false)}
                  className="close"
                />
              )}
            </OverlayList>
          </Overlay>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
