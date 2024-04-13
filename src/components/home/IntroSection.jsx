import styled from "styled-components";
import pic from "assets/home/pad_thai.jpg";
import { Helmet } from "react-helmet";
const IntroSection = () => {
  return (
    <StyledBackgroundImg
      className="intro-section background-img-styled "
      bgImg={pic}
    >
      <div className="content-wrapper">
        <h1 className="intro-title">Flavors Inspired by the Thai Culture</h1>
        <h2 className="intro-subtitle">
          Come with family & feel the joy of traditional Thai food
        </h2>
        <Helmet>
          <script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            defer
            async
          ></script>
        </Helmet>

        <div className="btn-section">
          <span
            class="glf-button"
            data-glf-cuid="afd6747a-daee-440b-9467-fd7828abebb9"
            data-glf-ruid="ff4a659b-9414-4a61-a07e-cf40a23b1f0c"
          >
            See MENU & Order
          </span>

          <span
            class="glf-button reservation"
            data-glf-cuid="afd6747a-daee-440b-9467-fd7828abebb9"
            data-glf-ruid="ff4a659b-9414-4a61-a07e-cf40a23b1f0c"
            data-glf-reservation="true"
          >
            Booking
          </span>
        </div>
      </div>
    </StyledBackgroundImg>
  );
};

const StyledBackgroundImg = styled.div`
  &.intro-section {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgImg});
    .content-wrapper {
      width: 100%;
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      .view-menu-button {
        margin-top: 55px;
      }
    }
.btn-section{
  margin-top: 50px;
}
    h1.intro-title {
      font-size: 50px;
    }
    h2.intro-subtitle {
      font-size: 25px;
    }
    /* Laptops (1366px and up) */
    @media only screen and (max-width: 1366px) {
      h1.intro-title {
        font-size: 50px;
      }
    }
    /* styles for tablet screens in landscape orientation */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      h1.intro-title {
        /* font-size: 10px; */
      }
      .content-wrapper {
        margin-top: 20px;
      }
      .view-menu-button {
        margin-top: 15px !important;
      }
    }
    /* styles for tablet screens in portrait orientation */
    @media only screen and (max-width: 768px) {
      h1.intro-title {
        font-size: 35px;
      }
      h2.intro-subtitle {
        font-size: 15px;
      }
      .content-wrapper {
        margin-top: 20px;
      }
    }
    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
      .content-wrapper {
        padding: 15px;
      }
    }
  }
`;

export default IntroSection;
