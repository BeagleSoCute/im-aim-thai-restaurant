import styled from "styled-components";
import { Row, Col, Image, Button } from "antd";
import backgroundPic from "assets/background/gray_background.jpg";
import { useNavigate } from "react-router-dom";
import { menuChoiceOf } from "data/menu";

const MenuComponent = ({
  displayMenu,
  types,
  isSelectedType,
  handleChange,
}) => {
  const navigate = useNavigate();
  return (
    <StyledDiv
      bgImg={backgroundPic}
      className="menu-component background-img-styled"
    >
      <Row className="layout-wrapper">
          <Row className="content-wrapper">
            <Col className="title" span={24}>
              Menu
            </Col>
            <Col className="action-section" span={24}>
              <Row className="action-wrapper">
                {types.map((item, index) => (
                  <div
                    className={`action-button ${
                      item.type === isSelectedType ? "is-selected" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      handleChange(item.type);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </Row>
            </Col>
            <Col className="menu-section" span={24}>
              <Row className="menu-wrapper">
                {displayMenu.map((item, index) => (
                  <Col key={index} className="menu-content" xs={24} md={12}>
                    <Row>
                      <Col xs={24} xl={10} className="menu-picture">
                        <Image src={item.pic} />
                      </Col>
                      <Col xs={24} xl={14} className="menu-description-section">
                        <Row>
                          <Col className="menu-name" span={14}>
                            {item.name}
                          </Col>
                          { item.amount &&
                           <Col className="menu-name" span={14}>
                           ( {item.amount} pcs )
                          </Col>}
                          <Col className="menu-price gold-color" span={10}>
                           { menuChoiceOf[item.type] && !item.noChoiceOfMeat ? 'Select Choice'  :'$'+item.price}
                          </Col>
                          <Col className="menu-description" span={24}>
                            <p className="normal-text">{item.description}</p>
                          </Col>
                          <Col className="menu-button" span={24}>
                            <Button
                              onClick={() =>
                                navigate(
                                  `/menu-details/${item.type}/${item.id}`
                                )
                              }
                              ghost
                              className="view-menu-button"
                            >
                              More Details
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.menu-component {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    padding: 25px 10px;
      background-color: #191919;
    .action-section {
      margin-bottom: 45px;
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
    }
    .action-wrapper {
      padding: 25px;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      justify-content: center;
      .action-button {
        cursor: pointer;
        margin: 10px 25px;
        font-size: 25px;
      }
      .action-button.is-selected {
        border-bottom: 3px solid orange;
      }
    }
    .menu-section {
      .menu-content {
        margin-bottom: 45px;
      }
      .menu-description-section {
        padding: 10px 20px;
        .menu-description {
          margin-top: 5px;
        }
        .menu-name,
        .menu-price {
          font-size: 18px;
        }
        .menu-price {
          text-align: end;
        }
      }
      .menu-picture {
        display: flex;
        justify-content: center;
        img {
          width: 180px;
          height: 180px;
        }
      }
    }
    .title {
      font-size: 35px;
      text-align: center;
    }
    @media only screen and (max-width: 1200px) {
      .action-button {
        margin: 20px 25px !important ;
      }
      .menu-price{
        margin: auto 0px;
        font-size: 14px!important;
      }
    }
    /* Laptops (1366px and up) */
    @media only screen and (max-width: 1366px) {
      .menu-price{
        margin: auto 0px;
        font-size: 12px!important;
      }
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }

    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 992px) {
    
    }

    /* styles for smartphone screens in landscape orientation */
    @media only screen and (min-width: 480px) and (max-width: 720px) {
    }

    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
      .action-button {
        font-size: 20px !important;
        /* margin: 20px !important ; */
      }
    }
  }
`;

export default MenuComponent;
