import React from 'react';
import styled from 'styled-components';

const UserInfo = () => {
  return (
    <UserContainer>
      <InfoView>
        <Avatar>
        </Avatar>
        <InfoContainer>
          <Info>
            Name:
            <br />
            Email:
            <br />
            Shipping Address:
            <br />
            Health Metrics:
          </Info>
        </InfoContainer>
      </InfoView>
      <ButtonContainer>
        <button>Health and Lifestyle</button>
        <button>Manage Account</button>
      </ButtonContainer>
    </UserContainer>
  );
}

export default UserInfo;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 2px solid green; `

const InfoView = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: row;
  height: 250px; `


const Avatar = styled.div`
  position: relative;
  border: 1px solid blue;
  border-radius: 20%;
  width: 25%;
  margin: 2%;
  /* height: 80%;  */
  `

const InfoContainer = styled.span`
  margin: 2%;
  border: 1px solid black; `
  /* justify-content: space-between;` */

const Info = styled.span`
  font-family: Tahoma;
  font-size: 12px; `

  const ButtonContainer = styled.div`
    margin: 2%;
    position: relative;
    /* align-items: center; */
    justify-content: center;
    border: 1px solid pink;`

