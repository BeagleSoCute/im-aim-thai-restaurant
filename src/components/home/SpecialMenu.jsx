import styled from "styled-components";
import backgroundPic from "assets/background/gray_background.jpg";
import specialDishImg from "assets/common/special_dish.jpg";
import { Row, Col, Button } from "antd";

const SpecialMenu = () => {
  console.log("SpecialMenu render");
  return (
    <StyledDiv
      bgImg={backgroundPic}
      className="special-menu background-img-styled"
    >
      <Row className="wrapper">
        <Col sm={24} md={12} className="picture-area">
          <img src={specialDishImg} alt="special dish" />
        </Col>
        <Col sm={24} md={12} className="text-area">
          <Row>
            <Col span={24}>
              <h2 className="subtitle-text">SPECIAL DISH</h2>
            </Col>
            <Col span={24} className="title">
              <h1 className="special-menu-title">Pad kra pao</h1>
            </Col>
            <Col span={24} className="description nomal-text">
              <p>
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book It has survived not
                only five centuries, but also the leap into.
              </p>
            </Col>
            <Col className="button-action" span={24}>
              <Button size="large" ghost className="view-menu-button">
                See this Menu
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.special-menu {
    width: 100%;
    padding: 0px 50px;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    margin: auto 0px;
    .wrapper {
      height: 100%;
    }
    .picture-area {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-area {
      padding: 50px;
      background-color: #0e0e0e;
      margin: auto 0px;
      .title,
      .description {
        text-align: center;
      }
      .title {
        font-weight: bold;
        margin-bottom: 15px;
      }
      .special-menu-title {
        font-size: 20px;
      }
      .sub-title {
        font-weight: bold;
        font-size: 15px;
      }
      .button-action {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
`;

export default SpecialMenu;
