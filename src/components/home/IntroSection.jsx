import styled from "styled-components";
import pic from "assets/home/pad_thai.jpg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const IntroSection = () => {
  const navigate = useNavigate();
  console.log('intro section rerender')
  return (
    <StyledBackgroundImg
      className="intro-section background-img-styled"
      bgImg={pic}
    >
      <div className="center-text">
        <div className="main-text">Flavors Inspired by the Thai Culture</div>
        <div className="sub-text">
          Come with family & feel the joy of traditional Thai food
        </div>
        <Button
          onClick={() => navigate("/menu")}
          size="large"
          ghost
          className="view-menu-button"
        >
          View Our Menu
        </Button>
      </div>
    </StyledBackgroundImg>
  );
};

const StyledBackgroundImg = styled.div`
  &.intro-section {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    .center-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      .main-text {
        font-size: 50px;
        margin-bottom: 25px;
      }
      .sub-text {
        font-size: 20px;
      }
      .view-menu-button {
        margin-top: 55px;
      }
    }
  }
`;

export default IntroSection;
