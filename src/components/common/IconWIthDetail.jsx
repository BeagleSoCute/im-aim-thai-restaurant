import styled from "styled-components";
import { Row, Col } from "antd";

const IconWithDetails = ({ data }) => {
  return (
    <StyledDiv className="icon-with-details">
      <Row className="icon-with-details-wrapper">
        {data.map((item, index) => (
          <StyledCol
            key={item.id}
            isodd={index % 2 === 0 ? "true" : "false"}
            className="each-icon-with-details"
            xs={24}
            lg={10}
            xl={4}
          >
            <Col className="icon-with-details-icon" span={24}>
              <img src={item.icon} alt={item.title} />
            </Col>
            <Col className="icon-with-details-title" span={24}>
              {item.title}
            </Col>
            <Col
              className="icon-with-details-description normal-text"
              span={24}
            >
              {item.description}
            </Col>
          </StyledCol>
        ))}
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.icon-with-details {
    text-align: center;
    .icon-with-details-wrapper {
      justify-content: center;
    }
    .icon-with-details-icon {
      img {
        width: 60px;
        height: 60px;
      }
    }
    .each-icon-with-details {
      margin: 10px 25px;
      width: 100%;
      padding: 50px;
    }
    .icon-with-details-title {
      margin: 25px 0px;
      font-size: 20px;
    }
  }
`;

const StyledCol = styled(Col)`
  &.each-icon-with-details {
    margin: 0 25px;
    width: 100%;
    background-color: ${(props) =>
      props.isodd === "true" ? "#131414" : "#121111"};
    padding: 50px;

    /* Laptops (1366px and up) */
    @media only screen and (max-width: 1366px) {
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }

    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 768px) {
    }

    /* styles for smartphone screens in landscape orientation */
    @media only screen and (min-width: 480px) and (max-width: 720px) {
    }

    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
    }
  }
`;

export default IconWithDetails;
