import React from "react";
import Head from "next/head";
import Script from "next/script";

const Pagar = ({ token }) => {
  return (
    <div>
      <Script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"></Script>
      <Script
        src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"
        kr-public-key="57180685:publickey_WRU6P4ha9JbsAhqeEMXavkS8xiB8ouG88ktVLB6xlXiBq"
        // kr-post-url-success="paid.html"
      ></Script>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <!-- Javascript library. Should be loaded in head section --> */}

        {/* <!-- theme and plugins. should be loaded after the javascript library --> */}
        {/* <!-- not mandatory but helps to have a nice payment form out of the box --> */}
        <link
          rel="stylesheet"
          href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css"
        />
      </Head>

      <h1>Pasar a pagar</h1>
      <div className="kr-embedded" kr-form-token={token}>
        {/* <!-- payment form fields --> */}
        <div className="kr-pan"></div>
        <div className="kr-expiry"></div>
        <div className="kr-security-code"></div>

        {/* <!-- payment form submit button --> */}
        <button className="kr-payment-button">Pagar</button>

        {/* <!-- error zone --> */}
        <div className="kr-form-error"></div>
      </div>
    </div>
  );
};

export default Pagar;
