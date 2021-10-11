import React from "react";
import styled from "styled-components";
import image from "../../assets/portifolio.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff5f5;
`;
const Wrapper = styled.div`
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;
`;

const Wrapper2 = styled.div`
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #f56565;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  line-height: 1.5;
  font-weight: 300;
`;
const Text = styled.p`
  text-align: center;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125em;
  line-height: 1.5;
  font-weight: 300;
`;

const Text2 = styled.p`
  text-align: center;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 600;
`;
const Inter = styled.div`
  text-align: center;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125em;
  line-height: 1.5;
  font-weight: 300;
`;

const Strong = styled.strong`
  color: inherit;
  font-weight: bolder;
`;

const Span = styled.span`color: #f56565;`;

const UseCase = styled.div`
  top: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const TextUseCase = styled.h2`
  text-align: center;
  color: #e53e3e;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.175rem;
  width: calc(100% + 0.175rem);
  font-size: 1em;
  line-height: 1.5;
  font-weight: 700;
`;

const TextUseCase2 = styled.h2`
  text-align: center;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -0.1rem;
  width: 100%;
  font-size: 2.25em;
  line-height: 1;
  font-weight: 800;
`;
const TextUseCase3 = styled.h2`
  text-align: center;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 300;
`;

const ContainerSocial = styled.div`background: red;`;
const Test = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
  align-items: center;
`;

const Row = styled.div`
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;
  justify-content: center;
  padding: 2rem 5rem;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
`;

const InterSocial = styled.div`
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
  height: 500px;
  justify-content: center;
  padding: 30px;
  background: blue;
`;

const ParagraphSocial = styled.p`
  text-align: left;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -0.1rem;
  width: 100%;
  font-size: 1.75em;
  line-height: 1.5;
  font-weight: 800;
`;

const ParagraphSocialInfo = styled.p`
  text-align: left;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 300px;
`;

const ParagraphSocialA = styled.a`
  color: #e53e3e;
  text-decoration: underline;
  transition: color 0.25s;
`;

const Image = styled.img`
  width: inherit;
  max-width: 80%;
  vertical-align: top;
  border-radius: 0 !important;
`;

const ContainerConnect = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const Social = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const Icons = styled.ul`
  font-size: 1.625em;
  width: calc(100% + 0.625rem);
  margin-left: -0.3125rem;
`;

export default function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Inter>
            <Paragraph>❝</Paragraph>
            <Text>
              This agency is the greatest thing we have ever seen. Totally
              recommended for your projects.
            </Text>

            <Text2>
              Your mom - <Span>Say Ahhh, Inc.</Span>
            </Text2>
          </Inter>
        </Wrapper>
      </Container>
      <UseCase>
        <Wrapper>
          <Inter>
            <br />
            <br /> <br />
            <TextUseCase>WORK</TextUseCase>
            <TextUseCase2>Use Cases</TextUseCase2>
            <TextUseCase3>
              Check out our previous work. Businesses went from laggards to
              innovators, after out automation improvements spearheaded revenue.
            </TextUseCase3>
          </Inter>
        </Wrapper>
      </UseCase>
      <br />
      <br />
      <Row>
        <div>
          <ParagraphSocial>
            Social Media<br /> Automation
          </ParagraphSocial>
          <ParagraphSocialInfo>
            We have worked on a number of different projects <br /> in this
            space. From creating a bot to post to <br /> multiple Facebook
            groups, to liking positive tweets <br /> and saving negative tweets
            in a database for follow <br /> - up.
            <ParagraphSocialA href="http://www.google.com.br">
              Read More →
            </ParagraphSocialA>
          </ParagraphSocialInfo>
        </div>
        <div>
          <Image src={image} />
        </div>
      </Row>
      <Row style={{ padding: 30 }}>
        <div>
          <ParagraphSocial>Spreadsheet Automation</ParagraphSocial>
          <ParagraphSocialInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua.
            Ut enim ad minim veniam, <br /> quis nostrud
            <ParagraphSocialA href="http://www.google.com.br">
              Read More →
            </ParagraphSocialA>
          </ParagraphSocialInfo>
        </div>

        <div>
          <ParagraphSocial>ChatBot for office space</ParagraphSocial>
          <ParagraphSocialInfo>
            Our client currently supports both in office and <br /> remote work.
            Our chatbot let's users reserve an <br /> office space, all on
            Microsoft Teams.
            <ParagraphSocialA href="http://www.google.com.br">
              Read More →
            </ParagraphSocialA>
          </ParagraphSocialInfo>
        </div>
      </Row>

      <ContainerConnect>
        <Wrapper>
          <h3>CONNECT</h3>
          <h1> Let's automate it</h1>
          <h5>Contact us to help take your business to the next level! 🚀</h5>
          <button>ola</button>

          <Social>
            <Wrapper>
              {/* <Icons /> */}
            </Wrapper>
          </Social>
        </Wrapper>
      </ContainerConnect>
    </footer>
  );
}
