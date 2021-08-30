import React from 'react';
import styled from 'styled-components';

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

const Nutritionist = styled.div`
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

const LetsGetHealthy = () => {
  return (
    <Container>
      <Description>
        <h1>LET&apos;S GET HEALTHY</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Description>
      <Break />
      <Nutritionist>
        <Photo src="https://www.ornatopia.com/wp-content/uploads/2020/10/images873-5f97103b3c1ba.jpg" />
        <Bio>
          <h2>Julie Barwick</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
      </Nutritionist>
      <br></br>
      <Nutritionist>
        <Bio>
          <h2>Brian Goodall</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
        <Photo src="https://www.nfsmi.org/wp-content/uploads/2020/12/Best-Nutrition-Certifications-for-Fitness-1024x680.jpg" />
      </Nutritionist>
      <br></br>
      <Nutritionist>
        <Photo src="https://www.nfsmi.org/wp-content/uploads/2019/07/how-to-become-a-nutritionist-1024x680.jpg" />
        <Bio>
          <h2>Sierra Wendt</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Bio>
      </Nutritionist>

    </Container>
  );
};

export default LetsGetHealthy;
