import { Row, Col } from "antd";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LoginAndRegisterLayout = () => {
  return (
    <StyledDiv className="login-and-register-layout">
      <Row>
        <Col span={8} />
        <Col className="form-wrapper" span={8}>
          <Outlet />
        </Col>
        <Col span={8} />
      </Row>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.login-and-register-layout {
    .form-wrapper {
      margin-top: 150px !important;
      display: block;
      padding: 20px;
      margin: auto;
      img-section {
        padding: 0px!important;
      }
      h1 {
        text-align: center;
      }
      .button-submit-layout {
        display: flex;
        justify-content: center;
      }
      button.button-submit {
        width: 250px;
      }
    }
    .content {
      height: 100%;
    }
  }
`;

export default LoginAndRegisterLayout;
