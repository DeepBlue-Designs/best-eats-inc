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

  // useEffect(() => {
  //   axios.get('user/login')
  //     .then((response) => {
  //        //returns empty data
  //        console.log('data', response.data)
  //       // setUser(response.data)
  //     })
  //     .catch((err) => {
  //       console.log('setUser did not work', err)
  //     })
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);

    // axios.put(`user/${user.id}/update`, user)
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


