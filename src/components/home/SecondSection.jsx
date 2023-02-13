import styled from "styled-components";
import CardMenu from "components/common/CardMenu";
import { Row, Col } from "antd";

const SecondSection = ({ menuTypes, handleChange }) => {
  return (
    <StyledDiv className="second-section">
      <Row className="text-wrapper">
        <Col span={24}>
          <h2 className="subtitle-text"> SPECIAL THAI FOOD</h2>
        </Col>
        <Col span={24}>
          <h1 className=" header-text">Menu</h1>
        </Col>
        <Col span={24}>
          <p className=" normal-text">Select the menu that you like.</p>
        </Col>
      </Row>

      <Row gutter={[30, 30]} justify={"center"}>
        {menuTypes.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <CardMenu
              title={item.label}
              picPath={item.pic}
              handleChange={() => handleChange(item.type)}
            />
          </Col>
        ))}
      </Row>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.second-section {
    min-height: 100vh;
    background-color: #100e09;
    padding: 50px;
    p {
      font-size: 18px;
    }
    .text-wrapper{
      text-align: center;
    }
  }
`;
export default SecondSection;
