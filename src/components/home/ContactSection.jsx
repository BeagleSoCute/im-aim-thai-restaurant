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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.698072314614!2d174.71833351586585!3d-36.87364518860653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d471b48beccb5%3A0x2fb42783405c1f29!2sAIS%20Library%20-%20Auckland%20Institute%20of%20Studies%20Library!5e0!3m2!1sth!2snz!4v1675065759831!5m2!1sth!2snz"
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
    padding: 50px;
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
