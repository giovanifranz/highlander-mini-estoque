import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../services/firebase";
import { ref, set, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

interface Account {
  providerID: string;
  name: string;
  photoURL: string;
  iventory: string;
  email: string;
  qrCode: string;
}

interface Products {
  sku: string;
  productName: string;
  providerName: string;
  value: number;
  qtd: number;
}

export default async function databaseAPI(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const params = request.query.params;
  const error = {
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  };
  if (request.method === "GET") {
    if (params[0] === "account") {
      const accountRef = await get(ref(database, `/account/${params[1]}`));
      if (accountRef.exists()) {
        return response.status(200).json(params[1]);
      } else {
        return response.status(200).json("Account does not exists.");
      }
    } else if (params[0] === "products") {
      const productsRef = await get(
        ref(database, `account/${params[1]}/products/`)
      );

      if (productsRef.exists()) {
        const products: Products = productsRef.val();
        const data = Object.entries(products).map(([key, value]) => {
          return {
            id: key,
            ...value,
          };
        });
        return response.status(200).json(data);
      } else {
        return response.status(200).json("Products does not exists.");
      }
    }
  }

  if (request.method === "POST") {
    if (params[0] === "account") {
      const { account } = request.body;
      const accountID = uuidv4();
      const data = {
        qrCode: process.env.NEXT_API_GOOGLE_QR_CODE_GENERATOR + accountID,
        ...account,
      };
      const accountRef = ref(database, "account/" + accountID);
      await set(accountRef, data as Account);
      return response.status(200).json(accountID);
    } else if (params[0] === "products") {
      const { products } = request.body;
      const { sku } = products;
      const productsRef = ref(database, `account/${params[1]}/products/${sku}`);
      await set(productsRef, products as Products);
      return response.status(200).end();
    }
  }
  return response.status(404).json(error);
}
