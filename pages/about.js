import React from "react";
import Head from "next/head";
import Ui from "../components/ui";
// import styled from "styled-components";

// const Div = styled.div`
//   position: absolute;
//   top: 0%;
//   z-index: -1;
//   padding-top: 15%;
//   height: 100%;
// `;

// const Header = styled.header`
//   text-align: center;
// `;

// const Article = styled.article`
//   width: 40%;
//   margin: auto;
//   line-height: 2rem;
// `;

export default function About() {
  return (
    <>
      <Head>
        <title>about page</title>
      </Head>
      <Ui />
      <header>
        <h1>About Us</h1>
      </header>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis
      </article>
      <style jsx>
        {`
          header {
            margin-top: 15%;
            text-align: center;
          }
          article {
            width: 40%;
            margin: auto;
            line-height: 2rem;
          }
        `}
      </style>
    </>
  );
}
