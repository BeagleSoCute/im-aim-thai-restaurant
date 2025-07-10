import styled from "styled-components";
import backgroundPic from "assets/background/gray_background.jpg";
import specialDishImg from "assets/foods/pic43.jpg";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
const SpecialMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv
      bgImg={backgroundPic}
      className="special-menu background-img-styled"
    >
      <Row className="wrapper">
        <Col xs={24} lg={12} className="picture-area">
          <img src={specialDishImg} alt="special dish" />
        </Col>
        <Col xs={24} lg={12} className="text-area">
          <Row>
            <Col span={24}>
              <h2 className="subtitle-text">SPECIAL DISH</h2>
            </Col>
            <Col span={24} className="title">
              <h1 className="special-menu-title">Green Curry Salmon</h1>
            </Col>
            <Col span={24} className="description nomal-text">
              <p>
              Green Curry Salmon is an exquisite, mouthwatering Thai dish that artfully combines the tender, flaky texture of succulent salmon with the rich, fragrant flavors of traditional Thai green curry. This dish celebrates the delicate balance of sweet, spicy, and savory notes that Thai cuisine is renowned for, creating a symphony of taste sensations that will leave your taste buds dancing with delight.
              </p>
            </Col>
            <Col className="button-action" span={24}>
              <Button  onClick={() =>
                                navigate(
                                  `/menu-details/signatureDishes/${44}`
                                )
                              } size="large" ghost className="view-menu-button">
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
    /* Laptops (1366px and up) */
    @media only screen and (max-width: 1531px) {
      .text-area {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${(props) => props.bgImg});
      }
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 992px) {
  
    }

    /* styles for smartphone screens in landscape orientation */
    @media only screen and (min-width: 480px) and (max-width: 720px) {
    }

    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
      padding: 0px;
      .text-area {
        padding: 20px;
        margin: 0px;
      }
    }
  }
`;

export default SpecialMenu;
