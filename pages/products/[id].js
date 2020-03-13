import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../seeds";

const Product = ({ products }) => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(product => id === product.id);

  return (
    <>
      <Head>
        <meta name="description" content={product.description} />
        <title>{product.name}</title>
      </Head>

      <div className="container-fluid h-100">
        <div className="row h-100">
          <Header />
          <main className="container">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Product.getInitialProps = async () => {
  return { products };
};

export default Product;
