import styled from "styled-components";
import { Row, Col, Carousel } from "antd";
import { reviewers } from "data/personal";
import backgroundImg from "assets/background/enjoy.jpg";

const contentStyle = {
  height: "100vh",
  margin: "auto 0px",
  color: "#fff",
  textAlign: "center",
  padding: "50px",
};

const ReviewSection = () => {
  return (
    <StyledDiv
      bgImg={backgroundImg}
      className="review-section background-img-styled"
    >
      <Carousel>
        {reviewers.map((item, index) => (
          <div key={index} className="test">
            <Row className="content-layout" style={contentStyle}>
              <Col className="content-wrapper" span={24}>
                <h1>{item.review}</h1>
              </Col>
              <Col className="reviewer-profile content-wrapper">
                <img src={item.pic} alt={item.name} />
                <p className="normal-text">{item.name}</p>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.review-section {
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    .content-layout {
      justify-content: center;
    }
    .content-wrapper {
      margin: auto 0px;
      justify-content: center;
      h1 {
        font-size: 40px;
      }
      img {
        height: 150px;
        width: 150px;
        display: inline-flex;
        border-radius: 50%;
      }
      /* Laptops (1366px and up) */
      @media only screen and (max-width: 1366px) {
      }
      /* styles for tablet screens in landscape orientation */
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
      }

      /* styles for tablet screens in portrait orientation */
      @media only screen and (max-width: 992px) {
        h1 {
          font-size: 24px;
        }
     
      }

      /* styles for smartphone screens in landscape orientation */
      @media only screen and (min-width: 480px) and (max-width: 720px) {
      }

      /* styles for smartphone screens in portrait orientation */
      @media only screen and (max-width: 480px) {
      }
    }
  }
`;
export default ReviewSection;
