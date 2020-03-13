import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Buy beautiful, high quality clothes to wear always."
        />
        <title>Beautiful, high quality clothes</title>
      </Head>
      <div className="cover w-100 h-100 p-3">
        <div className="cover-container row">
          <Header />
          <main role="main">
            <h1 className="cover-heading text-center">Cover your page.</h1>
            <p className="lead text-center">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead text-center">
              <a href="#" className="btn btn-lg btn-secondary">
                Learn more
              </a>
            </p>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
