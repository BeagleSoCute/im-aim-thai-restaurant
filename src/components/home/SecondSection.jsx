import styled from "styled-components";
import CardMenu from "components/common/CardMenu";
import { Row, Col } from "antd";

const SecondSection = ({ menuTypes, handleChange }) => {
  return (
    <StyledDiv className="second-section">
      <div className="mini-title"> SPECIAL THAI FOOD</div>
      <div className="content-wrapper header-text">Menu</div>
      <div className="content-wrapper normal-text">
        Select the menu that you like.
      </div>
      <Row gutter={[30, 30]} justify={"center"}>
        {menuTypes.map((item) => (
          <Col key={item.id} span={6}>
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
    color: white;
    .content-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .header-text {
      font-size: 35px;
    }
    .normal-text {
      font-size: 18px;
    }
    .mini-title {
      text-align: center;
    }
  }
`;
export default SecondSection;
