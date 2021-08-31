import React from 'react';
import styled from 'styled-components';

const MeetTheFarmers = () => {
  return (
    <Container>
      <Description>
        <h1>MEET THE FARMERS</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Description>
      <Break />
      <Farmer>
        <Photo src="https://www.tastearkansas.com/wp-content/uploads/2019/03/Critt.-County-Farm-Family-2010-Wallace-Family-034-1024x680.jpg" />
        <Bio>
          <h2>Nicholas Leon</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
      </Farmer>
      <br></br>
      <Farmer>
        <Bio>
          <h2>Nhu Mai</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
        <Photo src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Woman-Farmer.jpg" />
      </Farmer>
      <br></br>
      <Farmer>
        <Photo src="https://media.istockphoto.com/photos/happy-thai-female-farmer-harvesting-rice-in-countryside-thailand-picture-id1049653176?k=20&m=1049653176&s=612x612&w=0&h=6dF734j17dmJF6oO6PSWkCbSeqRSAPi0BncUe5nNmP0=" />
        <Bio>
          <h2>Xing Voong</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
      </Farmer>
      <br></br>
      <Farmer>
        <Bio>
          <h2>Cheikhani Ejiwen</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
        <Photo src="https://borgenproject.org/wp-content/uploads/Farming-Crisis-in-India.jpg" />
      </Farmer>


    </Container>
  );
};

export default MeetTheFarmers;

const Container= styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const Description = styled.div`
  width: 800px;
  text-align: center;
`;

const Farmer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
`;

const Bio = styled.div`
  width: 400px;
  align-content: center;
  text-align: center;
  border-radius: 25px;
  padding: 20px;
`;

const Photo = styled.img`
  width: auto;
  height: 400px;
  border-radius: 25px;
`;
