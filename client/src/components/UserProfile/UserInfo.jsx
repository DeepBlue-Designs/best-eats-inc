import React, {useState, useContext} from 'react';
import Context from '../Context.jsx'
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import Avatar, { genConfig } from 'react-nice-avatar';
import { FaEdit } from 'react-icons/fa';

const config = genConfig("AvatarConfig?");
Modal.setAppElement("#app");

const UserInfo = () => {
  const { userData, setUserData } = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [currEmail, setEmail] = useState(null);
  const [currAddress, setAddress] = useState(null);
  const [healthStat, setHealthStat] = useState(null);

  //TODO: update user info routes
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);

    if (username) {
      console.log(username)
      axios.put(`user/${userData._id}/username/edit`, {"userName": username})
        .then((res) => console.log('successful user update', setUserData(res.data)))
        .catch((err) => console.log('user update failed', err))
    }
    if (currEmail) {
      axios.put(`user/${userData._id}/email/edit`, {"email": currEmail})
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }
    if (currAddress) {
      axios.put(`user/${userData._id}/address/edit`, {"address": currAddress})
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }
    if (healthStat) {
      console.log('axios', healthStat)
      axios.put(`user/${userData._id}/healthMetrics/edit`,
      { "healthMetrics": {
        "height": healthStat.height ? healthStat.height : userData.healthMetrics.height,
        "weight": healthStat.weight ? healthStat.weight : userData.healthMetrics.weight
        }
      }
      )
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }


  }

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === 'userName') {
      setUsername(value)
    } else if (name === 'email') {
      setEmail(value)
    } else if (name === 'address') {
      setAddress(value)
    } else if (name === 'weight') {
      setHealthStat({...healthStat, weight: value})
    } else if (name === 'height') {
      setHealthStat({...healthStat, height: value})
    }

  }

  return (
    <UserContainer>
      <MyProfile>MY PROFILE</MyProfile>
      <InfoView>
        <UserAv>
          <Avatar style={{ width: "9rem", height: "9rem" }} {...config} />
        </UserAv>
        <InfoContainer>
          <Info>
            UserName:
            <br />
            Email:
            <br />
            Address:
            <br />
            Height:
            <br />
            Weight:
          </Info>
          <Info>
            {userData.userName}
            <br />
            {userData.email}
            <br />
            {userData.address}
            <br />
            {userData.healthMetrics ? userData.healthMetrics.height : 0}
            <br />
            {userData.healthMetrics ? userData.healthMetrics.weight : 0}lbs
          </Info>
        </InfoContainer>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <EditButton onClick={() => setIsOpen(true)}><FaEdit /></EditButton>
            <Modal
              style={{
                overlay: {
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  paddingTop: '150px',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                  lineHeight: 2,
                  position: 'relative',
                  // top: '150px',
                  // left: '300px',
                  // inset: 'none',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '160px',
                  height: '270px'
                }
              }}
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit}>
                  <label style={{marginBottom: '10px'}}>Edit Profile</label>
                  <br />
                  <input type="text" name="userName" placeholder="User Name" onChange={handleChange}  />
                  <br />
                  <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                  <br />
                  <input type="text" name="address" placeholder="Shipping address" onChange={handleChange} />
                  <br />
                  <input type="number" name="weight" placeholder="Weight" onChange={handleChange} />
                  <br />
                  <input type="text" name="height" placeholder="5'10" onChange={handleChange} />
                  <br />
                  <SubmitBtn type="submit" value="Submit" />
                  <br />
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
          </div>
      </InfoView>
    </UserContainer>
  );
};

export default UserInfo;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280;
  background-color: white;
  margin: 20px 0 10px 0;
`;

const MyProfile = styled.div`
  font-size: 32px;
  margin: 20px 0 10px 0;
`;

const UserAv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 50px;
  border-radius: 20%;
  width: 25%;
  margin: 2%;
  padding-right: 30px;
`;
const InfoView = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 190px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2%;
`;

const Info = styled.p`
  margin-top: 4%;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 16px;
  width: 9rem;
  line-height: 1.5;
`;

const EditButton = styled.button`
  width: 12px;
  height: 20px;
  padding-left: 4px;
  margin-top: 35px;
`;

const SubmitBtn = styled.input`
  background: #FFEF9C;
  font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
  border: 2px solid #2A2E2B;
  border-radius: 7px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 5px;
`;