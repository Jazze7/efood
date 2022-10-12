import React from "react";
import styled from "styled-components";
import "../../App.css";

export default function Spotlight() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <ContentContainer>
            <LogoContainer>
              <LogoImage
                src={require("../../Assets/images/logo.svg").default}
              ></LogoImage>
            </LogoContainer>

            <WidgetContainer>
              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/menu.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/circlepiece.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/love.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/square.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/cart.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/settings.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/profile.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/exclamation.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>
            </WidgetContainer>

            <ProfilePic>
              <Picture src={require("../../Assets/images/pic.jpg")}></Picture>
            </ProfilePic>
          </ContentContainer>
        </LeftContainer>

        {/* <MiddleContainer>

        </MiddleContainer> */}
      </MainContainer>
    </>
  );
}
const MainContainer = styled.section`
  height: 100vh;
  padding: 20px 0;
`;
const LeftContainer = styled.div`
  width: 10%;
`;
const ContentContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  width: 100%;
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const WidgetContainer = styled.ul`
  background: var(--orange);
  margin: 60px 0;
  padding: 20px 0;
  border-radius: 50px;
`;
const WidgetImageContainer = styled.li`
  width: 40%;
  margin: 0 auto 20px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: -7px;
    left: -7px;
    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    border-radius: 50%;
    background-color: #FFFFFF;
  }
  &:hover {
    &::after {
       opacity:0.3;
    }
}
`;
const WidgetImage = styled.img`
  width: 100%;
  display: block;
`;
const ProfilePic = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;
const Picture = styled.img`
  width: 100%;
  display: block;
`;
