import styled from "styled-components";
import { Row, Col, Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ReviewSection = () => {
  return (
    <StyledDiv className="review-section">
      <Carousel className="my-carousel" autoplay>
        <div>
          <h3 style={contentStyle}>
            I want to thank you for inviting me down for that amazing dinner the
            other night. The food was extraordinary.
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>  I want to thank you for inviting me down for that amazing dinner the
            other night. The food was extraordinary.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>  I want to thank you for inviting me down for that amazing dinner the
            other night. The food was extraordinary.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>  I want to thank you for inviting me down for that amazing dinner the
            other night. The food was extraordinary.</h3>
        </div>
      </Carousel>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
    &.review-section{
        height: 100vh;
        .my-carousel {
            height: 100%;
          }
    }
    
`;
export default ReviewSection;
