import React from "react";
import styled from "styled-components";
import "../../App.css";

export default function Spotlight() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <LogoContainer>
            <LogoImage
              src={require("../../Assets/images/logo.svg").default}
            ></LogoImage>
          </LogoContainer>

          <WidgetContainer>
            <WidgetImage
              src={require("../../Assets/images/menu.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/circlepiece.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/love.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/square.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/cart.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/settings.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/profile.svg").default}
            ></WidgetImage>
            <WidgetImage
              src={require("../../Assets/images/exclamation.svg").default}
            ></WidgetImage>
          </WidgetContainer>

          <ProfilePic>
            <Picture src={require("../../Assets/images/pic.jpg")}></Picture>
          </ProfilePic>
        </LeftContainer>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.section``;
const LeftContainer = styled.div``;
const LogoContainer = styled.div``;
const LogoImage = styled.img``;
const WidgetContainer = styled.div``;
const WidgetImage = styled.img``;
const ProfilePic = styled.div``;
const Picture = styled.img``;
