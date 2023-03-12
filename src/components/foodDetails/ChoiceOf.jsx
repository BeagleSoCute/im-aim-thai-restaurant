import styled from "styled-components";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.array,
  selectedChoice: PropTypes.object,
  handleChange: PropTypes.func,
};
const defaultProps = {
  data: [],
  selectedChoice: {},
  handleChange: () => {},
}

const ChoiceOf = ({ data, selectedChoice, handleChange }) => {
  return (
    <StyledDiv span={4} className="choice-of mx-5 mb-2 py-xl-1 px-xl-5">
      <h1>Choice of Meats</h1>
      <Row justify={"center"}>
        {data.map((item) => (
          <StyledCol
            isselected={selectedChoice.id === item.id ? "true" : "false"}
            onClick={() => handleChange(item)}
            key={item.id}
            className="each-item  p-3"
            xs={12}
            xl={4}
          >
            <Col className="icon" span={24}>
              <img alt="icon" src={item.icon} />
            </Col>
            <Col className="label" span={24}>
              {item.label}
            </Col>
            <Col className="price" span={24}>
              Price: ${item.price}
            </Col>
          </StyledCol>
        ))}
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.choice-of {
    text-align: center;
    .icon img {
      width: 45px;
      height: 45px;
    }
  }
`;
const StyledCol = styled(Col)`
  &.each-item {
    background-color: ${(props) =>
      props.isselected === "true" ? "#131414" : "#222222"};
    width: 100%;
    border: 1px solid black;
    cursor: pointer;
  }
`;

ChoiceOf.propTypes = propTypes;
ChoiceOf.defaultProps = defaultProps;
export default ChoiceOf;
