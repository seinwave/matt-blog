import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import BlogPost from "./BlogPost";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div``;

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR'd styled-components</title>
      </Head>
      <Container>
        <GlobalStyle />
        <Header />
        <BlogPost />
      </Container>
    </>
  );
}
