import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../Apollo/apollo-client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function MyApp({ Component, pageProps }) {
  return(
      <ApolloProvider client={client}>
          <Header/>
          <Component {...pageProps} />
          <ToastContainer />
          <Footer/>
      </ApolloProvider>
  )
}

export default MyApp;

