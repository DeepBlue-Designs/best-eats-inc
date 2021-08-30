import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import userData from '../../../../database/userData/json/dummyUser1.json';
import Avatar, { genConfig } from 'react-nice-avatar';
import { FaEdit } from 'react-icons/fa';

const config = genConfig('AvatarConfig?')

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

  const editInfo = () => {
    alert('You can edit user info soon')
  }

  return (
    <UserContainer>
      <InfoView>
        <UserAv>
          <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
        </UserAv>
        <InfoContainer>
          <div>
            <Info>
              Name: {user.userName} <br /><br />
              Email: {user.email} <br /><br />
              Shipping Address: {user.address} <br /><br />
              Health Metrics:
            </Info>
          </div>
          <div>
            <button onClick={editInfo}>
              <FaEdit />
            </button>
          </div>
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

const UserAv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 20%;
  width: 25%;
  margin: 2%;
  `
const InfoView = styled.div`
display: flex;
border: 1px solid red;
flex-direction: row;
height: 250px; `

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  border: 1px solid black; `

const Info = styled.p`
  margin-top: 4%;
  border: 1px solid yellow;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 16px;
  `

const ButtonContainer = styled.div`
  margin: 2%;
  position: relative;
  justify-content: center;
  border: 1px solid pink;`

