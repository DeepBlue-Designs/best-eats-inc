import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import userData from '../../../../database/userData/json/dummyUser1.json';

const UserInfo = () => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    // axios.get('/userData')
    //   .then((response) => {
    //     setUser(response.data)
    //   })
    //   .catch((err) => {
    //     console.log('setUser did not work', err)
    //   })
  }, [])





  return (
    <UserContainer>
      <InfoView>
        <Avatar>
        </Avatar>
        <InfoContainer>
          <Info>
            Name: {user.userName}
            <br />
            Email: {user.email}
            <br />
            Shipping Address: {user.address}
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
  `

const InfoContainer = styled.span`
  margin: 2%;
  border: 1px solid black; `

const Info = styled.span`
  font-family: Tahoma;
  font-size: 12px; `

  const ButtonContainer = styled.div`
    margin: 2%;
    position: relative;
    justify-content: center;
    border: 1px solid pink;`

