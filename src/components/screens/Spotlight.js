import React from "react";
import styled from "styled-components";
import "../../App.css";
import products from "../json/Product.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Spotlight() {
  const [startDate, setStartDate] = useState(new Date());
  // function to render date
  function renderDate() {
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd MMM yyyy"
      />
    );
  }

  //function to render the products
  let renderProduct = () => {
    return products.map((product) => {
      return (
        <Productlist key={product.id}>
          <PicContainer>
            <Photo
              src={require(`../../Assets/images/${product.image}`)}
            ></Photo>
          </PicContainer>
          <Title>{product.title}</Title>
          <Detail>
            <PriceContainer>
              <DiscountPrice>
                <Dollar>$</Dollar>
                {product.Discount_Price}
              </DiscountPrice>
              <ActualPrice>{product.Actual_Price}</ActualPrice>
            </PriceContainer>
            <OrderButton>Order</OrderButton>
          </Detail>
        </Productlist>
      );
    });
  };
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

          <Content>{renderProduct()}</Content>
        </MiddleContainer>

        <RightContainer>
          <DateContainer>
            <HeadLine>Your meal plan</HeadLine>
            <DateBar>
              {renderDate()}
              <CalenderContainer>
                <Calender
                  src={require("../../Assets/images/calender.svg").default}
                ></Calender>
              </CalenderContainer>
              <ArrowContainer>
                <Arrow
                  src={require("../../Assets/images/arrowdown.svg").default}
                ></Arrow>
              </ArrowContainer>
            </DateBar>
          </DateContainer>

          <BreakfastContainer>
            <CaptionContainer>
              <Banner>Breakfast</Banner>
              <Purchased>Purchased</Purchased>
            </CaptionContainer>
            <Time>06.30AM</Time>
            <BreakFast>
              <BreakFastList>
                <BreakFastLeft>
                  <BreakFastImgCont>
                    <BreakFastImg
                      src={require("../../Assets/images/six.jpg")}
                    ></BreakFastImg>
                  </BreakFastImgCont>
                </BreakFastLeft>
                <BreakFastRight>
                  <Name>Nasi Goreng Park Parjo </Name>
                  <Pricing>
                    <Discount>
                      <Dollar>$</Dollar>8,10
                    </Discount>
                    <Actual>$10,10</Actual>
                  </Pricing>
                </BreakFastRight>
              </BreakFastList>

              <BreakFastList>
                <BreakFastLeft>
                  <BreakFastImgCont>
                    <BreakFastImg
                      src={require("../../Assets/images/six.jpg")}
                    ></BreakFastImg>
                  </BreakFastImgCont>
                </BreakFastLeft>
                <BreakFastRight>
                  <Name>Nasi Goreng Park Parjo </Name>
                  <Pricing>
                    <Discount>
                      <Dollar>$</Dollar>8,10
                    </Discount>
                    <Actual>$10,10</Actual>
                  </Pricing>
                </BreakFastRight>
              </BreakFastList>
            </BreakFast>
          </BreakfastContainer>
        </RightContainer>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.section`
  // height: 100vh;

  display: flex;
`;
const LeftContainer = styled.aside`
  width: 10%;
  padding: 20px 0;
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
    top: -9px;
    left: -8px;
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
  width: 50%;
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
const Menu = styled.li`
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
const Content = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
`;
const Productlist = styled.li`
  background: #f6f5fa;
  margin-bottom: 20px;
  width: 32%;
  border-radius: 15px;
  overflow: hidden;
`;
const PicContainer = styled.div`
  margin-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.h4`
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Dollar = styled.span`
  color: var(--orange);
  display: inline-block;
`;
const DiscountPrice = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;
const ActualPrice = styled.span`
  display: inline-block;
  color: #747474;
  text-decoration: line-through;
  font-size: 16px;
`;
const OrderButton = styled.button`
  background-color: var(--orange);
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  height: 25px;
  width: 50px;
`;
const RightContainer = styled.aside`
  background: #eeeeee;
  width: 20%;
  padding-left: 15px;
`;
const DateContainer = styled.div`
  padding-top: 20px;
`;
const HeadLine = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const DateBar = styled.div`
  position: relative;
`;
const CalenderContainer = styled.div`
  width: 23px;
  top: 7px;
  position: absolute;
  left: 3px;
`;
const Calender = styled.img`
  display: block;
  width: 100%;
`;
const ArrowContainer = styled.div`
  width: 20px;
  position: absolute;
  top: 10px;
  right: 26px;
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;
const BreakfastContainer = styled.div``;
const CaptionContainer = styled.div``;
const Banner = styled.h5`
  font-size: 15px;
  font-weight: 700;
`;
const Purchased = styled.div``;
const Time = styled.h4``;
const BreakFast = styled.ul``;
const BreakFastList = styled.li``;
const BreakFastLeft = styled.div``;
const BreakFastImgCont = styled.div``;
const BreakFastImg = styled.img`
  display: block;
  width: 100%;
`;
const BreakFastRight = styled.div``;
const Name = styled.h5``;
const Pricing = styled.div``;
const Discount = styled.h4``;
const Actual = styled.h6``;
