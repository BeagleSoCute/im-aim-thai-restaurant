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
  backgroundImg: `url(${(props) => props.bgImg})`,
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
              <Col className="reviewer-profile content-wrapper" span={24}>
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
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImg});

    .content-layout{
        justify-content: center;
    }
    .content-wrapper {
      margin: auto 0px;
      justify-content: center;
      h1 {
        font-size: 40px;
      }
      img{ 
        height: 150px; 
        width: 150px;
        display: inline-flex;
        border-radius: 50%;
      }
      .reviewer-profile{
        p{
            font
        }
      }
    }
  }
`;
export default ReviewSection;
