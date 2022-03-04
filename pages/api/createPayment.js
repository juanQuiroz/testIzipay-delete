import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  if (req.method === "POST") {
    const body = req.body;
    console.log(body);

    try {
      const response = await axios.post(
        "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment",
        body,
        {
          headers: {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization:
              "Basic NTcxODA2ODU6cHJvZHBhc3N3b3JkX082ZlgyaHM0bTRXdFRzUE5SVDdZblo2N3d4OUZmc0d5bHl4aEt4QU9mZEhvbQ==",
          },
        },
      );

      console.log("TRY -> ", response);

      res.status(200).send(response.data);
    } catch (e) {
      console.log("CATCH ->", e);
      res.status(500).send(e);
    }
  }
}

// const createPayment = async body => {
//   try {
//     const res = await axios.post(
//       "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment",
//       body,
//       {
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//           Authorization:
//             "Basic NTcxODA2ODU6dGVzdHBhc3N3b3JkX0R1aXRURTBJaHhZMjhTemtjUXkyWVBodXdjVXUzNzdVeUdDWXl0YzE5YlROZA==",
//         },
//       },
//     );

//     console.log(crearCompra);
//     res.status(201).json(res);
//   } catch (e) {
//     console.log(e);
//   }
// };
