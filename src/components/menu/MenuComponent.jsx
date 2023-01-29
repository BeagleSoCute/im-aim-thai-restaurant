import { useState } from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";
import backgroundPic from "assets/background/gray_background.jpg";

const MenuComponent = ({ foodData, types }) => {
  const [displayMenu, setDisplayMenu] = useState(foodData);
  const [isSelectedType, setSelectedType] = useState("all");
  const handleChange = (inputType) => {
    let result = [];
    if (inputType !== "all") {
      result = foodData.filter((item) => item.type === inputType);
    } else {
      result = foodData;
    }
    setSelectedType(inputType);
    setDisplayMenu(result);
  };
  return (
    <StyledDiv bgImg={backgroundPic} className="menu-component background-img-styled">
      <Row className="layout-wrapper">
        <Col span={4}></Col>
        <Col span={16}>
          <Row className="content-wrapper">
            <Col className="title" span={24}>
              Menu
            </Col>
            <Col className="action-section" span={24}>
              <Row className="action-wrapper">
                {types.map((item) => (
                  <div
                    className={`action-button ${
                      item.type === isSelectedType ? "is-selected" : ""
                    }`}
                    key={item.id}
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
                {displayMenu.map((item) => (
                  <Col key={item.key} className="menu-content" span={12}>
                    <Row>
                      <Col span={6} className="menu-picture">
                        <Image src={item.pic} />
                      </Col>
                      <Col span={18} className="menu-description-section">
                        <Row>
                          <Col className="menu-name" span={12}>
                            {item.name}
                          </Col>
                          <Col className="menu-price gold-color" span={12}>
                            ${item.price}
                          </Col>
                          <Col className="menu-description" span={24}>
                            <p className="nomal-text">{item.description}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.menu-component {
    min-height:: 100vh;
    padding: 25px 0px;
    // background-color: red;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    .action-section {
      margin-bottom: 45px;
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
      //   background-color: green;
    }
    .action-wrapper {
      padding: 25px;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      justify-content: center;
      //   background-color: blue;
      .action-button {
        // background-color: pink;
        cursor: pointer;
        margin: auto 25px;
        font-size: 25px;
      }
      .action-button.is-selected{
        border-bottom: 3px solid orange;
      }
    }
    .menu-section {
      //   background-color: orange;
      .menu-content {
        margin-bottom: 45px;
      }
      .menu-description-section {
        padding: 10px 20px;
        // background-color: black;

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
        img {
          width: 100%;
          height: 150px;
        }
      }
    }
    .title {
      font-size: 35px;
      text-align: center;
    }
  }
`;

export default MenuComponent;
