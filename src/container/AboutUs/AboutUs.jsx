import React from "react";
import styled from "styled-components";
import images from "../../constants/images";
import "./AboutUs.css";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  padding: 14rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  position: relative;

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BackImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  object-fit: cover;
  width: 28rem;
  height: 30rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & h1 {
    color: #dcca87;
    text-align: right;
    width: 100%;
    font-size: 4rem;
  }

  & p {
    color: #fff;
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: right;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Img = styled.img`
  height: 45rem;
  margin: 0 4rem;

  @media screen and (max-width: 950px) {
    margin: 8rem 4rem;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & h1 {
    color: #dcca87;
    text-align: left;
    width: 100%;
    font-size: 4rem;
  }

  & p {
    color: #fff;
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: left;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin: 1rem 0 1.6rem 0;

  & img {
    transform: rotate(180deg);
  }
`;

export const BoxR = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 1rem 0 1.6rem 0;
`;

export const Button = styled.button`
  border: none;
  padding: 1rem;
  background-color: #dcca87;
  border-radius: 0.6rem;
  margin-top: 2rem;
  width: 30%;
  display: inline-block;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const BtnBoxR = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <ImgBox>
          <BackImg src={images.G} alt="logo-img" />
        </ImgBox>

        <Left>
          <h1>About Us</h1>
          <Box>
            <img src={images.spoon} alt="spoon-logo" />
          </Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <BtnBox>
            <Button>Know More</Button>
          </BtnBox>
        </Left>

        <ImgBox>
          <Img src={images.knife}></Img>
        </ImgBox>

        <Right>
          <h1>Our History</h1>
          <BoxR>
            <img src={images.spoon} alt="spoon-logo" />
          </BoxR>
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <BtnBoxR>
            <Button>Know More</Button>
          </BtnBoxR>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
