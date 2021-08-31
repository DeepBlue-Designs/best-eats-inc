import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import userData from '../../../../database/userData/json/dummyUser1.json';
import Avatar, { genConfig } from 'react-nice-avatar';
import { FaEdit } from 'react-icons/fa';

const config = genConfig('AvatarConfig?')
Modal.setAppElement('#app');

const UserInfo = () => {
  const [user, setUser] = useState(userData);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // axios.get('/userdata')
    //   .then((response) => {
    //     setUser(response.data)
    //   })
    //   .catch((err) => {
    //     console.log('setUser did not work', err)
    //   })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);

    // axios.post('/userdata', user)
    //   .then((res) => console.log('successful user update'))
    //   .catch((err) => console.log('user update failed', err))
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
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
              Username: {user.userName} <br /><br />
              Email: {user.email} <br /><br />
              Shipping Address: {user.address} <br /><br />
              Health Metrics: {user.healthMetrics ? user.healthMetrics : null}
            </Info>
          </div>
          <div>
            <button onClick={() => setIsOpen(true)}><FaEdit /></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="userName" placeholder="User Name" onChange={handleChange}  />
                  <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                  <input type="text" name="address" placeholder="Shipping address" onChange={handleChange} />
                  <input type="text" name="healthMetrics" placeholder="Health Metrics" onChange={handleChange} value={user.healthMetrics ? user.healthMetrics : ''}/>
                  <input type="submit" value="Submit" />
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
          </div>
>>>>>>> 07e8b909a918dca32fcc50906fc791a49821dbf1
        </InfoContainer>
      </InfoView>
    </UserContainer>
  );
}

export default UserInfo;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 2px solid green; `

<<<<<<< HEAD
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
=======
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

<<<<<<< HEAD
=======
const ButtonContainer = styled.div`
  margin: 2%;
  position: relative;
  justify-content: center;
  border: 1px solid pink;`
>>>>>>> 07e8b909a918dca32fcc50906fc791a49821dbf1
>>>>>>> ad5ca394a67751f32414017b3db722c5c0d440e1

