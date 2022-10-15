import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LeftBar from "./LeftBar";
import Right from "./Right";

function Lunch() {
  return (
    <>
      <Container>
        <LeftBar />
        {/* Structuring of middle container starts */}
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
              <Menu to="/">Recommended</Menu>
              <Menu to="/breakfast">Breakfast</Menu>
              <Menu to="/lunch">Lunch</Menu>
              <Menu to="/dinner">Dinner</Menu>
              <Menu to="/icecream">Ice Cream</Menu>
              <Menu to="/coffee">Coffee</Menu>
            </Nav>
          </NavBar>

          <Content>
            <ImageContainer>
              <Image src={require("../../Assets/images/nasi.jpg")}></Image>
            </ImageContainer>
            <Caption>Coming to you real soon</Caption>
          </Content>
        </MiddleContainer>
        {/* Structuring of Middle container ends */}
        <Right />
      </Container>
    </>
  );
}

export default Lunch;
const Container = styled.div`
  height: 100vh;
  display: flex;
`;
const MiddleContainer = styled.div`
  width: 70%;
  padding: 20px 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 10px;
`;
const HeadLeft = styled.div`
  width: 35%;
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
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
const MenuButton = styled.button`
  height: 35px;
  width: 60px;
  font-size: 12px;
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
  height: 35px;
  width: 90px;
  font-size: 12px;
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
  height: 35px;
  width: 75px;
  font-size: 12px;
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
  padding: 10px 15px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  width: 155px;
  font-size: 12px;
  border: none;
`;
const FormImageContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 10px;
  width: 10%;
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
  margin-bottom: 20px;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 5px;
`;
const Menu = styled(Link)`
  color: #747474;
  font-size: 13px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid var(--orange);
    height: 1px;
    width: 100px;
    bottom: -6px;
    left: -5px;
    opacity: 0;
  }
  &:hover {
    font-weight: 700;
    color: #000;
  }
  &:hover::after {
    opacity: 1;
  }
`;
const Content = styled.div``;
const ImageContainer = styled.div`
  width: 30%;
  margin: auto;
  border-radius: 10px;
  padding-top: 20px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  overflow: hidden;
`;
const Caption = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
  color: var(--orange);
`;
