import styled from "styled-components";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import ChoiceOf from "components/foodDetails/ChoiceOf";

const propTypes = {
  type: PropTypes.object,
  details: PropTypes.object,
  selectedChoice: PropTypes.object,
  choiceOf: PropTypes.array,
  handleChange: PropTypes.func,
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
  choiceOf: [],
  selectedChoice: {},
  handleChange: () => {},
};

const FoodDetailsContent = ({
  type,
  details,
  choiceOf,
  selectedChoice,
  handleChange,
}) => {
  const isChoiceOf = choiceOf.length !== 0;
  const isAlreadySelectChoice = selectedChoice.price
    ? " $" + selectedChoice.price
    : " Please select a choice of meat";
  const showPrice = isChoiceOf ? isAlreadySelectChoice : " $" + details.price;
  return (
    <StyledDiv className="food-details-content bg-original-color">
      <Row>
        <Col span={24}>
          <StyledRow bgimg={type.pic} className="type-bg background-img-styled">
            <p>{type.label}</p>
          </StyledRow>
        </Col>
        {isChoiceOf && (
          <Col span={24}>
            <ChoiceOf
              data={choiceOf}
              handleChange={handleChange}
              selectedChoice={selectedChoice}
              isChoiceOf={isChoiceOf}
            />
          </Col>
        )}
        <Col className="menu-detail" span={12}>
          <img className="normal-img" src={details.pic} />
          <Col className="menu-detail-name title" span={24}>
            {details.name}
          </Col>
          <Col className="menu-detail-description normal-text" span={24}>
            {details.description}
          </Col>
          <Col className="menu-detail-price" span={24}>
            Price:
            <span className="gold-color">{showPrice}</span>
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
        height: 450px;
      }
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      .menu-detail img {
        height: 300px;
      }
    }
    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 768px) {
      .menu-detail img {
        height: 200px;
      }
      .menu-detail-name,.menu-detail-price{
        font-size: 20px!important;
      }
    }
  }
`;
const StyledRow = styled(Row)`
  &.type-bg {
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgimg});
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
