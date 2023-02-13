import styled from "styled-components";
import { Col } from "antd";
const PicWithDetails = ({ pic, title, subtitle, description }) => {
  return (
    <StyledCol sm={12} xl={4} className="pic-with-details">
      <img src={pic} alt={title} />
      <div className="pic-with-details-title">{title}</div>
      <div className="pic-with-details-sub-title gold-color">{subtitle}</div>
      <div className="pic-with-details-sub-description normal-text">
        {description}
      </div>
    </StyledCol>
  );
};

const StyledCol = styled(Col)`
  &.pic-with-details {
    margin: 20px 25px;
    img {
      height: 450px;
      width: 100%;
    }
    .pic-with-details-title {
      font-size: 24px;
    }
    .pic-with-details-sub-title {
      font-size: 16px;
    }
    .pic-with-details-title,
    .pic-with-details-sub-title,
    .pic-with-details-sub-description {
      margin-top: 10px;
    }
  }
`;

export default PicWithDetails;
