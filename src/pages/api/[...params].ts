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
}
interface Products {
  sku: string;
  category: string;
  productName: string;
  providerName: string;
  value: number;
  uid: string;
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
    if (params[0] === "inventory") {
      const inventoryRef = await get(ref(database, `/account/${params[1]}`));
      if (inventoryRef.exists()) {
        return response.status(200).json(params[1]);
      } else {
        return response.status(200).json("Inventory does not exists.");
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
      const userRef = ref(database, "account/" + accountID);
      await set(userRef, data);
      return response.status(200).json(accountID);
    } /*else if (params[0] === "products") {
      const { products } = request.body;
      const { uid } = products as Products;
      const userRef = ref(database, "user/" + uid);
      const newProduct = push(child(userRef, "inventory")).key;
    } */
  }
  return response.status(404).json(error);
}
