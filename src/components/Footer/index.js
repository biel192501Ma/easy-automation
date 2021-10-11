import React from "react";
import styled from "styled-components";
import image from "../../assets/portifolio.svg";

import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";

import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare";

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
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem !important;
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
  font-size: 2.5em;
  line-height: 1.5;
  font-weight: 800;
`;

const ParagraphSocialInfo = styled.p`
  text-align: left;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
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

const Div = styled.div`position: relative;`;
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

const Button = styled.button`
  text-align: center;
  color: #e53e3e;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.3rem;
  font-size: 1em;
  line-height: 1.5;
  width: 100%;
`;

const TextConnect = styled.h4`
  text-align: center;
  color: #e53e3e;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.175rem;
  width: calc(100% + 0.175rem);
  font-size: 1em;
  line-height: 1.5;
  font-weight: 700;
`;
const TextCenter = styled.h4`
  text-align: center;
  color: black;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.175rem;
  width: calc(100% + 0.175rem);
  font-size: 3em;
  line-height: 1.5;
  font-weight: 700;
`;

const TextCenter2 = styled.h4`
  text-align: center;
  color: black;
  font-family: 'Open Sans', sans-serif;

  letter-spacing: 0.175rem;
  width: calc(100% + 0.175rem);
  font-size: 1.15em;
  line-height: 1.5;
  font-weight: 700;
`;
const TextButton = styled.h4`color: white;`;
const LinkSocial = styled.div`
  background: transparent;
  padding: 25px 20px;
  text-align: center;
`;
const Link = styled.a`
  background: transparent;
  padding: 25px 25px;
`;
const TextMade = styled.h3`
  color: black;
  text-align: center;
`;

export default function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Inter>
            <Paragraph>❝</Paragraph>
            <Text>
              This agency is the greatest thing we have ever seen. Totally{" "}
              <br />
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
              Check out our previous work. Businesses went from laggards to{" "}
              <br />
              innovators, after out automation improvements spearheaded revenue.
            </TextUseCase3>
          </Inter>
        </Wrapper>
      </UseCase>
      <br />
      <br />
      <Row>
        <div>
          <ParagraphSocial>Social Media Automation</ParagraphSocial>
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
      <Row style={{ justifycontent: "space-between" }}>
        <div style={{ padding: "0px 60px" }}>
          <ParagraphSocial>Spreadsheet Automation</ParagraphSocial>
          <ParagraphSocialInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud
            <ParagraphSocialA href="http://www.google.com.br">
              Read More →
            </ParagraphSocialA>
          </ParagraphSocialInfo>
        </div>

        <Div style={{ padding: "0px 60px" }}>
          <ParagraphSocial>ChatBot for office space</ParagraphSocial>
          <ParagraphSocialInfo>
            Our client currently supports both in office and <br /> remote work.
            Our chatbot let's users reserve an <br /> office space, all on
            Microsoft Teams.
            <ParagraphSocialA href="http://www.google.com.br">
              Read More →
            </ParagraphSocialA>
          </ParagraphSocialInfo>
        </Div>
      </Row>

      <ContainerConnect>
        <Wrapper>
          <TextConnect>CONNECT</TextConnect>
          <TextCenter> Let's automate it</TextCenter>
          <TextCenter2>
            Contact us to help take your business to the next level! 🚀
          </TextCenter2>
          <br />
          <br />
          <Button className="btn btn-block btn-lg bg-danger ">
            <TextButton>Book Now</TextButton>
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Social>
            <Wrapper>
              <LinkSocial>
                <Link href="https://mail.google.com/">
                  <AiOutlineMail size={40} color="black" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <AiFillFacebook color="black" size={40} />
                </Link>
                <Link href="https://twitter.com/">
                  <AiFillTwitterSquare color="black" size={40} />
                </Link>
                <br />
                <br />
                <TextMade>
                  Made with <span style={{ color: "#F56565" }}>♡ </span> in the
                  United States
                </TextMade>
              </LinkSocial>
            </Wrapper>
          </Social>
        </Wrapper>
      </ContainerConnect>
    </footer>
  );
}
