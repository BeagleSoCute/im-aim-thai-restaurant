import styled from "styled-components";
import storyPic1 from "assets/story/story1.jpg";
import storyPic2 from "assets/story/story2.jpg";
import storyPic3 from "assets/story/story3.jpg";
import { Row, Col, Button } from "antd";

const StoryTellingSection = () => {
  console.log('StoryTellingSection rerender')
  return (
    <StyledDiv className="story-telling-section">
      <Row className="wrapper">
        <Col className="text-area" span={6}>
          <Row>
            <Col className="title gold-color" span={24}>
              Our Story
            </Col>
            <Col className="sub-title" span={24}>
              Every Flavor Tells a Story
            </Col>
            <Col className="description" span={24}>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </Col>
            <Col className="phone-title" span={24}>
              Call to order the best meal
            </Col>
            <Col className="phone-number" span={24}>
              022 5099 759
            </Col>
            <Col className="button-action" span={24}>
              <Button size="large" ghost className="view-menu-button">
                Read More
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="picture-area" span={17}>
          <Row>
            <Col span={8}>
              <img className="pic1" src={storyPic1} />
            </Col>
            <Col span={8}>
              <img className="pic2" src={storyPic3} />
            </Col>
            <Col span={8}>
              <img className="pic3" src={storyPic2} />
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
        margin: 20px; 0px;
        font-size: 35px;
      }
      .phone-number, .phone-title{
        color: #e4c950
      }
      .phone-title{
        font-size: 20px;
      }
      .phone-number{
        font-size: 35px;
      }
    }
    .picture-area {
      img{
        width: 100%; 
        height: 100%;
      }
    }
    .picture-area, .text-area{
      margin: auto 0px;
    }
    .button-action{
      margin-top: 20px;
      text-align: center;
    }
  }
`;
export default StoryTellingSection;
