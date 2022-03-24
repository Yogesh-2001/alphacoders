import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TeamCard = () => {
  return (
    <Container className="my-5 col-11 mx-auto" id="stagg">
      <h1 className='text-center mb-5' style={{ borderBottom: '3px solid red', width: 'fit-content', margin: 'auto' }}>Top Teams</h1>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj" alt="" />
          </Link>
          <Description>
            <h3>Mumbai Indians</h3>
            <h5>Team Wins : 4</h5>
            <h5>Team Losses : 2</h5>
            <h5>Ranking : 3</h5>
          </Description>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://static.toiimg.com/thumb/msid-90206708,width-1070,height-580,imgsize-29816,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="" />
          </Link>
          <Description>
            <h3>Delhi Capitals</h3>
            <h5>Team Wins : 4</h5>
            <h5>Team Losses : 2</h5>
            <h5>Ranking : 3</h5>
          </Description>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://english.sakshi.com/sites/default/files/styles/canvas/public/article_images/2022/03/16/csklogo1-1647411289.jpg?itok=_c195PaH" alt="" />
          </Link>
          <Description>
            <h3>CSK</h3>
            <h5>Team Wins : 4</h5>
            <h5>Team Losses : 2</h5>
            <h5>Ranking : 3</h5>
          </Description>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg" alt="" />
          </Link>
          <Description>
            <h3>RCB</h3>
            <h5>Team Wins : 4</h5>
            <h5>Team Losses : 2</h5>
            <h5>Ranking : 3</h5>
          </Description>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 59%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    width: 100%;
    height: 100%;
    inset: 0px;
    display: block;
    object-fit: cover;
    opacity: 0.4;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: -1;
    top: 0px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Description = styled.div`
  color: #46244c;
  padding: 0px 16px;
  line-height: 1.4;
  font-size: 20px;
  font-style: italic;
  text-transform: uppercase;
  z-index: 2;
  opacity: 1;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default TeamCard;
