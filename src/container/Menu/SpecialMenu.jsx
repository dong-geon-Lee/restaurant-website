import React from "react";
import styled from "styled-components";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

export const Top = styled.div`
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  & h2 {
    color: #fff;
    margin: 1rem 0;
    letter-spacing: 1px;
  }

  & h1 {
    color: #dcca87;
    font-size: 4rem;
    margin: 2rem 0;
    letter-spacing: 1px;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 5rem 0;
  width: 100%;
  gap: 3rem;
`;

export const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
`;

export const Center = styled.div`
  width: 420px;
  margin: 5rem 0 0rem 0;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 4rem 0 0 0;

  & h2 {
    color: #dcca87;
    flex: 1;
    width: 100%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Line = styled.div`
  background-color: #fff;
  width: 100%;
  height: 1px;
  margin: 0 1rem 0 1rem;
  flex: 1;
`;

export const Text = styled.p`
  color: #fff;
  text-align: left;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  width: 100%;
  margin-top: 1rem;
`;

export const PriceText = styled.h3`
  color: #fff;
  font-size: 1.4rem;
`;

export const Bottom = styled.div``;

export const Button = styled.button`
  padding: 1rem 1.6rem;
  font-family: inherit;
  font-weight: 400;
  background-color: #dcca87;
  font-size: 1.3rem;
  border-radius: 8px;
  border: none;
`;

const SpecialMenu = () => (
  // 구조는 80% 가까이 일치시켰지만 더 디테일을 이해해서 만들어야 된다.
  <Container>
    <Wrapper>
      <Top>
        <Head>
          <h2>Menu that fits you palatte</h2>
          <img src={images.spoon} alt="" />
          <h1>Today's Special</h1>
        </Head>
      </Top>

      <Middle>
        <Left>
          <Title>Wine & Beer</Title>

          <ListGroup>
            {data.wines.map((wine, index) => (
              <List key={index}>
                <TextBox>
                  <h2>{wine.title}</h2>
                  <Line></Line>
                  <PriceText>{wine.price}</PriceText>
                </TextBox>

                <Text>{wine.tags}</Text>
              </List>
            ))}
          </ListGroup>
        </Left>

        <Center>
          <img src={images.menu} alt="" />
        </Center>

        <Right>
          <Title>Cocktails</Title>

          <ListGroup>
            {data.cocktails.map((cocktails) => (
              <List>
                <TextBox>
                  <h2>{cocktails.title}</h2>
                  <Line></Line>
                  <PriceText>{cocktails.price}</PriceText>
                </TextBox>

                <Text>{cocktails.tags}</Text>
              </List>
            ))}
          </ListGroup>
        </Right>
      </Middle>

      <Bottom>
        <Button>View more</Button>
      </Bottom>
    </Wrapper>
  </Container>
);

export default SpecialMenu;
