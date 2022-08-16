import React from "react";
import "./Header.css";
import styled from "styled-components";
import images from "../../constants/images";

export const Container = styled.div`
  background-color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 4rem;

  @media screen and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  background-color: #000;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  padding: 4rem;
`;

export const Head = styled.div`
  & h2 {
    color: #fff;
    line-height: 1.6;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.5;
  color: #dcca87;
  margin: 1rem 0;
`;

export const TextBox = styled.div`
  & p {
    color: #fff;
    letter-spacing: 0.4px;
    line-height: 2;
  }

  & button {
    border: none;
    padding: 1rem;
    background-color: #dcca87;
    border-radius: 0.6rem;
    margin-top: 2rem;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  @media screen and (max-width: 1180px) {
    width: 70%;
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <Left>
        <Head>
          <h2>Chase The New Flavour</h2>
          <img src={images.spoon} alt="spoon-logo" />
        </Head>

        <Title>The key to find dining</Title>

        <TextBox>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>

          <button>Explore Menu</button>
        </TextBox>
      </Left>

      <Right>
        <ImgBox>
          <Img src={images.welcome} alt="" />
        </ImgBox>
      </Right>
    </Wrapper>
  </Container>
);

export default Header;
