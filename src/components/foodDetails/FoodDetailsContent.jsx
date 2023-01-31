import styled from "styled-components";
import { Row, Col } from "antd";

const FoodDetailsContent = () => {
  return (
    <StyledDiv className="food-details-content .background-img-styled">
      <Row>
        <Col span={24}>
          <StyledRow className="type-bg">test</StyledRow>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.food-details-content {
  }
`;

const StyledRow = styled(Row)`
  &.type-bg {
  }
`;

export default FoodDetailsContent;
