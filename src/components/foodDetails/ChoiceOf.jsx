import styled from "styled-components";
import { Row, Col } from "antd";

const ChoiceOf = ({ data, selectedChoice, handleChange }) => {
  return (
    <StyledDiv span={4} className="choice-of mx-5 p-1">
      <h1>Choice of Meats</h1>
      <Row justify={"center"}>
        {data.map((item) => (
          <StyledCol
            isselected={selectedChoice.id === item.id ? "true" : "false"}
            onClick={() => handleChange(item)}
            key={item.id}
            className="each-item my-3 p-3"
            span={4}
          >
            <Col className="icon" span={24}>
              <img src={item.icon} />
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
    background-color: #222222;
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
      props.isselected === "true" ? "#131414" : undefined};
    width: 100%;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export default ChoiceOf;