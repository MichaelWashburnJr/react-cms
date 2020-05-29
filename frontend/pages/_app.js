import React from 'react';
import Nav from '../components/layout/Nav';
import withApollo from '../api/apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
};

export default withApollo({ ssr: true })(App);