import styled from "styled-components";
import { Row, Col } from "antd";
import IconWithDetails from "components/common/IconWIthDetail";
import PicWithDetails from "components/common/PicWithDetails";

const ChefInfo = ({ strengthData, staffsData }) => {
  return (
    <StyledDiv  className="chef-info bg-original-color">
      <Row className="layout-wrapper strength-section">
        <Col className="title" span={24}>
          <div className="mini-title"> WHY CHOOSE US</div>
          Our Strength
        </Col>
        <Col className="all-strength-wrapper" span={24}>
          <IconWithDetails data={strengthData} />
        </Col>
      </Row>

      <Row className="layout-wrapper chef-section">
        <Col className="title" span={24}>
          <div className="mini-title"> EXPERIENCED TEAM</div>
          Meet Our Chef
        </Col>
        <Col className="chef-details-section" span={24}>
          <Row className="chef-details-layout">
            {staffsData.map((item, index) => (
              <PicWithDetails
                key={index}
                pic={item.pic}
                title={item.name}
                subtitle={item.role}
                description={item.description}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
    &.chef-info{
        padding: 50px;
        min-height: 100vh;
        .layout-wrapper{
            .title{
                font-size: 35px;
            }
        }
        .all-strength-wrapper{
            margin-top: 30px;
        }
        .chef-section{
            margin-top: 50px;
        }
        .pic-with-details{
            justify-content: center;
        }
        .chef-details-section{
            margin-top: 25px;
        }
        .title{
            text-align: center;
        }
        .chef-details-layout{
            justify-content: center;
        }
       

    }
`;

export default ChefInfo;
