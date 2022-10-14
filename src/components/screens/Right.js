import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";


export default function Right() {
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
  return (
    <>
      {/* Structuring of Right container starts */}
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
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
                  <Actual>$10,10</Actual>
                </Pricing>
              </BreakFastRight>
            </BreakFastList>
          </BreakFast>
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
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
                  <Actual>$10,10</Actual>
                </Pricing>
              </BreakFastRight>
            </BreakFastList>
          </BreakFast>
        </BreakfastContainer>

        <LunchContainer>
          <CaptionContainer>
            <Lemma>Lunch</Lemma>
            <Being>Being ordered</Being>
          </CaptionContainer>
          <Time>01.30PM</Time>
          <Lunch>
            <LunchList>
              <LunchLeft>
                <LunchImgCont>
                  <LunchImg
                    src={require("../../Assets/images/one.jpg")}
                  ></LunchImg>
                </LunchImgCont>
              </LunchLeft>
              <LunchRight>
                <Name>Nasi Goreng Park Parjo </Name>
                <Pricing>
                  <Discount>
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
                  <Actual>$10,10</Actual>
                </Pricing>
              </LunchRight>
            </LunchList>
          </Lunch>

          <Lunch>
            <LunchList>
              <LunchLeft>
                <LunchImgCont>
                  <LunchImg
                    src={require("../../Assets/images/one.jpg")}
                  ></LunchImg>
                </LunchImgCont>
              </LunchLeft>
              <LunchRight>
                <Name>Nasi Goreng Park Parjo </Name>
                <Pricing>
                  <Discount>
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
                  <Actual>$10,10</Actual>
                </Pricing>
              </LunchRight>
            </LunchList>
          </Lunch>
        </LunchContainer>

        <DinnerContainer>
          <CaptionContainer>
            <Banner>Dinner</Banner>
            <Order>Haven't ordered yet</Order>
          </CaptionContainer>
          <Time>09.30PM</Time>
          <Dinner>
            <DinnerList>
              <DinnerLeft>
                <DinnerImgCont>
                  <DinnerImg
                    src={require("../../Assets/images/night.jpg")}
                  ></DinnerImg>
                </DinnerImgCont>
              </DinnerLeft>
              <DinnerRight>
                <Name>Nasi Goreng Park Parjo </Name>
                <Pricing>
                  <Discount>
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
                  <Actual>$10,10</Actual>
                </Pricing>
              </DinnerRight>
            </DinnerList>
          </Dinner>
        </DinnerContainer>
        <DropContainer>
          <Drop>Drop here to add</Drop>
        </DropContainer>
      </RightContainer>
      {/* Structuring of right container ends */}
    </>
  );
}
const RightContainer = styled.aside`
  background: #eeeeee;
  width: 20%;
  padding: 0 15px;
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
  width: 22px;
  top: 7px;
  position: absolute;
  left: 7px;
`;
const Calender = styled.img`
  display: block;
  width: 100%;
`;
const ArrowContainer = styled.div`
  width: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;
const BreakfastContainer = styled.div`
  // padding-bottom: 10px;
`;
const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Banner = styled.h5`
  font-size: 15px;
  font-weight: 700;
`;
const Purchased = styled.div`
  background: #d9ffe5;
  color: #5cbe7b;
  font-size: 11px;
  border-radius: 10px;
  padding: 3px 11px;
  font-weight: 700;
`;
const Time = styled.h5`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const BreakFast = styled.ul``;
const BreakFastList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const BreakFastLeft = styled.div`
  width: 35%;
`;
const BreakFastImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;
const BreakFastImg = styled.img`
  display: block;
  width: 100%;
`;
const BreakFastRight = styled.div`
  width: 62%;
`;
const Name = styled.h5`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
const DollarSign = styled.span`
  display: inline-block;
  font-size: 10px;
  color: var(--orange);
`;
const Discount = styled.h4`
  font-size: 12px;
  font-weight: 700;
`;
const Actual = styled.h6`
  font-size: 10px;
  text-decoration: line-through;
  color: #747474;
`;
const LunchContainer = styled.div``;
const Lemma = styled.h5`
  font-size: 15px;
  font-weight: 700;
`;
const Being = styled.div`
  font-size: 10px;
  border-radius: 10px;
  background: #fef3df;
  color: #dfb77f;
  padding: 3px 11px;
  font-weight: 700;
`;
const Lunch = styled.ul``;
const LunchList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const LunchLeft = styled.div`
  width: 35%;
`;
const LunchImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;
const LunchImg = styled.img`
  display: block;
  width: 100%;
`;
const LunchRight = styled.div`
  width: 62%;
`;
const DinnerContainer = styled.div``;
const Order = styled.div`
  font-size: 10px;
  border-radius: 10px;
  background: #ffeae9;
  color: #d37670;
  padding: 3px 11px;
  font-weight: 600;
`;
const Dinner = styled.ul``;
const DinnerList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const DinnerLeft = styled.div`
  width: 35%;
`;
const DinnerImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;
const DinnerImg = styled.img`
  display: block;
  width: 100%;
`;
const DinnerRight = styled.div`
  width: 62%;
`;
const DropContainer = styled.div`
  padding-top: 10px;
`;
const Drop = styled.div`
  font-size: 12px;
  border-radius: 10px;
  border: 1px dashed #eac1a5;
  padding: 10px 43px;
  color: #d8772a;
  font-weight: 600;
  background-color: #ffecde;
`;
