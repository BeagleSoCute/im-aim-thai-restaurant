import styled from "styled-components";
import pic from "assets/background/rock.jpg";
import { Row, Col } from "antd";
import IconWithDetails from "components/common/IconWIthDetail";

const ChefInfo = ({ strengthData }) => {
  return (
    <StyledDiv bgImg={pic} className="chef-info">
      <Row className="layout-wrapper">
        <Col className="title" span={24}>
          Our Strength
        </Col>
        <Col className="all-strength-wrapper" span={24}>
          <IconWithDetails data={strengthData} />
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
    &.chef-info{
        // background-color: green;
        padding: 50px;
        height: 100vh;
        background-color: #100e09;
        url(${(props) => props.bgImg});
        .layout-wrapper{
            text-align: center;
            justify-content: center;
            .title{
                font-size: 35px;
            }
        }
        .all-strength-wrapper{
            margin-top: 30px;
            // background-color: blue;
        }
       

    }
`;

export default ChefInfo;
