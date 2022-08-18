import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div`
  font-size: 3rem;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
`;

const Intro = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef();

  const handleClick = () => {
    setPlay((prevPlay) => !prevPlay);

    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <Container>
      <Video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <Overlay>
        <IconBox onClick={handleClick}>
          {play ? <BsPauseFill /> : <BsFillPlayFill />}
        </IconBox>
      </Overlay>
    </Container>
  );
};

export default Intro;
