import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap";
//import '../styles/globals.css'
import Layout from "../components/Layout";
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
