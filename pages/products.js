import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../seeds";

const Products = ({ products }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Buy beautiful, high quality clothes to wear always."
        />
        <title>Beautiful, high quality clothes</title>
      </Head>

      <div className="container-fluid h-100">
        <div className="row h-100">
          <Header />
          <main className="container">
            <h1>Products List</h1>
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col-md-4">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Products.getInitialProps = async () => {
  return { products };
};

export default Products;
