import React from "react";
import styled from "styled-components";
import { images } from "../../constants";
import "./Chef.css";

export const Container = styled.div`
  background-color: #040404;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 6rem;
  gap: 3.6rem;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Top = styled.div`
  padding: 4rem 0rem;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div``;

export const TextName = styled.h1`
  color: #dcca87;
  margin: 2rem 0 1rem 0;
`;

export const Head = styled.div`
  & h1 {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  color: #dcca87;
  line-height: 2;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const ImgTake = styled.div`
  width: 2rem;
  margin-right: 0.4rem;
`;

export const Text = styled.p`
  color: #fff;
  line-height: 1.8;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 1.1rem;
`;

export const ImgSetting = styled.div`
  width: 15rem;
  margin-top: 2.6rem;
`;

const Chef = () => (
  <Container>
    <Wrapper>
      <Left>
        <ImgBox>
          <Img src={images.chef} />
        </ImgBox>
      </Left>

      <Right>
        <Top>
          <Head>
            <h1>Chef's Word</h1>
            <div>
              <img src={images.spoon} alt="spoon" />
            </div>
          </Head>

          <Title>What we believe in</Title>
        </Top>

        <Middle>
          <Box>
            <ImgTake>
              <Img src={images.quote} alt="quote" />
            </ImgTake>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </Text>
          </Box>

          <Text>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </Text>
        </Middle>

        <Bottom>
          <TextBox>
            <TextName>Kevin Luo</TextName>
            <Text>Chef & Founder</Text>
          </TextBox>

          <ImgSetting>
            <Img src={images.sign} alt="" />
          </ImgSetting>
        </Bottom>
      </Right>
    </Wrapper>
  </Container>
);

export default Chef;
