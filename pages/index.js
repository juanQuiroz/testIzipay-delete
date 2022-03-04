import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Pagar from "../components/Pagar";

export default function Home() {
  const [token, setToken] = React.useState(null);
  const [dataCarrito, setDataCarrito] = React.useState({ currency: "PEN" });

  const submitForm = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://test-izipay-delete.vercel.app/api/createPayment",
        dataCarrito,
      );
      console.log("TRY-INDEX ->", res);
      setToken(res.data.answer.formToken);
    } catch (e) {
      console.log("CATCH-INDEX ->", e);
    }
  };
  return (
    <div>
      <div className="m-5">
        <h1 className="text-red-500 font-bold text-2xl">Form Carrito</h1>
        <form onSubmit={submitForm} className="w-2/12">
          <div className="my-1 ">
            <label htmlFor="amount">Monto</label>
            <input
              className="ml-2 bg-gray-50 rounded-md "
              type="text"
              name="amount"
              onChange={e =>
                setDataCarrito({ ...dataCarrito, amount: e.target.value })
              }
            />
          </div>
          <div className="my-1 ">
            <label htmlFor="orderId">OrdenID</label>
            <input
              className="ml-2 bg-gray-50 rounded-md "
              type="text"
              name="orderId"
              onChange={e =>
                setDataCarrito({ ...dataCarrito, orderId: e.target.value })
              }
            />
          </div>
          <div className="my-1 ">
            <label htmlFor="customer">Cliente</label>
            <input
              className="ml-2 bg-gray-50 rounded-md "
              type="text"
              name="customer"
              onChange={e =>
                setDataCarrito({
                  ...dataCarrito,
                  customer: { email: e.target.value },
                })
              }
            />
          </div>

          <button className="my-3 w-full py-1 text-white bg-red-500  rounded-lg shadow-md">
            pasar a pago ...
          </button>
        </form>
      </div>

      <div> {token ? <Pagar token={token} /> : null}</div>
    </div>
  );
}
