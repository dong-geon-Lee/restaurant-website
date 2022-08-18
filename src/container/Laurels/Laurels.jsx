import React from "react";
import styled from "styled-components";
import { data, images } from "../../constants";
import "./Laurels.css";

export const Container = styled.div`
  background-color: #0c0c0c;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
  padding: 6rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ImgBox = styled.div``;

export const Logo = styled.div`
  position: absolute;
  top: 5%;
  left: 3%;
  transform: translate(-3%, -5%);
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SubTitle = styled.h2`
  color: #fff;
`;

export const Title = styled.h1`
  color: #dcca87;
  margin-top: 0.6rem;
  margin-bottom: 3rem;
`;

export const Info = styled.div``;

export const InfoTitle = styled.h3`
  color: #dcca87;
  line-height: 2;
`;

export const InfoText = styled.p`
  color: #fff;
  line-height: 2;
`;

const Laurels = () => (
  <Container>
    <Logo>
      <Img src={images.logo} alt="logo" />
    </Logo>

    <Wrapper>
      <Left>
        <Head>
          <SubTitle>Awards & recognition</SubTitle>
          <img src={images.spoon} alt="" />
          <Title>Our Laurels</Title>
        </Head>

        <Content>
          {data.awards.map((award, index) => (
            <TextBox key={index}>
              <Img src={award.imgUrl} alt="" />
              <Info>
                <InfoTitle>{award.title}</InfoTitle>
                <InfoText>{award.subtitle}</InfoText>
              </Info>
            </TextBox>
          ))}
        </Content>
      </Left>

      <Right>
        <ImgBox>
          <Image src={images.laurels} alt="" />
        </ImgBox>
      </Right>
    </Wrapper>
  </Container>
);

export default Laurels;
