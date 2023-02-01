import styled from "styled-components";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.object,
  details: PropTypes.object,
};
const defaultProps = {
  type: {
    id: 0,
    pic: "",
    type: "",
    label: "",
  },
  details: {
    id: 0,
    pic: "",
    type: "",
    name: "",
    price: "",
    description: "",
  },
};

const FoodDetailsContent = ({ type, details }) => {
  return (
    <StyledDiv className="food-details-content bg-original-color">
      <Row>
        <Col span={24}>
          <StyledRow bgImg={type.pic} className="type-bg background-img-styled">
            <p>{type.label}</p>
          </StyledRow>
        </Col>
        <Col className="menu-detail" span={12}>
          <img className="normal-img" src={details.pic} />
          <Col className="menu-detail-name title" span={24}>
            {details.name}
          </Col>
          <Col className="menu-detail-description normal-text" span={24}>
            {details.description}
          </Col>
          <Col className="menu-detail-price" span={24}>
            Price: <span className="gold-color"> ${details.price} </span>
          </Col>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.food-details-content {
    min-height: calc(100vh - 50px);
    .menu-detail {
      margin: 25px auto;
      .menu-detail-name {
        text-align: center;
        margin: 25px 0px;
      }
      .menu-detail-price {
        margin: 25px 0px;
        font-size: 25px;
      }
      img {
        width: 100%;
        height: 650px;
      }
    }
  }
`;
const StyledRow = styled(Row)`
  &.type-bg {
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    height: 250px;

    p {
      margin: auto 0px;
      font-size: 45px;
    }
  }
`;
FoodDetailsContent.propTypes = propTypes;
FoodDetailsContent.defaultProps = defaultProps;
export default FoodDetailsContent;
