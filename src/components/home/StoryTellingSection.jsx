import styled from "styled-components";
import storyPic1 from "assets/story/story1.jpg";
import storyPic2 from "assets/story/story2.jpg";
import storyPic3 from "assets/story/story3.jpg";
import { Row, Col, Button } from "antd";

const StoryTellingSection = () => {
  return (
    <StyledDiv className="story-telling-section">
      <Row className="wrapper">
        <Col className="text-area" xs={24} lg={10} xl={6}>
          <Row>
            <Col className="title gold-color" span={24}>
              Our Story
            </Col>
            <Col className="sub-title" span={24}>
            The Heart and Soul of Thai Cuisine at Im-Aim
            </Col>
            <Col className="description" span={24}>
              <p>
              At Im-Aim, we believe every flavor tells a story, transporting patrons to the heart of Thailand through our authentic cuisine. Our expert chefs artfully balance the essential Thai flavors: sweet, sour, salty, spicy, and bitter. Each dish captures the diverse culinary customs and regional influences that define this vibrant cuisine.

Join us at Im-Aim, where every meal is a journey through the rich tapestry of flavors that make Thai food unforgettable. Savor the tastes of Thailand in every delicious bite and create lasting memories with us.
              </p>
            </Col>
            <Col className="phone-title" span={24}>
              Call to order the best meal
            </Col>
            <Col className="phone-number" span={24}>
            06 2429 002
            </Col>
            {/* <Col className="button-action" span={24}>
              <Button size="large" ghost className="view-menu-button">
                Read More
              </Button>
            </Col> */}
          </Row>
        </Col>
        <Col className="picture-area" xs={24} lg={14} xl={17}>
          <Row>
            <Col span={8}>
              <img alt="pic1" className="pic1" src={storyPic1} />
            </Col>
            <Col span={8}>
              <img alt="pic2" className="pic2" src={storyPic3} />
            </Col>
            <Col span={8}>
              <img alt="pic3" className="pic3" src={storyPic2} />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.story-telling-section {
    background-color: #0e0e0e;
    min-height: 100vh;
    padding: 50px;
    color: white;
    .wrapper {
      height: 100%;
    }
    .text-area {
      padding: 30px;
      line-height: 2;
      .title {
        font-weight: bold;
        font-size: 20px;
      }
      .title,
      .sub-title,
      .description,
      .phone-number,
      .phone-title {
        text-align: center;
      }
      .sub-title {
        margin: 20px 0px;
        font-size: 35px;
      }
      .phone-number,
      .phone-title {
        color: #e4c950;
      }
      .phone-title {
        font-size: 20px;
      }
      .phone-number {
        font-size: 35px;
      }
    }
    .picture-area {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .picture-area,
    .text-area {
      margin: auto 0px;
    }
    .button-action {
      margin-top: 20px;
      text-align: center;
    }
    /* Laptops (1366px and up) */
    @media only screen and (max-width: 1366px) {
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }

    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 992px) {
      /* min-height: 100vh; */
    }

    /* styles for smartphone screens in landscape orientation */
    @media only screen and (min-width: 480px) and (max-width: 720px) {
    }

    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
    }
  }
`;
export default StoryTellingSection;
