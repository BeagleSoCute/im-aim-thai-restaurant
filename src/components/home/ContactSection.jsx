import styled from "styled-components";
import { Row, Col } from "antd";
import IconWithDetails from "components/common/IconWIthDetail";

const ContactSection = ({ contactDetails }) => {
  return (
    <StyledDiv className="contact-section bg-original-color">
      <Row className="contact-section-layout">
        <Col className="mini-title" span={24}>
          ANY QUERY ?
        </Col>
        <Col className="title" span={24}>
          Contact Us
        </Col>
        <Col className="google-map-section" span={24}>
          <iframe
            title="Google map for Im-Aim business"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.97630719944!2d176.0946919746982!3d-40.20958997472467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d41f3899c732f23%3A0x8ee6f345da3f1f3e!2sIm-Aim%20Thai%20Cuisine%20-%20Dannevirke!5e0!3m2!1sth!2snz!4v1682870696041!5m2!1sth!2snz"
            loading="lazy"
          ></iframe>
        </Col>
        <Col className="contact-details-title" span={24}>
          Contact Details:
        </Col>
        <Col span={24}>
          <IconWithDetails data={contactDetails} />
        </Col>
      </Row>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.contact-section {
    min-height: calc(100vh - 50px);
    text-align: center;
    .contact-section-layout {
      justify-content: center;
    }
    .map {
      width: 100%;
      height: 550px;
    }
    .contact-details {
      margin-top: 20px;
    }
    .contact-details-title {
      font-size: 22px;
      margin: 20px 0px;
    }
    .google-map-section {
      margin-top: 20px;
    }
  }
`;
export default ContactSection;
