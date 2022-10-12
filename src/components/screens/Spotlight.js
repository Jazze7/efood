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

        <MiddleContainer>
          <Header>
            <HeadLeft>
              <Heading>Welcome,Epan Danis!</Heading>
              <SmallHeading>
                Dont forget to have breakfast today yeah !
              </SmallHeading>
            </HeadLeft>
            <HeadRight>
              <Buttons>
                <MenuButton>Menu</MenuButton>
                <MealButton>Meal plans</MealButton>
                <DeliveryButton>Delivery</DeliveryButton>
              </Buttons>
              <FormSearch>
                <FormInput placeholder="Search your food..."></FormInput>
                <FormImageContainer>
                  <FormImage
                    src={require("../../Assets/images/search.svg").default}
                  ></FormImage>
                </FormImageContainer>
              </FormSearch>
            </HeadRight>
          </Header>

          <SubHeading>Find the menu you want</SubHeading>

          <NavBar>
            <Nav>
              <Menu>Recommended</Menu>
              <Menu>Breakfast</Menu>
              <Menu>Lunch</Menu>
              <Menu>Dinner</Menu>
              <Menu>Ice Cream</Menu>
              <Menu>Coffee</Menu>
            </Nav>
          </NavBar>
        </MiddleContainer>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.section`
  height: 100vh;
  padding: 20px 0;
  display: flex;
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
    background-color: #ffffff;
  }
  &:hover {
    &::after {
      opacity: 0.3;
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
const MiddleContainer = styled.div`
  width: 70%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 30px;
`;
const HeadLeft = styled.div`
  width: 30%;
`;
const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const SmallHeading = styled.h6`
  font-size: 12px;
  font-weight: 700;
  color: #757575;
`;
const HeadRight = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;
const Buttons = styled.div`
  width: 52%;
  display: flex;
  justify-content: space-between;
`;
const MenuButton = styled.button`
  padding: 15px 25px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
`;
const MealButton = styled.button`
  padding: 15px 25px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
`;
const DeliveryButton = styled.button`
  padding: 15px 25px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
`;
const FormSearch = styled.form`
  display: flex;
  position: relative;
`;
const FormInput = styled.input`
  padding: 15px 15px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  width: 180px;
`;
const FormImageContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 10px;
`;
const FormImage = styled.img`
  width: 100%;
  display: block;
`;
const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const NavBar = styled.div`
  border-bottom: 1px solid #d4d4d4;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 10px;
`;
const Menu = styled.li`
  color: #747474;
  font-size: 15px;
  &:hover {
    
  }

`;
