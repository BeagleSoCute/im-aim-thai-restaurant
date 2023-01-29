import styled from "styled-components";
import { Card, Button } from "antd";
const { Meta } = Card;

const CardMenu = ({title, redirectPath, picPath}) => {
  return (
    <StyledDiv className="card">
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src={picPath}
          />
        }
      >
        <Meta
          className="card-text"
          title={title}
          description={
            <Button size="large" ghost className="view-menu-button">
              View this Menu
            </Button>
          }
        />
      </Card>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.card {
    .ant-card.ant-card-bordered {
      background: none;
      border: none;
      margin-top: 30px;
      margin:
    }
    .ant-card-meta-title,
    .ant-card-meta-description {
      color: white;
      text-align: center;
    }
    .ant-card-hoverable {
      cursor: auto;
    }
    img{
      height: 430px;
      background-size: contain;
    }
  }
`;

export default CardMenu;
